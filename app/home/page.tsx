import { Routes } from '../routes';
import Background from '@/app/components/Background';
import NestedLayout from '../components/NestedLayout';
import Link from 'next/link';
const titleButton = 'EXPLORE';
const line1 = 'SO, YOU WANT TO TRAVEL TO';
const title = 'SPACE';
const description =
  'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!';

export default function Home() {
  return (
    <NestedLayout path={Routes.home}>
      <Background path={Routes.home} />
      <div className="mx-[24px] flex size-full h-fit max-w-[1110px] flex-col items-center justify-between gap-[66px] text-center md:mx-auto md:pt-24 xl:h-[343px] xl:flex-row xl:pt-0 xl:text-left">
        <div className="flex size-full max-w-[512px] flex-col gap-[24px] xl:max-w-[540px]">
          <span className="font-barlowCondensed text-[16px] leading-tight tracking-[4px] text-lightBlue md:text-[28px]">
            {line1}
          </span>
          <h1 className="font-bellefair text-[80px] leading-tight text-white md:text-[144px]">{title}</h1>
          <p className="font-barlow text-[15px] leading-[180%] text-lightBlue md:text-[16px] xl:text-[18px]">
            {description}
          </p>
        </div>
        <Link className="pb-20 pt-5 md:pb-24 xl:py-0" prefetch href={Routes.destination}>
          <button
            type="button"
            className="relative flex size-[144px] items-center justify-center rounded-full bg-white font-bellefair text-[18px] text-veryDarkNavy outline outline-[68px] outline-transparent transition-all hover:text-veryDarkNavy/50 hover:outline-white/10 md:size-[272px] md:text-[32px] xl:outline-[88px]"
          >
            {titleButton}
          </button>
        </Link>
      </div>
    </NestedLayout>
  );
}
