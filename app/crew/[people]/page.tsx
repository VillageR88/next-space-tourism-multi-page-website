import { RoutesCrew } from '../../routes';
import Image from 'next/image';
import imageHurley from '@/public/assets/crew/image-douglas-hurley.webp';
import imageShuttleworth from '@/public/assets/crew/image-mark-shuttleworth.webp';
import imageGlover from '@/public/assets/crew/image-victor-glover.webp';
import imageAnsari from '@/public/assets/crew/image-anousheh-ansari.webp';
import Link from 'next/link';

const peopleItems = {
  hurley: {
    src: imageHurley,
    role: 'COMMANDER',
    name: 'DOUGLAS HURLEY',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  shuttleworth: {
    src: imageShuttleworth,
    name: 'MARK SHUTTLEWORTH',
    role: 'MISSION SPECIALIST',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  glover: {
    src: imageGlover,
    name: 'VICTOR GLOVER',
    role: 'PILOT',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  ansari: {
    src: imageAnsari,
    name: 'ANOUSHESH ANSARI',
    role: 'FLIGHT ENGINEER',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
};

export default function Crew({ params }: { params: { people: string } }) {
  const option = params.people as keyof typeof peopleItems;

  return (
    <div className="flex size-full flex-col items-center justify-between pt-12 xl:max-h-[734px] xl:flex-row xl:justify-stretch xl:pt-0">
      <div className="flex size-full max-w-[327px] flex-col items-center justify-between md:max-w-[539px] xl:items-start">
        <div className="flex size-full items-center md:max-h-[631px]">
          <div className="flex size-full flex-col items-center text-center md:max-h-[237px] xl:items-start xl:text-start">
            <span className="font-bellefair text-[18px] leading-tight text-white/[50.42%] md:text-[24px] xl:text-[32px]">
              {peopleItems[option].role}
            </span>
            <h1 className="mt-[16px] font-bellefair text-[24px] leading-tight text-white md:text-[40px] xl:text-[56px]">
              {peopleItems[option].name}
            </h1>
            <p className="mt-[24px] font-barlow text-[16px] leading-[180%] text-lightBlue md:text-[18px]">
              {peopleItems[option].description}
            </p>
          </div>
        </div>
        <ul className="flex h-[63px] gap-[40px] py-[60px] xl:py-0">
          {Object.entries(RoutesCrew).map((item) => (
            <li className="group/li flex flex-col justify-between" key={item[0]}>
              <Link scroll={false} prefetch href={item[1]}>
                <button
                  title={peopleItems[item[0] as keyof typeof peopleItems].name}
                  type="button"
                  className={`size-[10px] rounded-full transition xl:size-[15px] ${option === item[0] ? 'bg-white' : 'bg-white/[17.44%] hover:bg-white/50'}`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex size-full max-w-[539px] items-center justify-center px-4 text-white">
        <div
          className={`relative xl:absolute ${option === Object.keys(peopleItems)[0] ? 'h-[350px] w-[510px] md:h-[500px] xl:h-[670px]' : option === Object.keys(peopleItems)[1] ? 'h-[350px] w-[470px] md:h-[500px] xl:h-[676px]' : option === Object.keys(peopleItems)[2] ? 'h-[350px] w-[540px] md:h-[500px] xl:h-[640px]' : 'h-[350px] w-[580px] md:h-[500px] xl:h-[620px]'}`}
        >
          <Image
            className="mask-image-linear relative -z-10 object-contain transition"
            fill
            src={peopleItems[option].src}
            alt={option}
          />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.entries(RoutesCrew).map((item) => ({ people: item[0] }));
}
