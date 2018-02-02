import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/raymond/fb1.png'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Raymond’s Story - Travel Is My Business",
  "startDate": "2018-05-11T07:30",
  "location": {
    "@type": "Place",
    "name": "Coffee Cure at the Museum",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Town Hall, The Castle",
      "addressLocality": "Bangor",
      "postalCode": "BT20 4BT",
      "addressCountry": "UK"
    }
  },
  image,
  "description": "Enjoy a Coffee Cure breakfast and the opportunity to hear local businessman Raymond Parker’s story and a stimulating talk from Glen Scrivener.",
  "endDate": "2018-05-11T09:00",
  "performer": {
    "@type": "Person",
    "name": ["Raymond Parker","Glen Scrivener"]
    }
}
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="Enjoy a Coffee Cure breakfast and the opportunity to hear local businessman Raymond Parker’s story and a stimulating talk from Glen Scrivener."
              />
              <title>Raymond’s Story - Travel Is My Business | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/raymonds-story/" />
              <meta property="og:title" content="Raymond’s Story - Travel Is My Business | Story Bangor" />
              <meta property="og:description" content="Enjoy a Coffee Cure breakfast and the opportunity to hear local businessman Raymond Parker’s story and a stimulating talk from Glen Scrivener." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Raymond’s Story - Travel Is My Business | Story Bangor" />
              <meta name="twitter:description" content="Enjoy a Coffee Cure breakfast and the opportunity to hear local businessman Raymond Parker’s story and a stimulating talk from Glen Scrivener." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
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
