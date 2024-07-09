'use client';

import { type Dispatch, type ReactNode, type SetStateAction, createContext, useState } from 'react';
import { Routes } from '@/app/routes';

export const DataContext = createContext(
  {} as {
    path: Routes;
    setPath: Dispatch<SetStateAction<Routes>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<Routes>(Routes.home);

  return (
    <DataContext.Provider
      value={{
        path,
        setPath,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
