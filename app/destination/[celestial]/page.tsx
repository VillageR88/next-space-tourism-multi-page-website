import { RoutesCelestial } from '../../routes';
import Image from 'next/image';
import imageMoon from '@/public/assets/destination/image-moon.webp';

const pageTitle = {
  number: '01',
  title: 'PICK YOUR DESTINATION',
};

export default function Home({ params }: { params: { celestial: string } }) {
  const option = params.celestial;
  return (
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
            <ul className="flex h-[32px] gap-[32px]">
              {Object.entries(RoutesCelestial).map((item) => (
                <li className="group/li flex flex-col justify-between" key={item[0]}>
                  <button
                    name="path"
                    value={item[1] as RoutesCelestial}
                    type="submit"
                    className={`font-barlowCondensed text-[16px] tracking-wider transition ${option === item[0] ? 'text-white' : 'text-lightBlue hover:text-white'}`}
                  >
                    {item[0].toUpperCase()}
                  </button>
                  <div
                    className={`h-[3px] w-full transition ${option === item[0] ? 'bg-white' : 'group-has-[button:hover]/li:bg-white/50'}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.entries(RoutesCelestial).map((item) => ({ celestial: item[0] }));
}
