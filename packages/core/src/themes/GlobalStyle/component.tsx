import { createGlobalStyle, DefaultTheme, FlattenInterpolation } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyleComponent = createGlobalStyle<{
  theme: DefaultTheme;
  extend?: FlattenInterpolation<{ theme: DefaultTheme }>;
}>`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.baseLight};


    ${({ theme }) => theme.breakpoints.up('sm')} {
      @media (min-resolution: 120dpi) {
        font-size: 14px;
      }

      @media (min-resolution: 160dpi) {
        font-size: 16px;
      }

      @media (min-resolution: 240dpi) {
        font-size: 18px;
      }

      @media (min-resolution: 320dpi) {
        font-size: 22px;
      }

      @media (min-resolution: 480dpi) {
        font-size: 26px;
      }

      @media (min-resolution: 640dpi) {
        font-size: 28px;
      }
    }
  }

  ${({ extend }) => extend};
`;
