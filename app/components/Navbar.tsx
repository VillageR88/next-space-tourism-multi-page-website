'use client';

import Image from 'next/image';
import logo from '@/public/assets/shared/logo.svg';
import { DataContext } from '../_providers/DataContext';
import { useContext } from 'react';
import { Routes } from '../routes';

const items = {
  home: 'HOME',
  destination: 'DESTINATION',
  crew: 'CREW',
  technology: 'TECHNOLOGY',
};

export default function Navbar() {
  const { path, setPath } = useContext(DataContext);
  return (
    <div className="flex h-[96px] w-full items-center justify-between pl-[64px]">
      <Image width={48} height={48} className="size-[48px]" alt="logo" src={logo as string} />
      <div className="size-full max-w-[736px] bg-white/5 backdrop-blur-xl">
        <ul className="flex size-full items-center justify-between pl-[159px] pr-[64px]">
          {Object.entries(Routes).map((item, index) => (
            <li className="flex h-full flex-col justify-between font-barlowCondensed" key={item[0]}>
              <button
                onClick={() => {
                  setPath(item[1]);
                }}
                className="mt-[38px] flex gap-[12px] text-[16px] text-white"
                type="button"
              >
                <span className="font-bold tracking-[2.7px]">{index.toString().padStart(2, '0')}</span>
                <span className="font-normal tracking-[2px]">{items[item[0] as keyof typeof items]}</span>
              </button>
              <div className={`h-[3px] w-full transition ${path === item[1] ? 'bg-white' : 'bg-white/0'}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
