import React from 'react'
import {Link} from 'react-router'

const navLinks = [
  { to: '/online-presence', label: 'Online Presence' },
  { to: '/#aboutSection', label: 'About NuMedia' },
  { href: 'https://vukosimohlabini.me', label: 'Portfolio' },
  { to: '/contact', label: 'Contact Us' },
]
  
const CentreNav = () => {
  return (
    <div className='centreNavBox'>
      {navLinks.map((link) =>
        link.href ? (
          <a
            key={link.label}
            className='CentreNavLinks'
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ) : (
          <Link key={link.label} className='CentreNavLinks' to={link.to}>
            {link.label}
          </Link>
        ),
      )}
    </div>
  )
}

export default CentreNav