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
      <div className="flex size-full h-fit flex-col items-center gap-[24px] px-[40px] md:items-stretch xl:h-[792px] xl:max-w-[1110px] xl:px-0">
        <Background path={Routes.crew} />
        <div className="flex h-fit items-center gap-[24px] md:h-[34px]">
          <span className="font-barlowCondensed text-[16px] font-bold text-white/25 md:text-[20px] xl:text-[28px] xl:tracking-[4.72px]">
            {pageTitle.number}
          </span>
          <span className="font-barlowCondensed text-[16px] tracking-[4px] text-white md:text-[20px] xl:text-[28px]">
            {pageTitle.title}
          </span>
        </div>
        {children}
      </div>
    </NestedLayout>
  );
}
