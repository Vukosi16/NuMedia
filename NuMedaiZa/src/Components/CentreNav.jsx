import React from 'react'
import {Link} from 'react-router'
  
const CentreNav = () => {
  return (
    <div className='centreNavBox'>
        <Link className='CentreNavLinks' to="/online-presence">Online Presence</Link>
        <a className='CentreNavLinks' href="#aboutSection">About NuMedia</a>
        <Link className='CentreNavLinks' to="/portfolio">Portfolio</Link>
        <Link className='CentreNavLinks' to="/contact">Contact Us</Link>
    </div>
  )
}

export default CentreNav