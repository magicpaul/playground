import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import CodeBlock from '../../components/CodeBlock';
import ImgCaption from '../../components/ImgCaption';
import { Helmet } from 'react-helmet';
import facebook from './img/story1/bangor-abbey-fb.jpg'
import abbey from './img/story1/bangor-abbey.jpg'


const PageMeta = () => (
        <div className="SEO">
            <Helmet>
              <meta name="description" content="Come explore Bangor’s Christian heritage with David Irwin at the wheel and Robert McKinley as tour guide."
              />
              <meta name="title" content="Bangor's Story | Story Bangor"
              />
              <meta property="og:url" content="https://www.storybangor.com/events/bangors-story/" />
              <meta property="og:title" content="Bangor's Story | Story Bangor" />
              <meta property="og:description" content="Come explore Bangor’s Christian heritage with David Irwin at the wheel and Robert McKinley as tour guide." />
              <meta property="og:image" content={facebook} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Bangor's Story | Story Bangor" />
              <meta name="twitter:description" content="Come explore Bangor’s Christian heritage with David Irwin at the wheel and Robert McKinley as tour guide." />
              <meta name="twitter:image" content={facebook} />
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>The Story That Changes - Youth Event</h2>
    <h3>Friday 8pm - Hamilton Road Baptist Church</h3>
    <p>The story doesn’t change but the story changes lives.</p>
    <p>An evening of stories, food, music, games - and the opportunity to hear the story that doesn’t change - but changes lives.</p>
  </div>
);

export default () => <Main currentPageNum={8} article={<Article />} pageMeta={<PageMeta />} />;
