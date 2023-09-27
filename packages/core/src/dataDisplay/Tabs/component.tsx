import React, { forwardRef, useMemo } from 'react';
import { nanoid } from 'nanoid';

import { TabButtonInterface, TabsInterface } from './interface';
import { TabButtonStyle, TabsHeaderStyle } from './style';

import { BaseContainer } from '../../containers/Base';
import { Flex } from '../../containers/Flex';
import { BaseText } from '../../elements/Typography';

export function TabButton({ isActive, tabTitle, color = 'primary', buttonProps }: TabButtonInterface) {
  return (
    <TabButtonStyle as="button" variant="linked" isActive={isActive} color={color} {...buttonProps}>
      <BaseText fontWeight="bold" lineHeight="tight">
        {tabTitle}
      </BaseText>
    </TabButtonStyle>
  );
}

export const Tabs = forwardRef<HTMLDivElement, TabsInterface>(
  ({ selectedIndex, onChange, tabs, tabHeaderProps, tabContentProps, ...props }, ref) => {
    const contents = useMemo(() => tabs.map((tab) => ({ ...tab, id: nanoid() })), [tabs]);

    const isCurrentIndex = (index: number) => selectedIndex === index;

    return (
      <Flex {...props} ref={ref}>
        <TabsHeaderStyle {...tabHeaderProps}>
          <Flex
            flexDirection="row"
            width="100%"
            gap="medium"
            container
            position="relative"
            alignItems="end"
            as="section"
          >
            {contents.map(({ id, buttonProps, handleClick, ...button }, index) => (
              <TabButton
                key={id}
                isActive={isCurrentIndex(index)}
                {...button}
                buttonProps={{
                  ...buttonProps,
                  onClick: (e) => {
                    // dont execute anything if it's already on the tab that it's been clicked
                    if (index === selectedIndex) return;

                    handleClick?.(index, e);

                    onChange?.(index);
                  },
                }}
              />
            ))}
          </Flex>
        </TabsHeaderStyle>

        <Flex flex="fluid" as="section" container width="100%" {...tabContentProps}>
          {contents[selectedIndex].content}
        </Flex>
      </Flex>
    );
  },
);

Tabs.defaultProps = {
  selectedIndex: 0,
};
