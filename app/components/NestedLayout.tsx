import type { ReactNode } from 'react';
import type { Routes, RoutesCelestial, RoutesCrew } from '../routes';
import Navbar from './Navbar';

export default function NestedLayout({
  children,
  path,
}: {
  children: ReactNode;
  path: Routes | RoutesCelestial | RoutesCrew;
}) {
  return (
    <>
      <Navbar path={path} />
      <div className="absolute top-0 size-full pt-[136px]">
        <div className="mx-auto flex size-full max-w-[1440px] items-center justify-center overflow-x-clip">
          {children}
        </div>
      </div>
    </>
  );
}
