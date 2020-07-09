import { rem } from 'polished';

const theme = {
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  fontSizes: {
    s12: rem('12px'),
    s14: rem('14px'),
    s16: rem('16px'),
    s18: rem('18px'),
    s20: rem('20px'),
    s24: rem('24px'),
    s32: rem('32px'),
  },
  fontWeights: [400, 700],
  fonts: {
    body: "'Lato', sans-serif",
    common: '"Lato", "Helvetica", "Arial",  sans-serif',
  },
  space: {
    none: 0,
    tiny: '4px',
    small: '8px',
    medium: '16px',
    reduced: '20px',
    regular: '24px',
    increased: '28px',
    large: '32px',
    big: '64px',
    great: '96px',
    huge: '128px',
  },
  colors: {
    // Base
    white: '#FFFFFF',
    black: '#000000',
    // Plain
    blue: '#2aa0da',
    red: '#f05f50',
    green: '#4ebd9e',
    // Greyscale tones
    grey100: '#f1f1f1',
    grey200: '#c8c8c8',
    grey300: '#767676',
    grey400: '#4d4d4d',
  },
};

export default theme;
