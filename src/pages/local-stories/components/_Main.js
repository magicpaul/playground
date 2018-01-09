import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// data
import pageData from '../../../data/local';

// images
import facebook from './img/fb.png';

// Components
import Side from '../../../components/layout/Side';
import BottomNav from '../../../components/layout/BottomNav';
import Hero from '../../../components/layout/Hero';

const Main = ({ currentPageNum, article, homework, pageMeta }) => {
  // Get current page data from data/pageData.js
  const currentPageData = pageData.find(page => page.order === currentPageNum);
  return (
    <div>
      <Helmet>
        <title>{`Local Stories | Story Bangor`}</title>
      </Helmet>
      {pageMeta}
      <Hero breadcrumb>
        <h3>Story Bangor</h3>
        <h1>Local Stories</h1>
      </Hero>
      <div className="main">
        <div className="container">
          <Side currentPageNum={currentPageNum} pageData={pageData} />
          <div className="content">{article}</div>
        </div>
        {homework ? <div>{homework}</div> : ''}
      </div>
      <BottomNav currentPageNum={currentPageNum} pageData={pageData} />
    </div>
  );
};

Main.propTypes = {
  article: PropTypes.node.isRequired,
  homework: PropTypes.node,
  currentPageNum: PropTypes.number.isRequired,
  pageMeta: PropTypes.node,
};

Main.defaultProps = {
  homework: '',
};

export default Main;
