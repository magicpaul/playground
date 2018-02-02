import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// images
import ShareImage from './img/fb.png';

// Components
import Hero from '../../../components/layout/Hero';


const Main = ({ article, homework }) => {
  // Get current page data from data/pageData.js
  let ShareImageURL
  ShareImageURL = "https://www.storybangor.com/" + ShareImage
  return (
    <div>
      <Helmet>
        <title>{`The Greatest Story | Story Bangor`}</title>
        <meta
          name="description"
          content="Listen the greatest story ever told... in 90 seconds!"
        />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://www.storybangor.com/greatest-story/" />
        <meta property="og:title" content="The Greatest Story | Story Bangor" />
        <meta
          property="og:description"
          content="Listen the greatest story ever told... in 90 seconds!"
        />
        <meta property="og:image" content={ShareImageURL} />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@storybangor" />
        <meta name="twitter:creator" content="@storybangor" />
        <meta name="twitter:title" content="The Greatest Story | Story Bangor" />
        <meta
          name="twitter:description"
          content="Listen the greatest story ever told... in 90 seconds!"
        />
        <meta name="twitter:image" content={ShareImageURL} />
      </Helmet>

      <Hero breadcrumb>
        <h3>Story Bangor</h3>
        <h1>The Greatest Story</h1>
      </Hero>
      <div className="main">
        <div className="container">
          <div className="content-no-side">{article}</div>
        </div>
        {homework ? <div>{homework}</div> : ''}
      </div>
    </div>
  );
};

Main.propTypes = {
  article: PropTypes.node.isRequired,
  homework: PropTypes.node,
};

Main.defaultProps = {
  homework: '',
};

export default Main;
