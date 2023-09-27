import { motion } from 'framer-motion';
import styled from 'styled-components';

import { FlexFactory } from '../../factory';
import { BaseContainer } from '../Base';

export const DefaultFlexStyle = styled(BaseContainer)(FlexFactory({ flexDirection: 'column' }));

DefaultFlexStyle.defaultProps = {
  display: 'flex',
};

export const AnimatedFlex = motion(DefaultFlexStyle);
