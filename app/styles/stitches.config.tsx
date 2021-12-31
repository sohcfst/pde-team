import { createStitches, globalCss } from '@stitches/react';
import {
  blue,
  green,
  yellow,
  red,
  whiteA,
  tomatoDark,
  cyanDark,
  limeDark,
  yellowDark,
} from '@radix-ui/colors';

const { css, keyframes, getCssText, theme, createTheme, config, styled } =
  createStitches({
    theme: {
      space: {
        space4: '4px',
        space8: '8px',
        space16: '16px',
      },
      radii: {
        br: '4px',
      },
      colors: {
        ...blue,
        ...green,
        ...yellow,
        ...red,
        ...whiteA,

        ...tomatoDark,
        ...cyanDark,
        ...limeDark,
        ...yellowDark,

        stitchesGrey: 'rgb(21, 23, 24)',
      },
    },
    media: {
      breakpoint640: '(max-width: 640px)',
      breakpoint768: '(max-width: 768px)',
      breakpoint1024: '(max-width: 1024px)',
    },
    utils: {
      // Abbreviated margin properties
      m: (value: number | string) => ({
        margin: value,
      }),

      mt: (value: number | string) => ({
        marginTop: value,
      }),

      mr: (value: number | string) => ({
        marginRight: value,
      }),

      mb: (value: number | string) => ({
        marginBottom: value,
      }),

      ml: (value: number | string) => ({
        marginLeft: value,
      }),

      mx: (value: number | string) => ({
        marginLeft: value,
        marginRight: value,
      }),

      my: (value: number | string) => ({
        marginTop: value,
        marginBottom: value,
      }),

      p: (value: number | string) => ({
        padding: value,
      }),

      pt: (value: number | string) => ({
        paddingTop: value,
      }),

      pr: (value: number | string) => ({
        paddingRight: value,
      }),

      pl: (value: number | string) => ({
        paddlingLeft: value,
      }),

      py: (value: number | string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      px: (value: number | string) => ({
        paddingRight: value,
        paddingLeft: value,
      }),

      // A property for applying width/height together
      size: (value: number | string) => ({
        width: value,
        height: value,
      }),

      // A property to apply linear gradient
      linearGradient: (value: string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      // An abbreviated property for border-radius
      br: (value: number | string) => ({
        borderRadius: value,
      }),

      // An abbreviated property for zndex
      z: (value: number | string) => ({
        zIndex: value,
      }),
    },
  });

export const globalStyles = globalCss({
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  /*
    1. Use a more-intuitive box-sizing model.
  */
  '*': {
    boxSizing: 'border-box',
    fontFamily: 'Bodoni Moda, serif;',
    color: 'white',

    /*
      2. Remove default margin
    */
    margin: 0,

    '&::before, &::after': {
      boxSizing: 'border-box',
    },
  },

  'button, input,optgroup, select, textarea': {
    fontFamily: 'inherit' /* 1 */,
    fontSize: '100%' /* 1 */,
    border: 'none',
  },

  /*
    3. Allow percentage-based heights in the application
  */
  'html, body': {
    height: '100%',
  },

  /*
    Typographic tweaks!
      4. Add accessible line-height
      5. Improve text rendering
  */
  body: {
    background: 'rgb(21, 23, 24)',
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
  },

  /*
    6. Improve media defaults
  */
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },

  /*
    7. Remove built-in form typography styles
  */
  'input, button, textarea, select': {
    font: 'inherit',
  },

  /*
    8. Avoid text overflows
  */
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  /*
    9. Create a root stacking context
  */
  '#root, #__next': {
    isolation: 'isolate',
  },

  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },
});

export {
  styled as lol, // intellisense in vscode suggests { styled } from the radix library
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
};
