import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/james/fb1.png'
import ResponsiveEmbed from 'react-responsive-embed'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "James’ Story - When Life Throws A Curve Ball",
  "startDate": "2018-05-10T20:00",
  "location": {
    "@type": "Place",
    "name": "St Andrew’s Presbyterian Church",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "111 Clandeboye Road",
      "addressLocality": "Bangor",
      "postalCode": "BT20 3JW",
      "addressCountry": "UK"
    }
  },
  image,
  "description": "A hospital bed instead of a headmaster’s study – how could this ever be God’s best for anyone’s life? Come and hear James Shone’s courageous story, followed by a hope-filled talk by Glen Scrivener.",
  "performer": {
    "@type": "Person",
    "name": ["James Shone","Glen Scrivener"]
    }
}
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="A hospital bed instead of a headmaster’s study – how could this ever be God’s best for anyone’s life? Come and hear James Shone’s courageous story, followed by a hope-filled talk by Glen Scrivener."
              />
              <title>James’ Story - When Life Throws A Curve Ball | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/james-story/" />
              <meta property="og:title" content="James’ Story - When Life Throws A Curve Ball | Story Bangor" />
              <meta property="og:description" content="A hospital bed instead of a headmaster’s study – how could this ever be God’s best for anyone’s life? Come and hear James Shone’s courageous story, followed by a hope-filled talk by Glen Scrivener." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="James’ Story - When Life Throws A Curve Ball | Story Bangor" />
              <meta name="twitter:description" content="A hospital bed instead of a headmaster’s study – how could this ever be God’s best for anyone’s life? Come and hear James Shone’s courageous story, followed by a hope-filled talk by Glen Scrivener." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>James’ Story - When Life Throws A Curve Ball </h2>
    <h3>Thursday - 8pm - St Andrew's Presbyterian Church</h3>
    <ResponsiveEmbed src="https://www.youtube.com/embed/mUkFAfkKd2I
" allowFullScreen/>
    <p>A hospital bed instead of a headmaster’s study – how could this ever be God’s best for anyone’s life? Come and hear James Shone’s courageous story, followed by a hope-filled talk by Glen Scrivener. </p>
    <h3>The Storytellers</h3>

    <h4>James Shone</h4>

    <p>Following a 16-year career in boarding schools, and as a housemaster for most of that time, James was appointed headmaster to Monkton Prep School in 2012. But disaster struck. During his medical assessment a brain tumour was discovered. Over the following months he underwent two massive operations, spending 11 weeks in hospital. The operations saved his life, but robbed him of most of his sight. Consequently, he had to relinquish a dream job, undergo radiotherapy and embark on a new and very different future, devoid of employment or buoyant health.</p>

    <h4>Glen Scrivener</h4>

    <p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

export default () => <Main currentPageNum={5} article={<Article />} pageMeta={<PageMeta />} />;
