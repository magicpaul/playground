import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import CodeBlock from '../../components/CodeBlock';
import ImgCaption from '../../components/ImgCaption';
import { Helmet } from 'react-helmet';
import facebook from './img/story1/fb.png'
import abbey from './img/story1/bangor-abbey.jpg'
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
              <meta name="title" content="Event 1 | Story Bangor"
              />
              <meta property="og:url" content="www.example.com" />
              <meta property="og:title" content="Joe's Story | Story Bangor" />
              <meta
                property="og:description"
                content="description"
              />
              <meta property="og:image" content={facebook} />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@story_bangor" />
              <meta name="twitter:creator" content="@story_bangor" />
              <meta name="twitter:title" content="Joe's Story | Story Bangor" />
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

export default () => <Main currentPageNum={2} article={<Article />} homework={<Homework />} pageMeta={<PageMeta />} />;
