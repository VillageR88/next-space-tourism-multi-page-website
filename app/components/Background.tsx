import Image from 'next/image';
import backgroundHomeDesktop from '@/public/assets/home/background-home-desktop.jpg';
import backgroundHomeTablet from '@/public/assets/home/background-home-tablet.jpg';
import backgroundCrewDesktop from '@/public/assets/crew/background-crew-desktop.jpg';
import backgroundCrewTablet from '@/public/assets/crew/background-crew-tablet.jpg';
import backgroundTechnologyDesktop from '@/public/assets/technology/background-technology-desktop.jpg';
import backgroundTechnologyTablet from '@/public/assets/technology/background-technology-tablet.jpg';
import backgroundDestinationDesktop from '@/public/assets/destination/background-destination-desktop.jpg';
import backgroundDestinationTablet from '@/public/assets/destination/background-destination-tablet.jpg';
import { Routes } from '../routes';

const optionDesktop = {
  [Routes.home]: backgroundHomeDesktop,
  [Routes.technology]: backgroundTechnologyDesktop,
  [Routes.destination]: backgroundDestinationDesktop,
  [Routes.crew]: backgroundCrewDesktop,
};

const optionTablet = {
  [Routes.home]: backgroundHomeTablet,
  [Routes.technology]: backgroundTechnologyTablet,
  [Routes.destination]: backgroundDestinationTablet,
  [Routes.crew]: backgroundCrewTablet,
};

export default function Background({ path }: { path: Routes }) {
  return (
    <>
      <Image
        className="fixed left-0 top-0 -z-10 hidden size-full object-cover xl:block"
        alt=""
        src={optionDesktop[path]}
      />
      <Image
        className="fixed left-0 top-0 -z-10 block size-full object-cover xl:hidden"
        alt=""
        src={optionTablet[path]}
      />
    </>
  );
}
