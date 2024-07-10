import Image from 'next/image';
import BackgroundCrew from '@/public/assets/crew/background-crew-desktop.jpg';

export default function Background() {
  return <Image className="absolute left-0 top-0 -z-10 size-full object-cover" alt="" src={BackgroundCrew} />;
}
