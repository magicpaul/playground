import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import DownloadLink from '../../components/DownloadLink';
import ImgCaption from '../../components/ImgCaption';
import { Helmet } from 'react-helmet';
import facebook from './img/story1/fb.png'
const image =  "https://www.storybangor.com" + facebook;
const PageMeta = () => (
        <div className="SEO">
            <Helmet>
              <meta name="description" content="Hear some great local stories"
              />
              <meta property="og:url" content="www.storybangor.com/local-stories" />
              <meta property="og:title" content="Local Stories" />
              <meta
                property="og:description"
                content="Hear some great local stories"
              />
              <meta property="og:image" content={image} />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Local Stories" />
              <meta
                name="twitter:description"
                content="Hear some great local stories"
              />
              <meta name="twitter:image" content={image} />
            </Helmet>
        </div>
);

const Article = () => (
  <div className="thanks-block">
    <h1>Coming Soon</h1>
  </div>
);


export default () => <Main currentPageNum={1} article={<Article />} pageMeta={<PageMeta />} />;
