import { Routes } from '../routes';

const titleButton = 'EXPLORE';
const line1 = 'SO, YOU WANT TO TRAVEL TO';
const title = 'SPACE';
const description =
  'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!';

export default function Home() {
  return (
    <div className="flex size-full max-h-[632px] max-w-[1110px] items-end">
      <div className="flex size-full max-h-[343px] items-center justify-between">
        <div className="flex size-full max-w-[540px] flex-col gap-[24px]">
          <span className="font-barlowCondensed text-[28px] leading-tight tracking-[4px] text-lightBlue">{line1}</span>
          <h1 className="font-bellefair text-[144px] leading-tight text-white">{title}</h1>
          <p className="font-barlow text-[18px] leading-[180%] text-lightBlue">{description}</p>
        </div>
        <button
          value={Routes.destination}
          name="path"
          type="submit"
          className="relative flex size-[272px] items-center justify-center rounded-full bg-white font-bellefair text-[32px] text-veryDarkNavy outline outline-[88px] outline-transparent transition-all hover:text-veryDarkNavy/50 hover:outline-white/10"
        >
          {titleButton}
        </button>
      </div>
    </div>
  );
}
