import Link from 'next/link';
import { RoutesCelestial } from '../../routes';
import Background from './Background';
import Image from 'next/image';
import imageMoon from '@/public/assets/destination/image-moon.webp';

const pageTitle = {
  number: '01',
  title: 'PICK YOUR DESTINATION',
};

export default function Home() {
  return (
    <>
      <Background />
      <div className="flex size-full max-h-[792px] max-w-[1110px] flex-col gap-[24px]">
        <div className="flex h-[34px] items-center gap-[24px]">
          <span className="font-barlowCondensed text-[28px] font-bold tracking-[4.72px] text-white/25">
            {pageTitle.number}
          </span>
          <span className="font-barlowCondensed text-[28px] tracking-[4px] text-white">{pageTitle.title}</span>
        </div>
        <div className="flex size-full max-h-[734px] justify-between">
          <div className="flex size-full max-w-[539px] items-center justify-center">
            <Image width={480} height={480} className="size-[480px]" src={imageMoon} alt="Moon" />
          </div>
          <div className="flex size-full max-w-[539px] items-center justify-center">
            <div className="flex size-full max-h-[468px] max-w-[445px] flex-col">
              <ul className="flex gap-[32px]">
                {Object.entries(RoutesCelestial).map((item) => (
                  <li key={item[0]}>
                    <Link prefetch href={item[1]}>
                      <button type="button" className="text-white">
                        {item[0].toUpperCase()}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
