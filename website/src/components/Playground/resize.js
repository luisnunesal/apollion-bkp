import React from 'react';

export const useResize = () => {
  const [splitNode, getSplitNode] = React.useState();
  const [containerNode, getContainerNode] = React.useState();
  const dragging = React.useRef(false);

  React.useEffect(() => {
    const mouseMove = (e) => {
      if (e.clientX > 380) {
        containerNode.style.width = `${e.clientX}px`;
      }
    };

    const mouseUp = (e) => {
      dragging.current = false;
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
    };

    const mouseDown = (e) => {
      e.preventDefault();
      dragging.current = true;
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('mouseup', mouseUp);
    };

    if (splitNode && containerNode) {
      splitNode.addEventListener('mousedown', mouseDown);
    }

    return () => {
      splitNode && splitNode.removeEventListener('mousedown', mouseDown);
    };
  }, [dragging, splitNode, containerNode]);

  return [getSplitNode, getContainerNode];
};
