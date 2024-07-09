import { redirect } from 'next/navigation';
import { Routes } from './routes';
export default function Home() {
  redirect(Routes.home);
}
