import React from 'react';

// components
import Hero from '../components/layout/Hero';
import HomepageLinks1 from '../components/HomepageLinks1';
import HomepageLinks2 from '../components/HomepageLinks2';

// photos
import logo from '../components/img/sb-logo.png';

const logoStyle = {
  width: '160px',
};
const index = () => (
  <div>
    <Hero>
      <img className="mb6" style={logoStyle} src={logo} alt="logo" />
      <h1>Story Bangor</h1>
      <div className="container">
        <div className="col-md-6 col-md-offset-3 mt3">
          <p className="mb6">
            Something here
          </p>
        </div>
      </div>
    </Hero>
    <div className="homepage-items">
      <HomepageLinks1 />
      <HomepageLinks2 />
    </div>
  </div>
);

export default index;
