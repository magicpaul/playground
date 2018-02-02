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
    <h2>Raymond’s Story - Travel Is My Business</h2>
    <h3>Friday - 7:30-9am - Coffee Cure @ The Heritage Centre</h3>
    <p>Enjoy a Coffee Cure breakfast and the opportunity to hear local businessman Raymond Parker’s story and a stimulating talk from Glen Scrivener.</p>

<h3>The Storytellers</h3>

<h4>Raymond Parker</h4>

<p>Raymond is the owner and Managing Director of Feherty Travel. He has over 45 years’ experience in the travel Industry and has travelled extensively throughout the world. Raymond has much wisdom to share on running a successful business and living a full life.</p>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

export default () => <Main currentPageNum={6} article={<Article />} pageMeta={<PageMeta />} />;
