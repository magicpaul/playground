import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// images
import facebook from './img/fb.png';

// Components
import Hero from '../../../components/layout/Hero';

const Main = ({ article, homework }) => {
  // Get current page data from data/pageData.js
  return (
    <div>
      <Helmet>
        <title>{`The Greatest Story | Story Bangor`}</title>
        <meta
          name="description"
          content="Learn how to use the Firefox Debugger to find and fix bugs."
        />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://mozilladevelopers.github.io/playground/debugger" />
        <meta property="og:title" content="Go beyond console.log!" />
        <meta
          property="og:description"
          content="Still using console.log for debugging JavaScript? There is a better way! Learn how to use Firefox Debugger to debug and fix your code."
        />
        <meta property="og:image" content={facebook} />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@firefox" />
        <meta name="twitter:creator" content="@firefox" />
        <meta name="twitter:title" content="Go beyond console.log" />
        <meta
          name="twitter:description"
          content="Still using console.log for debugging JavaScript? There is a better way! Learn how to use Firefox Debugger to debug and fix your code."
        />
        <meta name="twitter:image" content="https://i.imgur.com/HQemmAf.png" />
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
