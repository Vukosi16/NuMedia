import React from 'react';
import { Link } from 'react-router';
import "../styles/NavBar.css";
import CentreNav from './CentreNav';
import logoSvg from "../assets/logoSvg.svg";

const Nav = () => {
  return (
    <header className="NavBox">
      <nav className="NavInner" aria-label="Primary">
        <Link className='logoContainer' to="/" aria-label="NuMedia home">
          <img src={logoSvg} alt="NuMedia Logo" className='Logo' />
        </Link>
        <CentreNav />
        <Link className='EnquireBtn' to="/contact">Enquire</Link>
      </nav>
    </header>
  )
}

export default Nav