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
  const Options = ({ path }: { path: Routes | RoutesCelestial | RoutesCrew }) => {
    return (
      <div className="hidden size-full min-w-[640px] bg-white/5 backdrop-blur-xl md:block xl:min-w-[736px]">
        <ul className="flex size-full items-center justify-between pl-[117px] pr-[40px] xl:pl-[159px] xl:pr-[64px]">
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
    );
  };

  const Form = () => {
    return (
      <form className="group relative md:hidden">
        <label className="relative mr-[24px] size-fit">
          <input
            title="Mobile Menu"
            className="relative z-20 h-[21px] w-[24px] hover:cursor-pointer group-has-[input:checked]:w-[20px] md:hidden"
            type="checkbox"
            id="mobileNav"
            name="mobileNav"
          />
        </label>
        <div
          className={
            'fixed left-0 top-0 ml-[121px] hidden h-screen w-full bg-veryDarkNavy/15 backdrop-blur-xl group-has-[input:checked]:block md:hidden'
          }
        >
          <div className="mt-[133px] size-full max-h-[172px] pl-[40px] md:block">
            <ul className="flex h-[19px] w-full flex-col gap-[32px]">
              {Object.entries(Routes as typeof Routes | typeof RoutesCelestial | typeof RoutesCrew).map(
                (item, index) => (
                  <li className="group/li flex size-full justify-between pr-[121px] font-barlowCondensed" key={item[0]}>
                    <Link prefetch href={item[1] as Routes}>
                      <button className="flex gap-[12px] text-[16px] text-white" type="button">
                        <span className="font-bold tracking-[2.7px]">{index.toString().padStart(2, '0')}</span>
                        <span className="font-normal tracking-[2px]">{items[item[0] as keyof typeof items]}</span>
                      </button>
                    </Link>
                    <div
                      className={`group h-full w-[3px] transition ${path === (item[1] as Routes) || (Object.values(RoutesCelestial).includes(item[1] as RoutesCelestial) && Object.values(RoutesCelestial).includes(path as RoutesCelestial)) || (Object.values(RoutesCrew).includes(item[1] as RoutesCrew) && Object.values(RoutesCrew).includes(path as RoutesCrew)) ? 'bg-white' : 'group-has-[button:hover]/li:bg-white/50'}`}
                    />
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div className="relative z-10 mx-auto flex h-[96px] w-full max-w-[1440px] items-center justify-between">
      <div className="flex w-full items-center justify-between pl-[40px] xl:max-w-[736px] xl:pl-[64px]">
        <Image
          priority
          width={48}
          height={48}
          className="size-[40px] min-w-[40px] md:size-[48px] md:min-w-[48px]"
          alt="logo"
          src={logo as string}
        />
        <div className="z-10 mr-[-30px] hidden h-px w-full max-w-[590px] border-b border-white/25 xl:block" />
      </div>
      <Options path={path} />
      <Form />
    </div>
  );
}
