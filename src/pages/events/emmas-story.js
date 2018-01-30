import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import CodeBlock from '../../components/CodeBlock';
import ImgCaption from '../../components/ImgCaption';
import { Helmet } from 'react-helmet';
import facebook from './img/story1/fb.png'
import ResponsiveEmbed from 'react-responsive-embed'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 54.6614468, lng: -5.6615525 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 54.6614468, lng: -5.6615525 }} />}
  </GoogleMap>
))

const PageMeta = () => (
        <div className="SEO">
            <Helmet>
              <meta name="description" content="description"
              />
              <meta property="og:url" content="www.example.com" />
              <meta property="og:title" content="Event 2 | Story Bangor" />
              <meta
                property="og:description"
                content="description"
              />
              <meta property="og:image" content={facebook} />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@story_bangor" />
              <meta name="twitter:creator" content="@story_bangor" />
              <meta name="twitter:title" content="Event 2 Story Bangor" />
              <meta
                name="twitter:description"
                content="description"
              />
              <meta name="twitter:image" content={facebook} />
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>Emma’s Story - Anorexia Loses Its Grip</h2>
    <h3>Wednesday - 8pm - Hamilton Road Presbyterian Church</h3>

<p>&lsquo;My version of repentance had no room for kindness,&rsquo; admits Emma. &lsquo;It said, &ldquo;Pull yourself together. Try harder. Do more… Fix your own mistakes or face the consequences…&rdquo; But real repentance looks very different. It’s the product of God’s kindness, undeserved and poured out without limit.&rsquo;</p>

<p>Come and hear Emma Scrivener’s deeply moving story and a talk from her husband Glen.</p>

<h3>The Storytellers</h3>

<h4>Emma Scrivener</h4>

<p>Emma grew up in East Belfast during the Troubles. Throughout her teenage years and into adulthood she battled with anorexia. The illness almost ended her life twice. Emma still lives with the long-term effects of anorexia, but her story is one of great hope against all odds. She studied at Oxford University and her writing has been described by Professor John Wyatt as ‘beautiful, shocking, searingly honest and inspiring.’ To find out more about Emma, check out her award-winning blog: <a href="http://www.emmascrivener.net/my-story">www.emmascrivener.net/my-story</a></p>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
  </div>
);

const Homework = () => (
<DevHomework title="Event Details">
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </DevHomework>
);

export default () => <Main currentPageNum={3} article={<Article />} homework={<Homework />} pageMeta={<PageMeta />} />;
