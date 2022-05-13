import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        <li><a href="#proyecto">Proyecto</a></li>
        <li><a href="#paper">Paper</a></li>
        <li><a href="#casos">ABC</a></li>
        <li><a href="#organizaciones">Organizaciones</a></li>
      </ul>
    </nav>
  )
}

export default Navbar