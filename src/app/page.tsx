import './page.css';
import Footer from '@/components/footer/Footer';
import Main from '@/components/main/Main';
import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
    <RecoilRoot>
      <div className="content-container">
        <Main />
        <Footer />
      </div>
    </RecoilRoot>
  );
}
