import type { ReactNode } from 'react';
import Background from '../components/Background';
import NestedLayout from '../components/NestedLayout';
import { Routes } from '../routes';

const pageTitle = {
  number: '02',
  title: 'MEET YOUR CREW',
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <NestedLayout path={Routes.crew}>
      <div className="flex size-full h-fit flex-col gap-[24px] px-[40px] xl:h-[792px] xl:max-w-[1110px] xl:px-0">
        <Background path={Routes.crew} />
        <div className="flex h-[34px] items-center gap-[24px]">
          <span className="font-barlowCondensed text-[20px] font-bold text-white/25 xl:text-[28px] xl:tracking-[4.72px]">
            {pageTitle.number}
          </span>
          <span className="font-barlowCondensed text-[20px] tracking-[4px] text-white xl:text-[28px]">
            {pageTitle.title}
          </span>
        </div>
        {children}
      </div>
    </NestedLayout>
  );
}
