import Image from 'next/image';
import BackgroundDestination from '@/public/assets/destination/background-destination-desktop.jpg';

export default function Background() {
  return <Image className="absolute left-0 top-0 -z-10 size-full object-cover" alt="" src={BackgroundDestination} />;
}
