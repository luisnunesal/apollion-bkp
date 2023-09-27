import React from 'react';
import { components, IndicatorProps } from 'react-select';

export function DropdownIndicator<T>(props: IndicatorProps<T, any, any>) {
  return (
    <components.DropdownIndicator {...props}>
      <div style={{ width: 24 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: 'auto', background: '0 0' }}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          display="block"
        >
          <defs />
          <g transform="translate(80 50)">
            <circle r="6" fill="#9bb6c0" transform="scale(1.37926)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.875s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.875s"
              />
            </circle>
          </g>
          <g transform="rotate(45 -50 122)">
            <circle r="6" fill="#9bb6c0" fillOpacity=".9" transform="scale(1.44176)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.75s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.75s"
              />
            </circle>
          </g>
          <g transform="rotate(90 -15 65)">
            <circle r="6" fill="#9bb6c0" fillOpacity=".8" transform="scale(1.00426)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.625s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.625s"
              />
            </circle>
          </g>
          <g transform="rotate(135 0 42)">
            <circle r="6" fill="#9bb6c0" fillOpacity=".6" transform="scale(1.06676)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.5s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.5s"
              />
            </circle>
          </g>
          <g transform="rotate(180 10 25)">
            <circle r="6" fill="#9bb6c0" fillOpacity=".5" transform="scale(1.12926)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.375s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.375s"
              />
            </circle>
          </g>
          <g transform="rotate(-135 20 8)">
            <circle r="6" fill="#9bb6c0" fillOpacity=".4" transform="scale(1.19176)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.25s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.25s"
              />
            </circle>
          </g>
          <g transform="rotate(-90 35 -15)">
            <circle r="6" fill="#9bb6c0" fillOpacity=".3" transform="scale(1.25426)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.125s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="-0.125s"
              />
            </circle>
          </g>
          <g transform="rotate(-45 70 -72)">
            <circle r="6" fill="#9bb6c0" fillOpacity=".1" transform="scale(1.31676)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="0s"
                values="1.5 1.5;1 1"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                values="1;0"
                begin="0s"
              />
            </circle>
          </g>
        </svg>
      </div>
    </components.DropdownIndicator>
  );
}
