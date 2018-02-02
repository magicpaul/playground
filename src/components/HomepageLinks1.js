import React from 'react';

// components
import HomepageItem from '../components/HomepageItem';

// photos
import eventsPhoto from '../components/img/events.png';
import localstoriesPhoto from '../components/img/localstories.png';

const HomePageLinks = () => (
  <div className="tutorial-list">
    <div className="container">
      <HomepageItem
        photo={eventsPhoto}
        title="Events"
        desc="Check out what’s happening"
        link="/events"
      />
      <HomepageItem
        photo={localstoriesPhoto}
        title="Local Stories"
        desc="Hear some great local stories"
        link="/local-stories"
      />
    </div>
  </div>
);

export default HomePageLinks;
