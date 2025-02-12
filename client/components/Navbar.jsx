import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navbar-brand">Home</a>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;