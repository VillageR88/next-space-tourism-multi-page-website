import type { ReactNode } from 'react';
import Background from '@/app/components/Background';
import NestedLayout from '../components/NestedLayout';
import { Routes } from '../routes';

const pageTitle = {
  number: '01',
  title: 'PICK YOUR DESTINATION',
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <NestedLayout path={Routes.destination}>
      <div className="flex size-full h-[792px] max-w-[1110px] flex-col gap-[24px]">
        <Background path={Routes.destination} />
        <div className="flex h-[34px] items-center gap-[24px]">
          <span className="font-barlowCondensed text-[28px] font-bold tracking-[4.72px] text-white/25">
            {pageTitle.number}
          </span>
          <span className="font-barlowCondensed text-[28px] tracking-[4px] text-white">{pageTitle.title}</span>
        </div>
        {children}
      </div>
    </NestedLayout>
  );
}
