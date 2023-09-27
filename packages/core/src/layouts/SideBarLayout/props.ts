import { GridBreakpoints } from '../../containers/Grid';

export const SideBarLayoutMedias: GridBreakpoints = {
  xs: {
    columns: '1fr',
    rows: '100%',
    areas: `
      "content"
    `,
  },
  md: {
    columns: '200px 1fr',
    rows: '100%',
    areas: `
      "sidebar content"
    `,
  },
};
