import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import DownloadLink from '../../components/DownloadLink';
import ImgCaption from '../../components/ImgCaption';
import { Helmet } from 'react-helmet';
import facebook from './img/story1/fb.png'

const PageMeta = () => (
        <div className="SEO">
            <Helmet>
              <meta name="description" content="description"
              />
              <meta property="og:url" content="www.example.com" />
              <meta property="og:title" content="Local Stories" />
              <meta
                property="og:description"
                content="description"
              />
              <meta property="og:image" content={facebook} />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@story_bangor" />
              <meta name="twitter:creator" content="@story_bangor" />
              <meta name="twitter:title" content="Local Stories" />
              <meta
                name="twitter:description"
                content="description"
              />
              <meta name="twitter:image" content={facebook} />
            </Helmet>
        </div>
);

const Article = () => (
  <div className="thanks-block">
    <h1>Coming Soon</h1>
  </div>
);


export default () => <Main currentPageNum={1} article={<Article />} pageMeta={<PageMeta />} />;
