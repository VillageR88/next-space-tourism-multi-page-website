import Image from 'next/image';
import backgroundHomeDesktop from '@/public/assets/home/background-home-desktop.jpg';

export default function Background() {
  return <Image className="absolute top-0 -z-10 size-full object-cover" alt="" src={backgroundHomeDesktop} />;
}
