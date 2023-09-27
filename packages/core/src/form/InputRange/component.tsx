import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { clamp, normalizeValue, percentToValue, roundValueToStep, valueToPercent } from './helpers';
import { SliderProps } from './interface';
import {
  SliderContainer,
  SliderGradient,
  SliderLabel,
  SliderMark,
  SliderMarkLabel,
  SliderRail,
  SliderThumb,
  SliderTrack,
  SliderTrackGradient,
} from './style';

import { BaseText } from '../../elements/Typography';
import { $window } from '../../entities';
import { useEventCallback, useToggle } from '../../hooks';

export function Slider({
  gradient,
  disabled,
  getLabelValue,
  markLabel,
  onChange,
  value,
  max,
  min,
  step,
  mark: markProp,
}: SliderProps) {
  const [localValue, setValue] = useState(() => normalizeValue(value, max, min, step));

  useEffect(() => {
    setValue((previousValue) => {
      const newValue = normalizeValue(value, max, min, step);
      return newValue !== previousValue ? newValue : previousValue;
    });
  }, [value]);

  const { active, enable: activeThumb, disable: disableThumb } = useToggle();

  const sliderRef = useRef<HTMLDivElement>(null);

  const marks = useMemo(
    () =>
      markProp === true && step
        ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => {
            const markValue = min + step * index;

            return {
              value: markValue,
              ...(getLabelValue && markLabel && { label: getLabelValue(markValue) }),
            };
          })
        : [],
    [markProp, getLabelValue, step, min, max],
  );

  const onChangeTimeout = useRef<any>(0);

  const setValueFromEvent = useCallback(
    (e: MouseEvent | TouchEvent) => {
      let moveX = 0;

      try {
        if (e.type === 'touchmove') {
          const [touch] = (e as TouchEvent).changedTouches;
          moveX = touch?.clientX;
        } else {
          moveX = (e as MouseEvent).clientX;
        }
      } catch (err) {
        moveX = (e as MouseEvent).clientX;
      }

      const { width, left } = sliderRef.current.getBoundingClientRect();

      const percent = clamp((moveX - left) / width);
      let newValue = percentToValue(percent, min, max);
      newValue = roundValueToStep(newValue, step, min);

      setValue(newValue);

      // to improve performance delay the onChange call
      if (onChange) {
        clearTimeout(onChangeTimeout.current);

        onChangeTimeout.current = setTimeout(() => {
          onChange(newValue);
        }, 100);
      }
    },
    [min, max, step],
  );

  const handleMoveEvent = useEventCallback((e: MouseEvent) => {
    setValueFromEvent(e);
  });

  const handleEndEvent = useEventCallback(() => {
    disableThumb();
    $window.document.removeEventListener('mousemove', handleMoveEvent);
    $window.document.removeEventListener('mouseup', handleEndEvent);
    $window.document.removeEventListener('touchmove', handleMoveEvent);
    $window.document.removeEventListener('touchend', handleEndEvent);
  });

  const onStartMouseEvent = useEventCallback((e: MouseEvent) => {
    e.preventDefault();

    setValueFromEvent(e);
    activeThumb();

    $window.document.addEventListener('mousemove', handleMoveEvent, { passive: false });
    $window.document.addEventListener('mouseup', handleEndEvent, { passive: false });
  });

  const onStartTouchEvent = useEventCallback((e: TouchEvent) => {
    e.stopPropagation();

    setValueFromEvent(e);
    activeThumb();

    $window.document.addEventListener('touchmove', handleMoveEvent, { passive: false });
    $window.document.addEventListener('touchend', handleEndEvent, { passive: false });
  });

  const labelValue = getLabelValue ? getLabelValue(localValue) : String(localValue);

  const percent = `${valueToPercent(localValue, min, max)}%`;

  const trackStyles = {
    width: percent,
  };

  const thumbStyles = {
    left: percent,
  };

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={onStartMouseEvent}
      onTouchStart={onStartTouchEvent}
      disabled={disabled}
    >
      <SliderRail />

      {gradient ? (
        <SliderTrackGradient>
          <SliderGradient style={thumbStyles} />
        </SliderTrackGradient>
      ) : (
        <SliderTrack style={trackStyles} />
      )}

      {marks.map((mark) => {
        const style = { left: `${valueToPercent(mark.value, min, max)}%` };

        return (
          <React.Fragment key={mark.value}>
            <SliderMark active={mark.value <= localValue} style={style} />
            {mark.label && <SliderMarkLabel style={style}>{mark.label}</SliderMarkLabel>}
          </React.Fragment>
        );
      })}

      <SliderThumb borderRadius="circular" deep={1} active={active} style={thumbStyles}>
        {!disabled && (
          <SliderLabel>
            <BaseText>{labelValue}</BaseText>
          </SliderLabel>
        )}
      </SliderThumb>
    </SliderContainer>
  );
}

Slider.defaultProps = {
  value: 50,
  max: 100,
  min: 0,
  step: 1,
};
