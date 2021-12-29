import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Flex } from '../Flex';
import { NoiseBackground } from '../Noise';

import {
  ContentImage,
  gradientString,
  Image,
  parallaxConfig,
  StyledContent,
  StyledOverlay,
} from './MemoryScroller.styled';
import * as DialogPrimitive from '@radix-ui/react-dialog';

console.log(parallaxConfig);

const MemoryScroller = ({ images }) => {
  return (
    <>
      <ParallaxProvider>
        <Flex layout={'centerColumn'}></Flex>
        <Flex
          layout={'centerColumn'}
          css={{
            height: 10000,
            width: '100%',
            background: `linear-gradient(175deg, ${gradientString}, ${gradientString}, ${gradientString})`,
            zIndex: 0,
            backgroundBlendMode: 'screen',
            position: 'relative',
            paddingTop: 200,
            br: 8,
          }}
        >
          <NoiseBackground />
          {/* {images.map((image, i) => {
            return (
              <Parallax x={images.x} y={images.y} key={image.url}>
                <DialogPrimitive.Root>
                  <DialogPrimitive.Trigger asChild>
                    <Image
                      id={`parallax-image-${i + 1}`}
                      width={400}
                      src={image.url}
                    />
                  </DialogPrimitive.Trigger>
                  <DialogPrimitive.Portal>
                    <StyledOverlay />
                    <StyledContent>
                      <ContentImage
                        id={`parallax-image-${i + 1}`}
                        src={image.url}
                      />
                    </StyledContent>
                  </DialogPrimitive.Portal>
                </DialogPrimitive.Root>
              </Parallax>
            );
          })} */}
          {images.map((image, i) => {
            return (
              <Parallax x={parallaxConfig[i].x} y={parallaxConfig[i].y}>
                <DialogPrimitive.Root>
                  <DialogPrimitive.Trigger asChild>
                    <Image
                      id={`parallax-image-${i + 1}`}
                      width={400}
                      src={image.url}
                    />
                  </DialogPrimitive.Trigger>
                  <DialogPrimitive.Portal>
                    <StyledOverlay />
                    <StyledContent>
                      <ContentImage
                        id={`parallax-image-${i + 1}`}
                        src={image.url}
                      />
                    </StyledContent>
                  </DialogPrimitive.Portal>
                </DialogPrimitive.Root>
              </Parallax>
            );
          })}
        </Flex>
      </ParallaxProvider>
    </>
  );
};

export default MemoryScroller;
