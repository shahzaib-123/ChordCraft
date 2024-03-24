
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import image from '../components/images/logo2.png';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header className="App-header">
      <nav className="navbar">
        <img src={image} className="logo.png" alt="Logo"></img>
        <Link href='/' className="logo"> ChordCraft</Link>
        <ul className={`navMenu ${isActive ? 'active' : ''}`}>
          <li onClick={removeActive}><a href='./Home' className="navLink">Home</a></li>
          <li onClick={removeActive}><a href='./generate' className="navLink">Generate</a></li>
          <li onClick={removeActive}><a href='/About' className="navLink">About</a></li>
          {/* <li onClick={removeActive}><a href='./Contact' className="navLink">Contact</a></li> */}
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;