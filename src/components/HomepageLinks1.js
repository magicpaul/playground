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
        desc="Some call to action text here"
        link="/events"
      />
      <HomepageItem
        photo={localstoriesPhoto}
        title="Local Stories"
        desc="Some call to action text here"
        link="/local-stories"
      />
    </div>
  </div>
);

export default HomePageLinks;
