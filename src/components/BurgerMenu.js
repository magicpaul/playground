import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import logo from './img/sb-white.png';

const BurgerMenu = () => (
      <Menu right>
        <img className="footer__logo" src={logo} alt="Story Bangor Logo" />
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="events" className="menu-item" href="/events">Events</a>
        <a id="local-stories" className="menu-item" href="/local-stories">Local Stories</a>
        <a id="greatest-story" className="menu-item" href="/greatest-story">The Greatest Story</a>
        <a id="your-story" className="menu-item" href="/your-story">Your Story</a>
      </Menu>
    );
export default BurgerMenu;