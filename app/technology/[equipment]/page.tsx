import { RoutesTechnology } from '../../routes';
import Image from 'next/image';
import imageLaunchVehicleDesktop from '@/public/assets/technology/image-launch-vehicle-portrait.jpg';
import imageLaunchVehicleMobileTablet from '@/public/assets/technology/image-launch-vehicle-landscape.jpg';
import imageSpaceportDesktop from '@/public/assets/technology/image-spaceport-portrait.jpg';
import imageSpaceportMobileTablet from '@/public/assets/technology/image-spaceport-landscape.jpg';
import imageSpaceCapsuleDesktop from '@/public/assets/technology/image-space-capsule-portrait.jpg';
import imageSpaceCapsuleMobileTablet from '@/public/assets/technology/image-space-capsule-landscape.jpg';

import Link from 'next/link';
const titleTerminology = 'THE TERMINOLOGY…';
const equipmentItems = {
  'launch-vehicle': {
    srcDesktop: imageLaunchVehicleDesktop,
    srcMobileTablet: imageLaunchVehicleMobileTablet,
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    srcDesktop: imageSpaceportDesktop,
    srcMobileTablet: imageSpaceportMobileTablet,
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  'space-capsule': {
    srcDesktop: imageSpaceCapsuleDesktop,
    srcMobileTablet: imageSpaceCapsuleMobileTablet,
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

export default function Crew({ params }: { params: { equipment: string } }) {
  const option = params.equipment as keyof typeof equipmentItems;

  return (
    <div className="flex size-full flex-col-reverse items-center justify-between gap-[32px] pb-24 xl:max-h-[734px] xl:flex-row xl:gap-0 xl:pb-0">
      <div className="flex size-full flex-col items-center justify-between gap-[40px] md:max-h-[304px] xl:max-w-[635px] xl:flex-row xl:gap-0">
        <ul className="flex size-fit gap-[32px] xl:flex-col">
          {Object.entries(RoutesTechnology).map((item, index) => (
            <li className="group/li flex flex-col justify-between" key={item[0]}>
              <Link scroll={false} prefetch href={item[1]}>
                <button
                  title={item[0].replace(/-/g, ' ').toUpperCase()}
                  type="button"
                  className={`size-[40px] rounded-full border font-bellefair text-[18px] transition md:size-[56px] md:text-[24px] xl:size-[80px] xl:text-[32px] ${option === item[0] ? 'border-white bg-white text-veryDarkNavy' : 'border-white/25 bg-transparent text-white hover:border-white'}`}
                >
                  {index + 1}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex size-full max-w-[491px] flex-col items-center px-[24px] text-center md:max-h-[301px] md:px-0 xl:items-start xl:text-start">
          <span className="font-bellefair text-[18px] leading-tight text-white/[50.42%] md:text-[24px] xl:text-[32px]">
            {titleTerminology}
          </span>
          <h1 className="mt-[16px] font-bellefair text-[24px] leading-tight text-white md:text-[40px] xl:text-[56px]">
            {option.replace(/-/g, ' ').toUpperCase()}
          </h1>
          <p className="mt-[24px] font-barlow text-[15px] leading-[180%] text-lightBlue md:text-[16px] xl:text-[18px]">
            {equipmentItems[option].description}
          </p>
        </div>
      </div>
      <div className="relative flex size-full items-center justify-center pt-16 text-white xl:max-w-[608px] xl:pl-4 xl:pt-0">
        <>
          <Image
            className={`relative -z-10 hidden h-[540px] object-cover xl:block ${option === 'spaceport' ? 'object-[100%_10%]' : ''}`}
            width={608}
            height={600}
            src={equipmentItems[option].srcDesktop}
            alt={option}
          />
          <Image
            className={`relative -z-10 block h-[258px] w-fit object-cover md:h-[357px] xl:hidden xl:h-[322px] ${option === 'spaceport' ? 'object-[100%_10%]' : ''}`}
            width={608}
            height={600}
            src={equipmentItems[option].srcMobileTablet}
            alt={option}
          />
        </>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.entries(RoutesTechnology).map((item) => ({ equipment: item[0] }));
}
