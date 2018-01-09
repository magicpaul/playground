import React from 'react';
import Link from 'gatsby-link';

// images
import logo from '../img/logo.svg';

// components
import BurgerMenu from '../../components/BurgerMenu';

const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/">
        <img alt="logo" className="header__logo" src={logo} />
      </Link>

      <BurgerMenu />
    </div>
  </header>
);

export default Header;
