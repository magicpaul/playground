import React from 'react';
import PropTypes from 'prop-types';


const DevHomework = props => (
  <div className="homework">
    <div className="container">
      <h2 className="homework__title">{props.title}</h2>
      <div className="row">
        <div className="homework__content">{props.children}</div>
      </div>
    </div>
  </div>
);

DevHomework.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default DevHomework;
