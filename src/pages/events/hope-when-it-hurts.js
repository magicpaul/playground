import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import CodeBlock from '../../components/CodeBlock';
import ImgCaption from '../../components/ImgCaption';
import { Helmet } from 'react-helmet';
import facebook from './img/story1/fb.png'

const PageMeta = () => (
        <div className="SEO">
            <Helmet>
              <meta name="description" content="description"
              />
              <meta property="og:url" content="www.example.com" />
              <meta property="og:title" content="Event 3" />
              <meta
                property="og:description"
                content="description"
              />
              <meta property="og:image" content={facebook} />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Event 3" />
              <meta
                name="twitter:description"
                content="description"
              />
              <meta name="twitter:image" content={facebook} />
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>Hope When It Hurts - Women’s Event</h2>
    <h3>Thursday - 9:30am - Hamilton Road Baptist Church</h3>

<p>Women of all ages and stages are invited to Hamilton Road Baptist Church to enjoy coffee and treats, and hear how one woman found great hope in the midst of experiencing some of life's deep hurts.</p>
  </div>
);

export default () => <Main currentPageNum={4} article={<Article />} pageMeta={<PageMeta />} />;
