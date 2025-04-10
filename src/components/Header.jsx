import { useState } from 'react';
import logo from '../assets/logo-lys.svg';
import mystyle from './Header.module.css';
import { Link, Links } from 'react-router-dom';

function MenuComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    console.log(menuOpen)
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <nav role="navigation" className={mystyle.navbar}>
      <img src={logo} alt="Rethink Logo" className={mystyle.logo} />

      <div id={mystyle.menuToggle} onClick={handleToggle} className={mystyle.menuOpen ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul id={mystyle.menu} className={menuOpen ?  mystyle.open : ''}>
        <li><Link to='/' onClick={handleLinkClick}>FORSIDE</Link></li>
        <li><Link to='/proces' onClick={handleLinkClick}>SÅDAN GØR VI</Link></li>
        <li><Link to='/services' onClick={handleLinkClick}>SERVICES</Link></li>
        <li><Link to='/kontakt' onClick={handleLinkClick}>KONTAKT</Link></li>
        <li><Link to='/kontakt' onClick={handleLinkClick}>FÅ ET GRATIS TILBUD</Link></li>
      </ul>
    </nav>
  );
}

export default MenuComponent;