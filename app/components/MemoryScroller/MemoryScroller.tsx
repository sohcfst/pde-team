import * as DialogPrimitive from '@radix-ui/react-dialog';
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

const MemoryScroller = ({ images }) => {
  return (
    <>
      <ParallaxProvider>
        <Flex layout={'centerColumn'}></Flex>
        <Flex
          layout={'centerColumn'}
          containerWidth={{
            '@breakpoint1024': 'large',
            '@breakpoint768': 'medium',
            '@breakpoint640': 'small',
          }}
          css={{
            height: 11000,
            width: '100%',

            background: `linear-gradient(175deg, ${gradientString}, ${gradientString}, ${gradientString})`,
            zIndex: 0,
            backgroundBlendMode: 'screen',
            position: 'relative',
            paddingTop: 200,
            br: 8,
          }}
        >
          <NoiseBackground className="noise-background" />
          {images.map((image, i) => {
            return (
              <Parallax x={parallaxConfig[i].x} y={parallaxConfig[i].y}>
                <DialogPrimitive.Root>
                  <DialogPrimitive.Trigger asChild>
                    <Image
                      id={`parallax-image-${i + 1}`}
                      width={500}
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
