import { RoutesTechnology } from '../../routes';
import Image from 'next/image';
import imageLaunchVehicleDesktop from '@/public/assets/technology/image-launch-vehicle-portrait.jpg';
import imageSpaceportDesktop from '@/public/assets/technology/image-spaceport-portrait.jpg';
import imageSpaceCapsuleDesktop from '@/public/assets/technology/image-space-capsule-portrait.jpg';

import Link from 'next/link';
const titleTerminology = 'THE TERMINOLOGY…';
const equipmentItems = {
  'launch-vehicle': {
    src: imageLaunchVehicleDesktop,
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    src: imageSpaceportDesktop,
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  'space-capsule': {
    src: imageSpaceCapsuleDesktop,
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

export default function Crew({ params }: { params: { equipment: string } }) {
  const option = params.equipment as keyof typeof equipmentItems;

  return (
    <div className="flex size-full max-h-[734px] items-center justify-between">
      <div className="flex size-full max-h-[304px] max-w-[635px] items-center justify-between">
        <ul className="flex size-fit flex-col gap-[32px]">
          {Object.entries(RoutesTechnology).map((item, index) => (
            <li className="group/li flex flex-col justify-between" key={item[0]}>
              <Link prefetch href={item[1]}>
                <button
                  title={item[0].replace(/-/g, ' ').toUpperCase()}
                  type="button"
                  className={`size-[80px] rounded-full border font-bellefair text-[32px] transition ${option === item[0] ? 'border-white bg-white text-veryDarkNavy' : 'border-white/25 bg-transparent text-white hover:border-white'}`}
                >
                  {index + 1}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex size-full max-h-[301px] max-w-[491px] flex-col">
          <span className="font-bellefair text-[32px] leading-tight text-white/[50.42%]">{titleTerminology}</span>
          <h1 className="mt-[16px] font-bellefair text-[56px] leading-tight text-white">
            {option.replace(/-/g, ' ').toUpperCase()}
          </h1>
          <p className="mt-[24px] font-barlow text-[18px] leading-[180%] text-lightBlue">
            {equipmentItems[option].description}
          </p>
        </div>
      </div>
      <div className="relative flex size-full max-w-[608px] items-center justify-center px-4 text-white">
        <Image
          className={`relative -z-10 h-[540px] object-cover ${option === 'spaceport' ? 'object-[100%_10%]' : ''}`}
          width={608}
          height={600}
          src={equipmentItems[option].src}
          alt={option}
        />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.entries(RoutesTechnology).map((item) => ({ equipment: item[0] }));
}
