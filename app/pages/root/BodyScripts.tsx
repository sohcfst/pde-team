import { LiveReload, Scripts, ScrollRestoration } from 'remix';

export const BodyScripts = () => (
  <>
    <ScrollRestoration />
    <Scripts />
    {process.env.NODE_ENV === 'development' && <LiveReload />}
  </>
);
