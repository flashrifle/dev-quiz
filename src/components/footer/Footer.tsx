import './footer.css';
import Github from '../../../public/icons/github';

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-copy-text">
          <p>Copyright 2024. flashrifle. All rights reserved.</p>
          <Github />
        </div>
      </footer>
    </>
  );
}
