// src/components/Header.js
import React from 'react';
import NanaK from '../images/NanaK.png';

const Header = () => {
  return (
    <header>
      <h1>Hi I am Nana Kwakye</h1>
      <img src={NanaK} alt='Me(Nana K)'></img>
      <h4>Welcome to my Portfolio Website</h4>
    </header>
  );
};

export default Header;
