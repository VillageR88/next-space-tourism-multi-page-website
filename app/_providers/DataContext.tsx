'use client';
import { usePathname } from 'next/navigation';
import { createContext, type ReactNode } from 'react';
import type { Routes } from '@/app/routes';

export const DataContext = createContext(
  {} as {
    path: Routes;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const path = usePathname() as Routes;

  return (
    <DataContext.Provider
      value={{
        path,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
