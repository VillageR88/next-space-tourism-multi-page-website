import { RoutesCrew } from '../../routes';
import Image from 'next/image';
import imageHurley from '@/public/assets/crew/image-douglas-hurley.webp';
import imageShuttleworth from '@/public/assets/crew/image-mark-shuttleworth.webp';
import imageGlover from '@/public/assets/crew/image-victor-glover.webp';
import imageAnsari from '@/public/assets/crew/image-anousheh-ansari.webp';

const pageTitle = {
  number: '02',
  title: 'MEET YOUR CREW',
};

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
    <div className="flex size-full max-h-[792px] max-w-[1110px] flex-col gap-[24px]">
      <div className="flex h-[34px] items-center gap-[24px]">
        <span className="font-barlowCondensed text-[28px] font-bold tracking-[4.72px] text-white/25">
          {pageTitle.number}
        </span>
        <span className="font-barlowCondensed text-[28px] tracking-[4px] text-white">{pageTitle.title}</span>
      </div>
      <div className="flex size-full max-h-[734px] justify-between">
        <div className="flex size-full max-w-[539px] flex-col justify-between">
          <div className="flex size-full max-h-[631px] items-center">
            <div className="flex size-full max-h-[237px] flex-col">
              <span className="font-bellefair text-[32px] leading-tight text-white/[50.42%]">
                {peopleItems[option].role}
              </span>
              <h1 className="mt-[16px] font-bellefair text-[56px] leading-tight text-white">
                {peopleItems[option].name}
              </h1>
              <p className="mt-[24px] font-barlow text-[18px] leading-[180%] text-lightBlue">
                {peopleItems[option].description}
              </p>
            </div>
          </div>
          <ul className="flex h-[63px] gap-[40px]">
            {Object.entries(RoutesCrew).map((item) => (
              <li className="group/li flex flex-col justify-between" key={item[0]}>
                <button
                  title={peopleItems[item[0] as keyof typeof peopleItems].name}
                  name="path"
                  value={item[1] as RoutesCrew}
                  type="submit"
                  className={`size-[15px] rounded-full transition ${option === item[0] ? 'bg-white' : 'bg-white/[17.44%] hover:bg-white/50'}`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex size-full max-w-[539px] items-center justify-center px-4 text-white">
          <div
            className={`absolute ${option === Object.keys(peopleItems)[0] ? 'h-[670px] w-[510px]' : option === Object.keys(peopleItems)[1] ? 'h-[676px] w-[470px]' : option === Object.keys(peopleItems)[2] ? 'h-[640px] w-[540px]' : 'h-[620px] w-[580px]'}`}
          >
            <Image
              className={`mask-image-linear relative -z-10 object-contain transition ${option === Object.keys(peopleItems)[0] ? 'opacity-100' : 'opacity-0'}`}
              fill
              src={peopleItems.hurley.src}
              alt={option}
            />
            <Image
              className={`mask-image-linear relative -z-10 object-contain transition ${option === Object.keys(peopleItems)[1] ? 'opacity-100' : 'opacity-0'}`}
              fill
              src={peopleItems.shuttleworth.src}
              alt={option}
            />
            <Image
              className={`mask-image-linear relative -z-10 object-contain transition ${option === Object.keys(peopleItems)[2] ? 'opacity-100' : 'opacity-0'}`}
              fill
              src={peopleItems.glover.src}
              alt={option}
            />
            <Image
              className={`mask-image-linear relative -z-10 object-contain transition ${option === Object.keys(peopleItems)[3] ? 'opacity-100' : 'opacity-0'}`}
              fill
              src={peopleItems.ansari.src}
              alt={option}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.entries(RoutesCrew).map((item) => ({ people: item[0] }));
}
