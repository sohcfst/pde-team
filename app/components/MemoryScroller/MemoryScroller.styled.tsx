import { blackA, green, purple, sky } from '@radix-ui/colors';

import { styled, keyframes } from '~/styles/stitches.config';

import * as DialogPrimitive from '@radix-ui/react-dialog';

export const Image = styled('img', {
  maxWidth: 1000,
  borderRadius: 4,
  boxShadow: `0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075),
  0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075),
  0 16px 16px hsl(0deg 0% 0% / 0.075)`,
  zIndex: -1,
  position: 'relative',
  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.01)',
    transition: 'all .1s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
  },

  '&:active': {
    transform: 'scale(0.995)',
  },
});

export const ContentImage = styled('img', {
  '--shadow-color': '0deg 0% 50%',
  maxWidth: 800,
  borderRadius: 8,
  boxShadow: `
  1px 2px 2px hsl(var(--shadow-color) / 0.2),
  2px 4px 4px hsl(var(--shadow-color) / 0.2),
  4px 8px 8px hsl(var(--shadow-color) / 0.2),
  8px 16px 16px hsl(var(--shadow-color) / 0.2),
  16px 32px 32px hsl(var(--shadow-color) / 0.2)
`,
  zIndex: -1,
  position: 'relative',
});

interface ParallaxProps {
  x: string[];
  y: string[];
}

{
  /* x offset is based on the main axis */
}
{
  /* pass in the same value twice for a static offset */
}
export const parallaxConfig: ParallaxProps[] = [
  { y: ['400px', '0px'], x: ['-350px', '-350px'] }, // 1
  { y: ['0px', '0px'], x: ['300px', '300px'] }, // 2
  { y: ['200px', '0px'], x: ['-200px', '-200px'] }, // 3
  { y: ['100px', '100px'], x: ['400px', '400px'] }, // 4
  { y: ['400px', '200px'], x: ['50px', '50px'] }, // 5
  { y: ['100px', '-800px'], x: ['-400px', '-400px'] }, // 6
  { y: ['0px', '0px'], x: ['-300px', '-300px'] }, // 7
  { y: ['100px', '-800px'], x: ['400px', '400px'] }, // 8
  { y: ['100px', '-300px'], x: ['230px', '230px'] }, // 9
  { y: ['150px', '-500px'], x: ['-400px', '-400px'] }, // 10
  { y: ['0px', '0px'], x: ['-200px', '-200px'] }, // 11
  { y: ['100px', '-800px'], x: ['330px', '330px'] }, // 12
  { y: ['100px', '-500px'], x: ['-300px', '-300px'] }, // 13
  { y: ['400px', '0px'], x: ['-350px', '-350px'] }, // 1
  { y: ['0px', '0px'], x: ['300px', '300px'] }, // 2
  { y: ['200px', '0px'], x: ['-200px', '-200px'] }, // 3
  { y: ['100px', '100px'], x: ['400px', '400px'] }, // 4
  { y: ['400px', '200px'], x: ['50px', '50px'] }, // 5
  { y: ['100px', '-800px'], x: ['-450px', '-450px'] }, // 6
  { y: ['0px', '0px'], x: ['-300px', '-300px'] }, // 7
  { y: ['100px', '-800px'], x: ['400px', '400px'] }, // 8
  { y: ['100px', '-300px'], x: ['230px', '230px'] }, // 9
  { y: ['150px', '-500px'], x: ['-400px', '-400px'] }, // 10
  { y: ['0px', '0px'], x: ['-200px', '-200px'] }, // 11
  { y: ['100px', '-800px'], x: ['330px', '330px'] }, // 12
  { y: ['100px', '-500px'], x: ['-300px', '-300px'] }, // 13
  { y: ['150px', '-500px'], x: ['500px', '500px'] },
  { y: ['150px', '-500px'], x: ['-400px', '-400px'] },
];

export const gradientString = `${sky.sky5}, white, ${purple.purple5}, white, ${green.green4}, white`;

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -18%) scale(.7)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -80%) scale(1)' },
});

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA11,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'transparent',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -80%)',
  width: 'fit-content',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&:focus': { outline: 'none' },
});
