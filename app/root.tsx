import { Outlet, useLoaderData } from 'remix';
import type { MetaFunction } from 'remix';
import { globalStyles } from './styles/stitches.config';
import type { LoaderFunction } from 'remix';

import { db } from '~/utils/db.server';
import { BodyScripts } from './pages/root/BodyScripts';
import { Head } from './pages/root/Head';
import MemoryScroller from './components/MemoryScroller/MemoryScroller';
import { Flex } from './components/Flex';
import { NoiseBackground } from './components/Noise';

export const meta: MetaFunction = () => {
  return { title: 'pde-team' };
};

interface ImageWithParallaxConfig {
  url: null | string;
  x: string[];
  y: string[];
}

type LoaderData = { imageWithParallaxConfig: ImageWithParallaxConfig[] };

export let loader: LoaderFunction = async () => {
  const images = await db.images.findMany();

  const parallaxConfig = [
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
    { y: ['100px', '-800px'], x: ['-400px', '-400px'] }, // 6
    { y: ['0px', '0px'], x: ['-300px', '-300px'] }, // 7
    { y: ['100px', '-800px'], x: ['400px', '400px'] }, // 8
    { y: ['100px', '-300px'], x: ['230px', '230px'] }, // 9
    { y: ['150px', '-500px'], x: ['-400px', '-400px'] }, // 10
    { y: ['0px', '0px'], x: ['-200px', '-200px'] }, // 11
    { y: ['100px', '-800px'], x: ['330px', '330px'] }, // 12
    { y: ['100px', '-500px'], x: ['-300px', '-300px'] }, // 13
    { y: ['150px', '-500px'], x: ['-400px', '-400px'] },
    { y: ['100px', '100px'], x: ['400px', '400px'] },
    { y: ['100px', '-800px'], x: ['-400px', '-400px'] },
  ];

  const imageWithParallaxConfig = images.map((image, i) => {
    return {
      url: image.url,
      x: parallaxConfig[i].x,
      y: parallaxConfig[i].y,
    };
  });

  function shuffle(array: ImageWithParallaxConfig[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const data: LoaderData = {
    imageWithParallaxConfig: shuffle(imageWithParallaxConfig),
  };

  return { data };
};

export default function App() {
  globalStyles();

  const {
    data: { imageWithParallaxConfig },
  } = useLoaderData();
  console.log(imageWithParallaxConfig);
  return (
    <html lang="en">
      <Head />
      <body>
        <Flex css={{ py: 40 }} layout={'centerColumn'}>
          <NoiseBackground />
          <Flex
            css={{
              width: 1192,
              height: '80vh',
              br: 8,
              z: 1,
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
