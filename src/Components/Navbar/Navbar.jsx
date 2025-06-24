import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.PNG'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='container'>
    <img src={logo} alt="" className= 'logo' />
    <ul>
      <li><Link to='hero' smooth={true} offset={0} duration={500}> Home </Link></li>
      <li><Link to='Resources' smooth={true} offset={0} duration={500} > Resources </Link> </li>
      <li><Link to='About' smooth={true} offset={0} duration={500} >  About </Link></li>
      <li><Link to='Testimonials' smooth={true} offset={0} duration={500} > Testimonals </Link></li>
      <li> <Link to='Contact' smooth={true} offset={0} duration={500}className='btn'>Contact us </Link>  </li>
      </ul>  
    </nav>
      
  )
}

export default Navbar
