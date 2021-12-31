import { Outlet, useLoaderData } from 'remix';
import type { MetaFunction } from 'remix';
import { globalStyles, styled } from './styles/stitches.config';
import type { LoaderFunction } from 'remix';

import { db } from '~/utils/db.server';
import { BodyScripts } from './pages/root/BodyScripts';
import { Head } from './pages/root/Head';
import MemoryScroller from './components/MemoryScroller/MemoryScroller';
import { Flex } from './components/Flex';
import { NoiseBackground } from './components/Noise';
import { parallaxConfig } from './pages/root/parallax.constants';
import { ImageWithParallaxConfig, shuffle } from './pages/root/utils';

export const meta: MetaFunction = () => {
  return { title: 'pde-team' };
};

type LoaderData = { imageWithParallaxConfig: ImageWithParallaxConfig[] };

export let loader: LoaderFunction = async () => {
  const images = await db.images.findMany();

  const imageWithParallaxConfig = images.map((image, i) => {
    return {
      url: image.url,
      x: parallaxConfig[i].x,
      y: parallaxConfig[i].y,
    };
  });

  const data: LoaderData = {
    imageWithParallaxConfig: shuffle(imageWithParallaxConfig),
  };

  return { data };
};

const H1 = styled('h1', {
  paddingTop: 2,
});

const HeaderContainer = () => (
  <Flex
    css={{
      position: 'fixed',
      top: 100,
      left: 60,
    }}
  >
    <img
      src="https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%20Chairs_Logo_Black%20RGB_10.22.18.png"
      loading="eager"
      width="159"
      sizes="159px"
      srcSet="https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%2520Chairs_Logo_Black%2520RGB_10.22.18-p-500.png 500w, https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%2520Chairs_Logo_Black%2520RGB_10.22.18-p-800.png 800w, https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%2520Chairs_Logo_Black%2520RGB_10.22.18-p-1080.png 1080w, https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%2520Chairs_Logo_Black%2520RGB_10.22.18-p-1600.png 1600w, https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%2520Chairs_Logo_Black%2520RGB_10.22.18-p-2000.png 2000w, https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%2520Chairs_Logo_Black%2520RGB_10.22.18-p-2600.png 2600w, https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%2520Chairs_Logo_Black%2520RGB_10.22.18-p-3200.png 3200w, https://assets-global.website-files.com/5fd7e7372a07dfc79fb9b4f8/5fd7e7372a07df7466b9b524_Two%20Chairs_Logo_Black%20RGB_10.22.18.png 5183w"
      alt=""
    ></img>
    <H1>product, design, & engineering offsite 2021</H1>
  </Flex>
);

export default function App() {
  globalStyles();

  const {
    data: { imageWithParallaxConfig },
  } = useLoaderData();

  return (
    <html lang="en">
      <Head />
      <body>
        <HeaderContainer />
        <Flex css={{ py: 40 }} layout={'centerColumn'}>
          <NoiseBackground />

          <Flex
            css={{
              width: 1192,
              height: '80vh',
              br: 8,
              z: -1,
              background: 'transparent',
            }}
          >
            <Flex
              layout="centerColumn"
              css={{
                height: '100%',

                br: 8,
                width: '100%',
                px: 24,
                fontWeight: 'bold',
                gap: 24,
                background: 'transparent',
              }}
            >
              <Flex
                css={{
                  borderRadius: 8,
                  border: '1px solid white',
                  width: '100%',
                  height: '100%',
                  background: '$stitchesGrey',
                  boxShadow: `0.5px 1px 1px hsl(220deg 100% 100% / 0.5),
              1px 2px 2px hsl(220deg 100% 100% / 0.5)`,
                }}
                layout={'centerColumn'}
              >
                <MemoryScroller images={imageWithParallaxConfig} />

                <Outlet />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <BodyScripts />
      </body>
    </html>
  );
}
