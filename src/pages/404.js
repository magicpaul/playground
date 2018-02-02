import React from 'react';

// components
import Hero from '../components/layout/Hero';
import HomepageLinks1 from '../components/HomepageLinks1';
import HomepageLinks2 from '../components/HomepageLinks2';

// images
import dino from './img/404.png';

const NotFoundPage = () => (
  <div>
    <Hero className="hero--gray">
      <div className="not-found">
        <div className="container">
          <div className="not-found__dino">
            <img src={dino} alt="lost dino" />
          </div>
          <div className="not-found__text">
            <h1>This page has moved!</h1>
            <p className="mt2">
                The page you are looking for doesn't exist, or has moved.
            </p>
          </div>
        </div>
      </div>
    </Hero>
    <HomepageLinks1 />
    <HomepageLinks2 />
  </div>
);

export default NotFoundPage;
