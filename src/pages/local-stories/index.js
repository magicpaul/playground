import React from 'react';
import Main from './components/_Main';
import DevHomework from '../../components/layout/DevHomework';
import DownloadLink from '../../components/DownloadLink';
import ImgCaption from '../../components/ImgCaption';
import { Helmet } from 'react-helmet';
import facebook from './img/story1/fb.png'
const image =  "https://www.storybangor.com" + facebook;
const PageMeta = () => (
        <div className="SEO">
            <Helmet>
              <meta name="description" content="Hear some great local stories"
              />
              <meta property="og:url" content="www.storybangor.com/local-stories" />
              <meta property="og:title" content="Local Stories" />
              <meta
                property="og:description"
                content="Hear some great local stories"
              />
              <meta property="og:image" content={image} />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Local Stories" />
              <meta
                name="twitter:description"
                content="Hear some great local stories"
              />
              <meta name="twitter:image" content={image} />
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BNd6G7ksoa4" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Margaret&rsquo;s Story</h3>
      <p>&ldquo;My husband beat me up&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_aOrPLW-AsM" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Maureen&rsquo;s Story</h3>
      <p>&ldquo;I lost the two people I loved the most&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/i-k5je5T7z0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Richard&rsquo;s Story</h3>
      <p>&ldquo;I knew it was safer to climb into the bush myself&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/w76QFrR4Gxo" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Evie&rsquo;s Story</h3>
      <p>&ldquo;I had to make a decision&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/09xKIASr390" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Kathryn&rsquo;s Story</h3>
      <p>&ldquo;The plan was for chemotheraphy first&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dGoHD5fy_5I" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Valerie&rsquo;s Story</h3>
      <p>&ldquo;My name was on a paramilitary hit list&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/thks4BPmn3U" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Gary&rsquo;s Story</h3>
      <p>&ldquo;Drinking filled a void that existed&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MUZp0xkolwU" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Pat&rsquo;s Story</h3>
      <p>&ldquo;I was a very violent person&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ITyb6-4-XAU" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Jonah&rsquo;s Story</h3>
      <p>&ldquo;From pastor&rsquo;s kid to prodigal&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2_XEPOQkNmQ" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Aaron&rsquo;s Story</h3>
      <p>&ldquo;Our car exploded&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GrO9MfwRG9I" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Campbell&rsquo;s Story</h3>
      <p>&ldquo;Our enjoyment of the beach at Ballyholme was short-lived&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FivniYLJD7I" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Dougie&rsquo;s Story</h3>
      <p>&ldquo;No lightning bolts, no major change in lifestyle&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3WGY9s2099w" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Ella&rsquo;s Story</h3>
      <p>&ldquo;There was a 50% chance I wouldn't make it&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mqdhA6G9FfY" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Cameron&rsquo;s Story</h3>
      <p>&ldquo;I am confident that God is in control&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3wjO8TosSTc" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">Abbie&rsquo;s Story</h3>
      <p>&ldquo;My aunt and my granny both had cancer&rdquo;</p>
    </div>
    <div className="media">
      <div className="media__video">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VPJdcgTD-WY" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <h3 className="extra-top-pad">John &amp; Sarah&rsquo;s Story</h3>
      <p>&ldquo;We felt like we were drowning&rdquo;</p>
    </div>

  </div>
);


export default () => <Main currentPageNum={1} article={<Article />} pageMeta={<PageMeta />} />;
