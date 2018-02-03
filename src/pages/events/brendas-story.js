import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/story-1/fb.png'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Brenda’s Story - Tracing The Rainbow Through The Rain",
  "startDate": "2018-05-11T20:00",
  "location": {
    "@type": "Place",
    "name": "Lisnabreen Presbyterian Church",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lisnabreen Walk",
      "addressLocality": "Bangor",
      "postalCode": "BT20 4XJ",
      "addressCountry": "UK"
    }
  },
  image,
  "description": "“I warned you Brenda, that’s what you get for dating a soldier – heartache. A life eartache.” Come and hear Brenda Hale’s truly heartbreaking, yet ultimately hopeful, story and an encouraging talk by Glen Scrivener.",
  "performer": {
    "@type": "Person",
    "name": ["Brenda Hale","Glen Scrivener"]
    }
}
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="“I warned you Brenda, that’s what you get for dating a soldier – heartache. A life of heartache.” Come and hear Brenda Hale’s truly heartbreaking, yet ultimately hopeful, story and an encouraging talk by Glen Scrivener."
              />
              <title>Brenda’s Story - Tracing The Rainbow Through The Rain | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/brendas-story/" />
              <meta property="og:title" content="Brenda’s Story - Tracing The Rainbow Through The Rain | Story Bangor" />
              <meta property="og:description" content="“I warned you Brenda, that’s what you get for dating a soldier – heartache.“ Come and hear Brenda Hale’s truly heartbreaking, yet ultimately hopeful, story and an encouraging talk by Glen Scrivener." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Brenda’s Story - Tracing The Rainbow Through The Rain | Story Bangor" />
              <meta name="twitter:description" content="“I warned you Brenda, that’s what you get for dating a soldier – heartache. A life of heartache.” Come and hear Brenda Hale’s truly heartbreaking, yet ultimately hopeful, story and an encouraging talk by Glen Scrivener." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>Brenda’s Story - Tracing The Rainbow Through The Rain</h2>
    <h3>Friday 8pm - Lisnabreen Presbyterian Church</h3>
    <p>“I warned you Brenda, that’s what you get for dating a soldier – heartache. A life of heartache.”<br/>Come and hear Brenda Hale’s truly heartbreaking, yet ultimately hopeful, story and an encouraging talk by Glen Scrivener.</p>

<h3>The Storytellers</h3>

<h4>Brenda Hale</h4>
<p>Brenda grew up in Bangor and married Mark Hale, a British Army soldier. They were together for 22 years. Tragically, Mark died in Camp Bastion, Afghanistan, on 13th August 2009, leaving Brenda and their daughters Tori and Alex in a state of unimaginable grief. Mark’s loss was to become a major catalyst in Brenda’s decision to pursue a political career, a central objective of which is to fight for a better deal for the families of those servicemen and women who have paid the ultimate price for their country.</p>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

export default () => <Main currentPageNum={7} article={<Article />} pageMeta={<PageMeta />} />;
