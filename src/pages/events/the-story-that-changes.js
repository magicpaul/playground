import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/story1/fb.png'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
  {
    "@context": "http://schema.org",
    "@type": "Event",
    "name": "The Story That Changes - Youth Event",
    "startDate": "2018-05-10T20:00",
    "location": {
      "@type": "Place",
      "name": "Hamilton Road Baptist Church",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "112 Hamilton Rd",
        "addressLocality": "Bangor",
        "postalCode": "BT20 4LQ",
        "addressCountry": "UK"
      }
    },
    image,
    "description": "The story doesn’t change but the story changes lives. An evening of stories, food, music, games - and the opportunity to hear the story that doesn’t change - but changes lives.",
  }
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="The story doesn’t change but the story changes lives. An evening of stories, food, music, games - and the opportunity to hear the story that doesn’t change - but changes lives."
              />
              <title>The Story That Changes - Youth Event | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/the-story-that-changes/" />
              <meta property="og:title" content="The Story That Changes - Youth Event | Story Bangor" />
              <meta property="og:description" content="The story doesn’t change but the story changes lives. An evening of stories, food, music, games - and the opportunity to hear the story that doesn’t change - but changes lives." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="The Story That Changes - Youth Event | Story Bangor" />
              <meta name="twitter:description" content="The story doesn’t change but the story changes lives. An evening of stories, food, music, games - and the opportunity to hear the story that doesn’t change - but changes lives." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
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
