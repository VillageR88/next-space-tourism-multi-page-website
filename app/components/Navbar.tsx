import Image from 'next/image';
import logo from '@/public/assets/shared/logo.svg';
import { Routes, RoutesCelestial, RoutesCrew } from '../routes';
import Link from 'next/link';

const items = {
  home: 'HOME',
  destination: 'DESTINATION',
  crew: 'CREW',
  technology: 'TECHNOLOGY',
};

export default function Navbar({ path }: { path: Routes | RoutesCelestial | RoutesCrew }) {
  return (
    <div className="relative z-10 mx-auto flex h-[96px] w-full max-w-[1440px] items-center justify-between">
      <div className="flex w-full max-w-[736px] items-center justify-between pl-[64px]">
        <Image priority width={48} height={48} className="size-[48px]" alt="logo" src={logo as string} />
        <div className="z-10 mr-[-30px] h-px w-full max-w-[590px] border-b border-white/25" />
      </div>
      <div className="size-full max-w-[736px] bg-white/5 backdrop-blur-xl">
        <ul className="flex size-full items-center justify-between pl-[159px] pr-[64px]">
          {Object.entries(Routes as typeof Routes | typeof RoutesCelestial | typeof RoutesCrew).map((item, index) => (
            <li className="group/li flex h-full flex-col justify-between pt-[38px] font-barlowCondensed" key={item[0]}>
              <Link prefetch href={item[1] as Routes}>
                <button className="flex gap-[12px] text-[16px] text-white" type="button">
                  <span className="font-bold tracking-[2.7px]">{index.toString().padStart(2, '0')}</span>
                  <span className="font-normal tracking-[2px]">{items[item[0] as keyof typeof items]}</span>
                </button>
              </Link>
              <div
                className={`group h-[3px] w-full transition ${path === (item[1] as Routes) || (Object.values(RoutesCelestial).includes(item[1] as RoutesCelestial) && Object.values(RoutesCelestial).includes(path as RoutesCelestial)) || (Object.values(RoutesCrew).includes(item[1] as RoutesCrew) && Object.values(RoutesCrew).includes(path as RoutesCrew)) ? 'bg-white' : 'group-has-[button:hover]/li:bg-white/50'}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
