import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// images
import facebook from './img/fb.png';
const image =  "https://www.storybangor.com" + facebook;
// Components
import Hero from '../../../components/layout/Hero';

const Main = ({ article, homework }) => {
  // Get current page data from data/pageData.js
  return (
    <div>
      <Helmet>
        <title>Your Story | Story Bangor</title>
        <meta
          name="description"
          content="Find out more about EXPLORING Jesus and the Christian faith or BEGINNING to follow Jesus"
        />

        {/* Facebook Meta */}
        <meta property="og:url" content="r" />
        <meta property="og:title" content="Your Story | Story Bangor" />
        <meta
          property="og:description"
          content="Find out more about EXPLORING Jesus and the Christian faith or BEGINNING to follow Jesus"
        />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@storybangor" />
        <meta name="twitter:creator" content="@storybangor" />
        <meta name="twitter:title" content="Your Story | Story Bangor" />
        <meta
          name="twitter:description"
          content="Find out more about EXPLORING Jesus and the Christian faith or BEGINNING to follow Jesus"
        />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <Hero breadcrumb>
        <h3>Story Bangor</h3>
        <h1>Your Story</h1>
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
