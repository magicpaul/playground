import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/story1/fb.png'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
  {
    "@context": "http://schema.org",
    "@type": "Event",
    "name": "The Greatest Story Ever Told",
    "startDate": "2018-05-13T10:30",
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
    "description": "Join us and hear Glen Scrivener speak about The Greatest Story Ever Told.",
    "performer": {
      "@type": "Person",
      "name": "Glen Scrivener"
    }
  },
  {
    "@context": "http://schema.org",
    "@type": "Event",
    "name": "The Greatest Story Ever Told",
    "startDate": "2018-05-13T11:00",
    "location": {
      "@type": "Place",
      "name": "Hamilton Road Presbyterian Church",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Prospect Roadd",
        "addressLocality": "Bangor",
        "postalCode": "BT20 4LN",
        "addressCountry": "UK"
      }
    },
    image,
    "description": "Join us and hear Glen Scrivener speak about The Greatest Story Ever Told.",
    "performer": {
      "@type": "Person",
      "name": "Glen Scrivener"
    }
  },
  {
    "@context": "http://schema.org",
    "@type": "Event",
    "name": "The Greatest Story Ever Told",
    "startDate": "2018-05-13T18:30",
    "location": {
      "@type": "Place",
      "name": "Hamilton Road Presbyterian Church",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Prospect Roadd",
        "addressLocality": "Bangor",
        "postalCode": "BT20 4LN",
        "addressCountry": "UK"
      }
    },
    image,
    "description": "Join us and hear Glen Scrivener speak about The Greatest Story Ever Told.",
    "performer": {
      "@type": "Person",
      "name": "Glen Scrivener"
    }
  },
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="Join us and hear Glen Scrivener speak about The Greatest Story Ever Told."
              />
              <title>The Greatest Story Ever Told | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/the-greatest-story/" />
              <meta property="og:title" content="The Greatest Story Ever Told | Story Bangor" />
              <meta property="og:description" content="Join us and hear Glen Scrivener speak about The Greatest Story Ever Told." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="The Greatest Story Ever Told | Story Bangor" />
              <meta name="twitter:description" content="Join us and hear Glen Scrivener speak about The Greatest Story Ever Told." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
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
