import { Outlet } from 'remix';

export default function OffsiteRoute() {
  return (
    <div>
      <h1>/offsite</h1>
      <Outlet />
    </div>
  );
}
