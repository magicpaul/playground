import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import { Helmet } from 'react-helmet';
import ShareImage from './img/story1/bangor-abbey-fb.jpg'
import abbey from './img/story1/bangor-abbey.jpg'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Bangor’s Story - Discover Our Heritage",
  "startDate": "2018-05-09T10:00",
  "location": {
    "@type": "Place",
    "name": "Hamilton Road Presbyterian Church",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prospect Road",
      "addressLocality": "Bangor",
      "postalCode": "BT20 4LN",
      "addressCountry": "UK"
    }
  },
  "image":"https://www.storybangor.com/static/bangor-abbey-fb.54c28765.jpg",
  "description": "Come explore Bangor’s Christian heritage with David Irwin at the wheel and Robert McKinley as tour guide. Board the coach at Hamilton Road Presbyterian Church’s Welcome Centre and finish up with refreshments and a short talk about the historical Jesus from Glen Scrivener.",
  "endDate": "2018-05-09T12:00",
  "performer": {
    "@type": "Person",
    "name": ["Robert McKinley","Glen Scrivener"]
    }
},
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Bangor’s Story - Discover Our Heritage",
  "startDate": "2018-05-10T10:00",
  "location": {
    "@type": "Place",
    "name": "Hamilton Road Presbyterian Church",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prospect Road",
      "addressLocality": "Bangor",
      "postalCode": "BT20 4LN",
      "addressCountry": "UK"
    }
  },
  "image":"https://www.storybangor.com/static/bangor-abbey-fb.54c28765.jpg",
  "description": "Come explore Bangor’s Christian heritage with David Irwin at the wheel and Robert McKinley as tour guide. Board the coach at Hamilton Road Presbyterian Church’s Welcome Centre and finish up with refreshments and a short talk about the historical Jesus from Glen Scrivener.",
  "endDate": "2018-05-10T12:00",
  "performer": {
    "@type": "Person",
    "name": ["Robert McKinley","Glen Scrivener"]
    }
}
]
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
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Bangor's Story | Story Bangor" />
              <meta name="twitter:description" content="Come explore Bangor’s Christian heritage with David Irwin at the wheel and Robert McKinley as tour guide." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>Bangor’s Story - Discover Our Heritage</h2>
    <h3>Wednesday & Thursday 10am - Noon</h3>
    <p>Come explore Bangor’s Christian heritage with David Irwin at the wheel and Robert McKinley as tour guide. Board the coach at Hamilton Road Presbyterian Church’s Welcome Centre and finish up with refreshments and a short talk about the historical Jesus from Glen Scrivener.</p>
<img src={abbey} />

<h3>The Storytellers</h3>

<h4>Robert McKinley</h4>

<p>Robert is a Bangor man and was formerly Head of History in a Belfast secondary school. He is currently President of Bangor Historical Society. Robert is particularly interested in local and military history.</p>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

export default () => <Main currentPageNum={2} article={<Article />} pageMeta={<PageMeta />} />;
