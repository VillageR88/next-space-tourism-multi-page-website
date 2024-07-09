import Image from 'next/image';
import backgroundDestinationDesktop from '@/public/assets/destination/background-destination-desktop.jpg';

export default function Background() {
  return <Image className="absolute top-0 -z-10 size-full object-cover" alt="" src={backgroundDestinationDesktop} />;
}
