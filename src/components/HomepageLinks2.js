import React from 'react';

// components
import HomepageItem from '../components/HomepageItem';

// photos
import greatestPhoto from '../components/img/greateststory.png';
import yourPhoto from '../components/img/yourstory.png';

const HomePageLinks = () => (
  <div className="tutorial-list">
    <div className="container">
      <HomepageItem
        photo={greatestPhoto}
        title="The Greatest Story"
        desc="Listen to the greatest story ever told... in 90 seconds"
        link="/greatest-story"
      />
      <HomepageItem
        photo={yourPhoto}
        title="Your Story"
        desc="A new chapter could be just a click away"
        link="/your-story"
      />
    </div>
  </div>
);

export default HomePageLinks;
