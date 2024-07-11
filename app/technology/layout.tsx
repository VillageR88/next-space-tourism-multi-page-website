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
      <div className="flex size-full h-fit flex-col gap-[24px] xl:ml-[70px] xl:h-[792px] xl:max-w-[1275px]">
        <Background path={Routes.technology} />
        <div className="flex h-[34px] items-center gap-[24px] pl-[40px] xl:pl-0">
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
