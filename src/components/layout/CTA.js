import React from 'react';

// Components
import DownloadWhite from '../../components/DownloadWhite';
import DownloadLink from '../../components/DownloadLink';

// images
import logo from '../img/greatest-logo.png';

const CTA = () => (
  <div className="cta">
    <div className="container">
      <div className="cta__content">
        <div className="cta__logo">
          <img src={logo} alt="greatest story Logo" />
        </div>
        <span className="cta__text">Hear the greatest story</span>
        <div className="cta__download">
          <DownloadLink content="bottom-cta">
            <DownloadWhite />
          </DownloadLink>
        </div>
      </div>
    </div>
  </div>
);


export default CTA;
