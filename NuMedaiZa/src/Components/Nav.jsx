import React from 'react';
import "../styles/NavBar.css";
import CentreNav from './CentreNav';
import LogoImg from "../assets/NuMedia-Logo.png";

const Nav = () => {
  return (
    <>
        <div className="NavBox">
            <img src={LogoImg} alt="NuMedia Logo" className='Logo'/>
            <CentreNav />
            <button className='EnquireBtn'>Enquire</button>
        </div>
    </>
  )
}

export default Nav