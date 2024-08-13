import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      glowingText: string;
      glowingShadow: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      glowingText?: string;
      glowingShadow?: string;
    };
  }

  export function createTheme(options?: ThemeOptions): Theme;
}

declare module '@emotion/react' {
  export interface Theme extends import('@mui/material/styles').Theme {}
}