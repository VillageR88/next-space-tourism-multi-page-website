import Image from 'next/image';
import backgroundHomeDesktop from '@/public/assets/technology/background-technology-desktop.jpg';

export default function Background() {
  return <Image className="absolute left-0 top-0 -z-10 size-full object-cover" alt="" src={backgroundHomeDesktop} />;
}
