import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/story1/fb.png'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
  {
    "@context": "http://schema.org",
    "@type": "Event",
    "name": "The Thief’s Story",
    "startDate": "2018-05-12T20:00",
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
    "description": "Come and watch Marty Gray perform the one-man play: Heaven, How I Got Here, which tells the story of a thief who died beside Jesus, and hear this story explained by Glen Scrivener.",
    "performer": {
      "@type": "Person",
      "name": ["Marty Gray","Glen Scrivener"]
      }
  }
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="Come and watch Marty Gray perform the one-man play: Heaven, How I Got Here, which tells the story of a thief who died beside Jesus, and hear this story explained by Glen Scrivener."
              />
              <title>The Thief’s Story | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/the-thiefs-story/" />
              <meta property="og:title" content="The Thief’s Story | Story Bangor" />
              <meta property="og:description" content="Come and watch Marty Gray perform the one-man play: Heaven, How I Got Here, which tells the story of a thief who died beside Jesus, and hear this story explained by Glen Scrivener." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="The Thief’s Story | Story Bangor" />
              <meta name="twitter:description" content="Come and watch Marty Gray perform the one-man play: Heaven, How I Got Here, which tells the story of a thief who died beside Jesus, and hear this story explained by Glen Scrivener." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            </Helmet>
        </div>
);


const Article = () => (
  <div>
    <h2>The Thief’s Story</h2>
    <h3>Saturday 8pm - Hamilton Road Baptist Church </h3>
    <p>Come and watch Marty Gray perform the one-man play: Heaven, How I Got Here, which tells the story of a thief who died beside Jesus, and hear this story explained by Glen Scrivener. Doors open at 7:30pm.</p>
    <p>Tickets are available via <a href="https://storybangor.eventbrite.co.uk">storybangor.eventbrite.co.uk</a>.</p>
    <p>Creme Bakehouse (High Street) have put together a delicious pre-theatre menu for this event, for more information and to book a table, please contact them directly on <a href="tel:02891275002">02891275002</a>. </p>

<h3>The Storytellers</h3>

<h4>Marty Gray</h4>
<p>Marty grew up in Bangor and, as a child, attended McMaster’s Stage School. He was involved in drama at Bangor Grammar School and in his teens performed with the National Youth Theatre in London. Marty is married to Emma and they have two boys.</p>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

export default () => <Main currentPageNum={10} article={<Article />} pageMeta={<PageMeta />} />;
