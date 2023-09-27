import React, { CSSProperties, forwardRef, useCallback, useLayoutEffect, useRef, useState } from 'react';

import { OS_SCROLLBAR_WIDTH, SCROLLBAR_WIDTH } from './helper';
import { ScrollProps } from './interface';
import { Container, Inner, Track, Wrapper } from './style';

import { $window } from '../../entities';

export const CustomScroll = forwardRef<HTMLDivElement, ScrollProps>(
  ({ children, onScroll: onScrollProp, style, ...props }, ref) => {
    const [scrollRatio, setScrollRatio] = useState(1);

    const scrollerRef = useRef<HTMLDivElement>();
    const trackRef = useRef<HTMLDivElement>();
    const trackAnimationRef = useRef<number>(0);
    const memoizedProps = useRef<any>({});

    useLayoutEffect(() => {
      const el = scrollerRef.current;
      let scrollbarAnimation: number;

      const updateScrollbar = () => {
        cancelAnimationFrame(scrollbarAnimation);
        scrollbarAnimation = requestAnimationFrame(() => {
          if (el) {
            const { clientHeight, scrollHeight } = el;
            setScrollRatio(clientHeight / scrollHeight);

            memoizedProps.current = {
              clientHeight,
              scrollHeight,
              trackHeight: trackRef?.current?.clientHeight,
            };
          }
        });
      };

      $window.addEventListener('resize', updateScrollbar);
      updateScrollbar();

      return () => {
        cancelAnimationFrame(scrollbarAnimation);
        $window.removeEventListener('resize', updateScrollbar);
      };
    }, [scrollerRef, children]);

    const onScroll = useCallback(
      (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        if (onScrollProp) {
          onScrollProp(e);
        }

        if (scrollRatio === 1) return;
        const el = scrollerRef.current;
        const track = trackRef.current;

        cancelAnimationFrame(trackAnimationRef.current);

        trackAnimationRef.current = requestAnimationFrame(() => {
          const { clientHeight, scrollHeight, trackHeight } = memoizedProps.current;
          const ratio = el.scrollTop / (scrollHeight - clientHeight);
          const y = ratio * (clientHeight - trackHeight);
          track && (track.style.transform = `translateY(${y}px)`);
        });
      },
      [scrollerRef, scrollRatio],
    );

    const moveTrack = useCallback(
      (e) => {
        const el = scrollerRef.current;
        let moveAnimation: number;
        let lastPageY = e.pageY;
        let lastScrollTop = el?.scrollTop || 0;

        const drag = ({ pageY }: any) => {
          cancelAnimationFrame(moveAnimation);
          moveAnimation = requestAnimationFrame(() => {
            const delta = pageY - lastPageY;
            lastScrollTop += delta / scrollRatio;
            lastPageY = pageY;
            el && (el.scrollTop = lastScrollTop);
          });
        };

        const stop = () => {
          $window.removeEventListener('mousemove', drag);
        };

        $window.addEventListener('mousemove', drag);
        $window.addEventListener('mouseup', stop, { once: true });
      },
      [scrollerRef, scrollRatio],
    );

    // MacOs does not show the scrollbar while using a trackpad or apple mouse :X
    // We just hide the custom scroll in this situation, and let regular scroll do its things...
    const shouldDisplayTrack = !!OS_SCROLLBAR_WIDTH;

    const SCROLLBAR_SPACING = shouldDisplayTrack ? SCROLLBAR_WIDTH : 0;

    const wrapperProps = {
      style: {
        marginRight: `-${SCROLLBAR_SPACING}px`,
      },
    };

    const containerStyle = {
      ...style,
      paddingRight: SCROLLBAR_SPACING,
    };

    const scrollerProps = {
      onScroll,
      ref: scrollerRef,
      style: {
        width: `calc(100% + ${OS_SCROLLBAR_WIDTH}px)`,
        overflowX: 'hidden',
      } as CSSProperties,
    };

    const trackProps = {
      ref: trackRef,
      onMouseDown: moveTrack,
      style: {
        height: `${scrollRatio * 100}%`,
        display: scrollRatio === 1 ? 'none' : undefined,
      },
    };

    return (
      <Container {...props} style={containerStyle} ref={ref}>
        <Wrapper {...wrapperProps}>
          <Inner {...scrollerProps}>{children}</Inner>
        </Wrapper>
        {shouldDisplayTrack && <Track round="micro" {...trackProps} />}
      </Container>
    );
  },
);
