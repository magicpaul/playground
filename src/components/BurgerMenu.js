import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import logo from './img/sb-white.png';
import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import instagram from './img/instagram.svg';
import youtube from './img/youtube.svg';
import mail from './img/mail.svg';

const BurgerMenu = () => (
      <Menu right>
        <img className="footer__logo" src={logo} alt="Story Bangor Logo" />
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="events" className="menu-item" href="/events">Events</a>
        <a id="local-stories" className="menu-item" href="/local-stories">Local Stories</a>
        <a id="greatest-story" className="menu-item" href="/greatest-story">The Greatest Story</a>
        <a id="your-story" className="menu-item" href="/your-story">Your Story</a>
        <hr/>
        <div className="menu-item social">
            <a href="https://www.facebook.com/StoryBangorNI/" title="Facebook" alt="Facebook"><img src={facebook} className="icon"/></a>
            <a href="https://instagram.com/storybangor" title="Instagram" alt="Instagram"><img src={instagram} className="icon"/></a>
            <a href="https://twitter.com/storybangor" title="Twitter" alt="Twitter"><img src={twitter} className="icon"/></a>
            <a href="https://www.youtube.com/channel/UCQ-ufwsB2lHz3KmSPwjh8Ww" title="YouTube" alt="YouTube"><img src={youtube} className="icon"/></a>
            <a href="https://mailchi.mp/c45c5c6588f6/storybangor" title="Subscribe to our mailing list" alt="Subcribe to our mailing list"><img src={mail} className="icon last"/></a>
        </div>

      </Menu>
    );
export default BurgerMenu;