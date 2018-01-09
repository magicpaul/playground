import React from 'react';

import logo from '../img/sb-white.png';

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
              <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                YouTube
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
            <li>
              <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Donate
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
