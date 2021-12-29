import { Links, Meta } from 'remix';
import { getCssText } from '~/styles/stitches.config';

export const Head = () => (
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
