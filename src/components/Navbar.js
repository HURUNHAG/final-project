import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-60}>
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-60}>
            Ben Kimim?
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-60}>
            Neler Yapabilirim?
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500} offset={-60}>
            Portfolyo
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-60}>
            İletişim
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
