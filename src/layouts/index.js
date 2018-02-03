import React from 'react';
import { Helmet } from 'react-helmet';
import 'typeface-megrim';

// images
import faviconico from './img/favicon.ico';
import faviconpng from './img/favicon.png';
import logo from '../pages/img/sbfb.png';
const image =  "https://www.storybangor.com" + logo;
// styles
import '../styles/style.scss';

// Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CTA from '../components/layout/CTA';
const schemaOrgJSONLD = [
  {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Story Bangor",
        "url": "https://www.storybangor.com",
        "logo": "https://www.storybangor.com/static/sb-logo.4f06c7d4.png",
        "sameAs": [
          "http://www.facebook.com/storybangorni",
          "http://instagram.com/storybangor",
          "https://twitter.com/storybangor",
          "https://www.youtube.com/channel/UCQ-ufwsB2lHz3KmSPwjh8Ww"
        ]
      }
]
const Layout = ({ children }) => (
  <div className="wrapper">
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={faviconico} />
      <link rel="icon" type="image/png" href={faviconpng} sizes="196x196" />
      <title>{'Story Bangor'}</title>
      <meta
        name="description"
        content="Sharing great stories with the people of Bangor"
      />
      <meta property="og:url" content="https://www.storybangor.com" />
      <meta property="og:title" content="Story Bangor" />
      <meta property="og:description" content="Sharing great stories with the people of Bangor"/>
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@storybangor" />
      <meta name="twitter:creator" content="@storybangor" />
      <meta name="twitter:title" content="Story Bangor" />
      <meta
        name="twitter:description"
        content="Sharing great stories with the people of Bangor"
      />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
    </Helmet>

    <Header />

    {children()}

    <CTA />
    <Footer />
  </div>
);

export default Layout;
