import React from 'react';
import { Link } from 'react-router';
import "../styles/NavBar.css";
import CentreNav from './CentreNav';
import LogoImg from "../assets/NuMedia-Logo.png";

const Nav = () => {
  return (
    <>
        <div className="NavBox">
            <Link className='logo' to="/">
                <img src={LogoImg} alt="NuMedia Logo" className='Logo' />
            </Link>
            <CentreNav />
            <button className='EnquireBtn' onClick={() => window.location.href = '/contact'}>Enquire</button>
        </div>
    </>
  )
}

export default Nav