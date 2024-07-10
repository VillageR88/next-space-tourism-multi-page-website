import { RoutesCelestial } from '../../routes';
import Image from 'next/image';
import imageMoon from '@/public/assets/destination/image-moon.webp';
import imageMars from '@/public/assets/destination/image-mars.webp';
import imageEuropa from '@/public/assets/destination/image-europa.webp';
import imageTitan from '@/public/assets/destination/image-titan.webp';

const pageTitle = {
  number: '01',
  title: 'PICK YOUR DESTINATION',
};

const celestialItems = {
  moon: {
    src: imageMoon,
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    calculations: {
      'avg. distance': '384,400 km'.toUpperCase(),
      'Est. travel time': '3 days'.toUpperCase(),
    },
  },
  mars: {
    src: imageMars,
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    calculations: {
      'avg. distance': '225 MIL. km'.toUpperCase(),
      'Est. travel time': '9 months'.toUpperCase(),
    },
  },
  europa: {
    src: imageEuropa,
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    calculations: {
      'avg. distance': '628 MIL. km'.toUpperCase(),
      'Est. travel time': '3 years'.toUpperCase(),
    },
  },
  titan: {
    src: imageTitan,
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    calculations: {
      'avg. distance': '1.6 BIL. km'.toUpperCase(),
      'Est. travel time': '7 years'.toUpperCase(),
    },
  },
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
          <Image
            width={480}
            height={480}
            className="size-[480px]"
            src={celestialItems[option as keyof typeof celestialItems].src}
            alt={option}
          />
        </div>
        <div className="flex size-full max-w-[539px] items-center justify-center">
          <div className="flex size-full max-h-[468px] max-w-[445px] flex-col justify-between gap-[40px]">
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
            <div className="size-full max-h-[254px] flex-col justify-between">
              <h1 className="font-bellefair text-[96px] text-white">{option.toUpperCase()}</h1>
              <p className="font-barlow text-[18px] leading-[180%] text-lightBlue">
                {celestialItems[option as keyof typeof celestialItems].description}
              </p>
            </div>
            <div className="h-px border-b border-white/25" />
            <ul className="flex size-full max-h-[61px]">
              {Object.entries(celestialItems[option as keyof typeof celestialItems].calculations).map((item) => (
                <li key={item[0]} className="flex size-full max-w-[210px] flex-col gap-[12px]">
                  <span className="font-barlowCondensed text-[14px] leading-tight tracking-[2px] text-lightBlue">
                    {item[0].toUpperCase()}
                  </span>
                  <span className="font-bellefair text-[28px] leading-tight text-white"> {item[1]}</span>
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
