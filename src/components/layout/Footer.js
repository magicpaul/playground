import React from 'react';

import logo from '../img/sb-white.png';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';
import youtube from '../img/youtube.svg';
import mail from '../img/mail.svg';

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img className="footer__logo" src={logo} alt="Mozilla Logo" />
        </div>
        <div className="col-md-4">
          <span className="footer__header">Social links</span>
          <ul className="footer__list">
            <li>
              <img src={facebook} className="icon"/><a
                href="https://www.facebook.com/StoryBangorNI/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <img src={twitter} className="icon"/><a
                href="https://twitter.com/storybangor"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/storybangor"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={instagram} className="icon"/>Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCQ-ufwsB2lHz3KmSPwjh8Ww"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={youtube} className="icon"/>YouTube
              </a>
            </li>
            <li>
              <a
                href="https://mailchi.mp/c45c5c6588f6/storybangor"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={mail} className="icon"/>Subscribe to our mailing list
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <span className="footer__header">Story Bangor</span>
          <ul className="footer__list">
            <li>
              <a href="" rel="noopener noreferrer" target="_blank">
                About
              </a>
            </li>
            <li>
              <a href="" rel="noopener noreferrer" target="_blank">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer__div" />
      <ul className="footer__legal">
        <li>
          <a href="" rel="noopener noreferrer" target="_blank">
            Privacy
          </a>
        </li>
        <li>
          <a
            href=""
            rel="noopener noreferrer"
            target="_blank"
          >
            Cookies
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
