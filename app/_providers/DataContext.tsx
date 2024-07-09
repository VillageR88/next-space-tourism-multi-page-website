'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export const DataContext = createContext(
  {} as {
    placeholder: boolean;
    setPlaceholder: Dispatch<SetStateAction<boolean>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [placeholder, setPlaceholder] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
        placeholder,
        setPlaceholder,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
