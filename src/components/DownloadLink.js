import React from 'react';
import PropTypes from 'prop-types';


const DownloadLink = props => (
  <a href='/greatest-story/'>
    {props.children}
  </a>
);

DownloadLink.propTypes = {
  content: PropTypes.string.isRequired,
};

export default DownloadLink;
