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
    <h2>James’ Story - When Life Throws A Curve Ball </h2>
    <h3>Thursday - 8pm - St Andrew's Presbyterian Church</h3>
    <p>A hospital bed instead of a headmaster’s study – how could this ever be God’s best for anyone’s life? Come and hear James Shone’s courageous story, followed by a hope-filled talk by Glen Scrivener. </p>

<h3>The Storytellers</h3>

<h4>James Shone</h4>

<p>Following a 16-year career in boarding schools, and as a housemaster for most of that time, James was appointed headmaster to Monkton Prep School in 2012. But disaster struck. During his medical assessment a brain tumour was discovered. Over the following months he underwent two massive operations, spending 11 weeks in hospital. The operations saved his life, but robbed him of most of his sight. Consequently, he had to relinquish a dream job, undergo radiotherapy and embark on a new and very different future, devoid of employment or buoyant health.</p>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

export default () => <Main currentPageNum={5} article={<Article />} pageMeta={<PageMeta />} />;
