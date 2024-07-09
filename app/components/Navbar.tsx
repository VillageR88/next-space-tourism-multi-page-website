'use client';

import Image from 'next/image';
import logo from '@/public/assets/shared/logo.svg';
import { usePathname } from 'next/navigation';

import { Routes } from '../routes';
import Link from 'next/link';

const items = {
  home: 'HOME',
  destination: 'DESTINATION',
  crew: 'CREW',
  technology: 'TECHNOLOGY',
};

export default function Navbar() {
  const path = usePathname() as Routes;
  return (
    <div className="mx-auto flex h-[96px] w-full max-w-[1440px] items-center justify-between pl-[64px]">
      <Image priority width={48} height={48} className="size-[48px]" alt="logo" src={logo as string} />
      <div className="size-full max-w-[736px] bg-white/5 backdrop-blur-xl">
        <ul className="flex size-full items-center justify-between pl-[159px] pr-[64px]">
          {Object.entries(Routes).map((item, index) => (
            <li className="group/li flex h-full flex-col justify-between pt-[38px] font-barlowCondensed" key={item[0]}>
              <Link href={item[1]}>
                <button className="flex gap-[12px] text-[16px] text-white" type="button">
                  <span className="font-bold tracking-[2.7px]">{index.toString().padStart(2, '0')}</span>
                  <span className="font-normal tracking-[2px]">{items[item[0] as keyof typeof items]}</span>
                </button>
              </Link>
              <div
                className={`group h-[3px] w-full transition ${path === item[1] ? 'bg-white' : 'group-has-[button:hover]/li:bg-white/50'}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
