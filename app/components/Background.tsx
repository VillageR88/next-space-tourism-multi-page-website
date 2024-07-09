import Image from 'next/image';
import backgroundHomeDesktop from '@/public/assets/home/background-home-desktop.jpg';

export default function Background() {
  return <Image className="absolute -z-10 object-cover" alt="" fill src={backgroundHomeDesktop} />;
}
