import styled from 'styled-components';

export const CircleStyle = styled.circle``;

export const CircleSkeletonStyle = styled(CircleStyle)`
  stroke: ${({ theme }) => theme.colors.neutral['20']};
  fill: ${({ theme }) => theme.colors.neutral['5']};
`;
