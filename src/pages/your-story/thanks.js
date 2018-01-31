import React from 'react';
import Main from './components/_Main';

const Article = () => (
  <div>
    <p>Message sent! Someone will get back to you soon.</p>
  </div>
);


export default () => <Main article={<Article />} />;