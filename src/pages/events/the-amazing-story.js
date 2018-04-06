import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/story1/fb.png'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "The Amazing Story - Family Event",
  "startDate": "2018-05-2T15:30",
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
  image,
  "description": "Join us for a very special afternoon as family entertainer Brian Mitchell shares some stories in surprising and amazing ways.",
  "endDate": "2018-05-2T17:15",
  "performer": {
    "@type": "Person",
    "name": ["Brian Mitchell","Glen Scrivener"]
    }
}
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="Join us for a very special afternoon as family entertainer Brian Mitchell shares some stories in surprising and amazing ways."
              />
              <title>The Amazing Story - Family Event | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/the-amazing-story/" />
              <meta property="og:title" content="The Amazing Story - Family Event | Story Bangor" />
              <meta property="og:description" content="Join us for a very special afternoon as family entertainer Brian Mitchell shares some stories in surprising and amazing ways." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="The Amazing Story - Family Event | Story Bangor" />
              <meta name="twitter:description" content="Join us for a very special afternoon as family entertainer Brian Mitchell shares some stories in surprising and amazing ways." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>The Amazing Story - Family Event</h2>
    <h3>Saturday 3:30pm – 5:15pm – Hamilton Road Presbyterian Church</h3>
    <p>Join us for a very special afternoon as family entertainer Brian Mitchell shares some stories in surprising and amazing ways. Mums, dads and other adults will have the opportunity to hear an engaging talk from Glen Scrivener, while Brian continues sharing his skills with the boys and girls. This event is suitable for all ages and refreshments will be served during the afternoon.</p>
    <p>Tickets are available via <a href="https://storybangor.eventbrite.co.uk">storybangor.eventbrite.co.uk</a>.</p>

<h3>The Storytellers</h3>

<h4>Brian Mitchell</h4>
<p>Brian has been a Family Entertainer for over 25 years. Funny, entertaining and informative, Brian is based in central Scotland but has performed throughout the UK in a variety of places, including the Edinburgh Festival.</p>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

export default () => <Main currentPageNum={9} article={<Article />} pageMeta={<PageMeta />} />;
