import React from 'react';
import Main from './components/_Main';
import ImgCaption from '../../components/ImgCaption';
import ResponsiveEmbed from 'react-responsive-embed'


const Article = () => (
  <div>
  <ResponsiveEmbed src="https://player.vimeo.com/video/253671047?byline=0&portrait=0" allowFullScreen/>
    <p className="padding-top">Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow.</p>

<p>Foxy parsons quiz and cajole the lovably dim wiki-girl. Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats. All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog.</p>

<p>DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my</p>
  </div>
);

export default () => <Main article={<Article />} />;
