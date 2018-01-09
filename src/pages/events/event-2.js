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
    <h2>Event 2</h2>
    <p>Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow.</p>

<p>Foxy parsons quiz and cajole the lovably dim wiki-girl. Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats. All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog.</p>

<p>DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my</p>
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
