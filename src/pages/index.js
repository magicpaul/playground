import React from 'react';

// components
import Hero from '../components/layout/Hero';
import HomepageLinks1 from '../components/HomepageLinks1';
import HomepageLinks2 from '../components/HomepageLinks2';
import Subscribe from '../components/Subscribe';

// photos
import logo from '../components/img/sb-logo.png';

const logoStyle = {
  width: '160px',
};
const index = () => (
  <div>
    <Hero>
      <img className="mb6" style={logoStyle} src={logo} alt="logo" />
      <h1>9th - 13th May 2018</h1>
      <div className="container">
        <div className="col-md-6 col-md-offset-3 mt3">
          <p className="mb6">
            Sharing great stories with the people of Bangor
          </p>
        </div>
      </div>
    </Hero>
    <div className="homepage-items">
      <div className="container">
        <div className="content-no-side">
          <div className="subscribe-form">
          <h2>Keep up to date with the latest Story</h2>
          <h3>Sign up here for the latest Story Bangor updates and prayer requests!</h3>
            <Subscribe />
          </div>
        </div>
      </div>

      <HomepageLinks1 />
      <HomepageLinks2 />
    </div>
  </div>
);

export default index;
