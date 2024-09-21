'use client';
import './page.css';
import Footer from '@/components/footer/Footer';
import Main from '@/components/main/Main';
import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
    <div className="content-container">
      <Main />
      <Footer />
    </div>
  );
}
