import Image from 'next/image';
import backgroundCrewDesktop from '@/public/assets/crew/background-crew-desktop.jpg';
import backgroundHomeDesktop from '@/public/assets/home/background-home-desktop.jpg';
import backgroundTechnologyDesktop from '@/public/assets/technology/background-technology-desktop.jpg';
import backgroundDestinationDesktop from '@/public/assets/destination/background-destination-desktop.jpg';
import { Routes } from '../routes';

const option = {
  [Routes.home]: backgroundHomeDesktop,
  [Routes.technology]: backgroundTechnologyDesktop,
  [Routes.destination]: backgroundDestinationDesktop,
  [Routes.crew]: backgroundCrewDesktop,
};
export default function Background({ path }: { path: Routes }) {
  return <Image className="fixed left-0 top-0 -z-10 size-full object-cover" alt="" src={option[path]} />;
}
