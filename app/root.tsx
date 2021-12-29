import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import type { MetaFunction } from 'remix';
import { globalStyles, getCssText } from './styles/stitches.config';
import type { LoaderFunction } from 'remix';
import type { images } from '@prisma/client';
import { db } from '~/utils/db.server';

export const meta: MetaFunction = () => {
  return { title: 'pde-team' };
};

type LoaderData = { images: images[] };

export let loader: LoaderFunction = async () => {
  const images = await db.images.findMany();

  const data: LoaderData = {
    images,
  };
  return { data };
};

const Head = () => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <link
      href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&family=Cinzel&family=JetBrains+Mono&display=swap"
      rel="stylesheet"
    />
    <Meta />
    <Links />
    <style
      id="stitches"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />
  </head>
);

const BodyScripts = () => (
  <>
    <ScrollRestoration />
    <Scripts />
    {process.env.NODE_ENV === 'development' && <LiveReload />}
  </>
);

export default function App() {
  globalStyles();

  const {
    data: { images },
  } = useLoaderData();

  return (
    <html lang="en">
      <Head />
      <body>
        <h1>/</h1>
        <Outlet />
        <BodyScripts />
      </body>
    </html>
  );
}
