import './footer.css';
import './mobile.css';
import Github from '../../../public/icons/github';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isPc, setIsPc] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 760) setIsPc(false);

    const handleResize = () => {
      if (window.innerWidth < 760) setIsPc(false);
      else setIsPc(true);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isPc ? (
        <footer className="footer-container">
          <div className="footer-copy-text">
            <p>Copyright 2024 flashrifle All rights reserved.</p>
            <Github />
          </div>
        </footer>
      ) : (
        <footer className="footer-container">
          <div className="footer-copy-text">
            <p>Copyright 2024 flashrifle All rights reserved.</p>
          </div>
          <Github />
        </footer>
      )}
    </>
  );
}
