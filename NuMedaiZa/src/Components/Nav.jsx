import React from 'react';
import { Link } from 'react-router';
import "../styles/NavBar.css";
import CentreNav from './CentreNav';
import LogoImg from "../assets/NuMedia-Logo.png";
import logoSvg from "../assets/logoSvg.svg";

const Nav = () => {
  return (
    <>
        <div className="NavBox">
            <Link className='logoContainer' to="/">
                <img src={logoSvg} alt="NuMedia Logo" className='Logo' />
            </Link>
            <CentreNav />
            <Link className='EnquireBtn' to="/contact">Enquire</Link>
        </div>
    </>
  )
}

export default Nav