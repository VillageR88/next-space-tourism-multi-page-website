import { RoutesCelestial } from '../../routes';
import Image from 'next/image';
import imageMoon from '@/public/assets/destination/image-moon.webp';
import imageMars from '@/public/assets/destination/image-mars.webp';
import imageEuropa from '@/public/assets/destination/image-europa.webp';
import imageTitan from '@/public/assets/destination/image-titan.webp';
import Link from 'next/link';

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

export default function Destination({ params }: { params: { celestial: string } }) {
  const option = params.celestial as keyof typeof celestialItems;
  return (
    <div className="flex size-full flex-col items-center justify-between xl:max-h-[734px] xl:flex-row">
      <div className="flex size-full max-w-[539px] items-center justify-center pb-[80px] pt-[40px] xl:py-0">
        <Image
          width={480}
          height={480}
          className="size-[150px] md:size-[300px] xl:size-[480px]"
          src={celestialItems[option].src}
          alt={option}
        />
      </div>
      <div className="flex size-full max-w-[539px] items-center justify-center pb-[50px] xl:pb-0">
        <div className="flex size-full max-h-[468px] max-w-[514px] flex-col justify-between gap-[24px] xl:max-w-[445px] xl:gap-[40px]">
          <ul className="flex h-[32px] justify-center gap-[32px] xl:justify-start">
            {Object.entries(RoutesCelestial).map((item) => (
              <li className="group/li flex flex-col justify-between" key={item[0]}>
                <Link scroll={false} prefetch href={item[1]}>
                  <button
                    type="button"
                    className={`font-barlowCondensed text-[14px] tracking-wider transition md:text-[16px] ${option === item[0] ? 'text-white' : 'text-lightBlue hover:text-white'}`}
                  >
                    {item[0].toUpperCase()}
                  </button>
                </Link>
                <div
                  className={`h-[3px] w-full transition ${option === item[0] ? 'bg-white' : 'group-has-[button:hover]/li:bg-white/50'}`}
                />
              </li>
            ))}
          </ul>
          <div className="size-full max-h-[254px] flex-col justify-between text-center xl:text-start">
            <h1 className="font-bellefair text-[56px] text-white md:text-[80px] xl:text-[96px]">
              {option.toUpperCase()}
            </h1>
            <p className="font-barlow text-[16px] leading-[180%] text-lightBlue xl:text-[18px]">
              {celestialItems[option].description}
            </p>
          </div>
          <div className="h-px border-b border-white/25" />
          <ul className="flex size-full flex-col justify-center gap-[24px] text-center md:max-h-[61px] md:flex-row md:gap-0 xl:justify-start xl:text-start">
            {Object.entries(celestialItems[option].calculations).map((item) => (
              <li key={item[0]} className="flex size-full flex-col gap-[12px] md:max-w-[210px]">
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
  );
}

export function generateStaticParams() {
  return Object.entries(RoutesCelestial).map((item) => ({ celestial: item[0] }));
}
