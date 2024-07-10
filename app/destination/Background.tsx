import Image from 'next/image';
// import backgroundHomeDesktop from '@/public/assets/home/background-home-desktop.jpg';
import BackgroundDestination from '@/public/assets/destination/background-destination-desktop.jpg';
// import BackgroundCrew from '@/public/assets/crew/background-crew-desktop.jpg';
// import BackgroundTechnology from '@/public/assets/technology/background-technology-desktop.jpg';
// import type { Routes, RoutesCelestial } from '../routes';

export default function Background() {
  // const background = {
  //   // '/home/': backgroundHomeDesktop,
  //   '/destination/moon/': BackgroundDestination,
  //   '/destination/mars/': BackgroundDestination,
  //   '/destination/europa/': BackgroundDestination,
  //   '/destination/titan/': BackgroundDestination,
  //   // '/crew/hurley/': BackgroundCrew,
  //   // '/crew/shuttleworth/': BackgroundCrew,
  //   // '/crew/glover/': BackgroundCrew,
  //   // '/crew/ansari/': BackgroundCrew,
  //   // '/technology/': BackgroundTechnology,
  // } as const;
  return <Image className="absolute left-0 top-0 -z-10 size-full object-cover" alt="" src={BackgroundDestination} />;
}
