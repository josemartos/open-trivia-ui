import theme from 'src/theme';

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth})`;

const mediaQuery = {
  xs: customMediaQuery(theme.breakpoints.xs),
  sm: customMediaQuery(theme.breakpoints.sm),
  md: customMediaQuery(theme.breakpoints.md),
  lg: customMediaQuery(theme.breakpoints.lg),
  xl: customMediaQuery(theme.breakpoints.xl),
};

export default mediaQuery;
