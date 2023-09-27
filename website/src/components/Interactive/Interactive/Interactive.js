import * as R from 'ramda';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Code } from '../../Code';
import { InteractiveItem } from './InteractiveItem';
import './playground.css';

const convertFromArrayOfKnobsToArrayOfProps = (options) =>
  options.reduce((acc, cv) => {
    if (Array.isArray(cv)) {
      acc.push(convertFromArrayOfKnobsToArrayOfProps(cv));
    } else {
      acc.push({
        [cv.field]: cv.initialValue,
      });
    }
    return acc;
  }, []);

const convertFromReactWithKnobsPropsToArrayOfKnobs = (children) => {
  let buffer = [];
  React.Children.forEach(children, ({ props }) => {
    if (!props) {
      return [];
    }

    let nestedBuffer = Object.entries(props).reduce(
      (acc, [propKey, propValue]) => {
        if (propValue && propValue.isKnob) {
          acc.push({ field: propKey, ...propValue });
        }
        return acc;
      },
      []
    );

    if (props.children && !props.children.isKnob) {
      nestedBuffer = [
        ...nestedBuffer,
        ...convertFromReactWithKnobsPropsToArrayOfKnobs(props.children),
      ];
    }

    buffer.push([...nestedBuffer]);
  });

  return buffer;
};

const renderReactElementWithKnobAsRealPropValue = (element, isKnobProps) => {
  if (!element) return null;

  if (isKnobProps) {
    const [
      propsToReactElementPossibleWithChildren,
      childrenProps,
    ] = Object.entries(isKnobProps).reduce(
      (acc, [key, value]) => {
        if (Array.isArray(value)) {
          acc[1] = value;
        } else {
          if (typeof value === 'object') {
            acc[0] = { ...acc[0], ...value };
          } else {
            acc[0] = { ...acc[0], [key]: value };
          }
        }
        return acc;
      },
      [{}, []]
    );
    const {
      children: childrenElement,
      ...propsToReactElement
    } = propsToReactElementPossibleWithChildren;
    if (childrenElement) {
      return React.cloneElement(element, propsToReactElement, childrenElement);
    }

    if (childrenProps) {
      if (typeof element.props.children === 'string') {
        return React.cloneElement(
          element,
          propsToReactElement,
          element.props.children
        );
      }

      if (Array.isArray(element.props.children)) {
        const childrenElementsOfElement = React.Children.map(
          element.props.children,
          (elements, index) =>
            renderReactElementWithKnobAsRealPropValue(
              elements,
              childrenProps[index]
            )
        );

        return React.cloneElement(
          element,
          propsToReactElement,
          childrenElementsOfElement
        );
      }

      return React.cloneElement(
        element,
        propsToReactElement,
        renderReactElementWithKnobAsRealPropValue(
          element.props.children,
          childrenProps
        )
      );
    }

    return React.cloneElement(element, propsToReactElement);
  }

  return React.cloneElement(element);
};

const getInteractive = (coordinator, propsArr, help) =>
  coordinator
    .map((option, index) => {
      const props = propsArr[index];
      if (Array.isArray(option)) {
        return getInteractive(option, props, help * 10 + (index + 1));
      }

      if (Array.isArray(option) && option.length === 0) {
        return [];
      }

      return {
        type: option.type,
        key: option.label,
        values: option.options,
        field: option.field,
        value: props[option.field],
        position: help,
      };
    })
    .flat(Infinity);

const updateBasedInPositionAndPayload = (data, props) => {
  const { position, payload } = data;

  const positionArr = String(position)
    .split('')
    .map((n) => Number(n) - 1);

  const newV = getRight(props, positionArr).reduce((acc, cv, index) => {
    if (Object.keys(cv)[0] === Object.keys(payload)[0]) {
      acc[index] = payload;
    } else {
      acc[index] = cv;
    }
    return acc;
  }, []);

  return update(newV, props, ...positionArr);
};

function update(newValue, arr, ...indexes) {
  if (indexes.length === 1) {
    return R.update(indexes[0], newValue, arr);
  }

  const [index, ...rest] = indexes;

  return R.update(index, update(newValue, arr[index], ...rest), arr);
}

const getRight = (exe, wq) => wq.reduce((acc, cv) => acc[cv], exe);

export const Interactive = (playgroundProps) => {
  const [loading, setLoading] = React.useState(true);
  const [coordinator, setCoordinator] = React.useState([]);
  const [propsArr, setPropsArr] = React.useState([]);

  React.useEffect(() => {
    const arrayOfKnobs = convertFromReactWithKnobsPropsToArrayOfKnobs(
      playgroundProps.children
    );
    setCoordinator(arrayOfKnobs);
    setPropsArr(convertFromArrayOfKnobsToArrayOfProps(arrayOfKnobs));
    setLoading(false);
  }, []);

  if (loading) {
    // TODO: should create a pretty component for loading
    return <p>loading</p>;
  }

  const Component = renderReactElementWithKnobAsRealPropValue(
    playgroundProps.children,
    propsArr[0]
  );

  const arr = getInteractive(coordinator, propsArr, 0);
  return (
    <>
      {Component}
      <div className="playground-options">
        {arr.map((ar) => (
          <div className="item" key={ar.key}>
            <h3>{ar.key}</h3>

            <InteractiveItem
              {...ar}
              handleChange={(data) => {
                const newArr = updateBasedInPositionAndPayload(data, propsArr);
                setPropsArr(newArr);
              }}
            />
          </div>
        ))}
      </div>
      {!playgroundProps.hideCode && (
        <Code>
          {reactElementToJSXString(Component, {
            displayName: function (ReactElement) {
              return ReactElement.props.mdxType;
            },
            filterProps: ['mdxType', 'originalType'],
            useBooleanShorthandSyntax: false,
            maxInlineAttributesLineLength: playgroundProps.lineLength || 60,
          })}
        </Code>
      )}
    </>
  );
};
