import type { ReactNode } from 'react';
import Background from '@/app/components/Background';
import NestedLayout from '../components/NestedLayout';
import { Routes } from '../routes';

const pageTitle = {
  number: '03',
  title: 'SPACE LAUNCH 101',
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <NestedLayout path={Routes.technology}>
      <div className="flex size-full h-fit flex-col items-center gap-[24px] md:items-stretch xl:ml-[70px] xl:h-[792px] xl:max-w-[1275px]">
        <Background path={Routes.technology} />
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
