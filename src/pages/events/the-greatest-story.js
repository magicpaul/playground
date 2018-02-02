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
    <h2>The Greatest Story Ever Told</h2>
    <h3>Hamilton Road Baptist Church at 10:30am</h3><h3>Hamilton Road Presbyterian Church at 11am & 6:30pm. </h3>
    <p>Join us at Hamilton Road Baptist or Hamilton Road Presbyterian Church and hear Glen Scrivener speak about The Greatest Story Ever Told.</p>

<h3>The Storyteller</h3>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

export default () => <Main currentPageNum={11} article={<Article />} pageMeta={<PageMeta />} />;
