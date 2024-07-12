import type { ReactNode } from 'react';
import { Routes, type RoutesCelestial, type RoutesCrew } from '../routes';
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
        <div
          className={`mx-auto flex min-h-full w-full max-w-[1440px] items-center overflow-x-clip ${path.includes(Routes.technology) ? 'justify-end' : 'justify-center'}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
