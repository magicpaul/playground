import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import facebook from './img/story1/fb.png'
import Link from 'gatsby-link';


const PageMeta = () => (
        <div className="SEO">
            <Helmet>
              <meta name="description" content="Check out what’s happening"
              />
              <meta property="og:url" content="https://www.storybangor.com/events" />
              <meta property="og:title" content="Local Stories" />
              <meta
                property="og:description"
                content="Check out what’s happening"
              />
              <meta property="og:image" content={facebook} />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Local Stories" />
              <meta
                name="twitter:description"
                content="Check out what’s happening"
              />
              <meta name="twitter:image" content={facebook} />
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h3><Link to="/events/bangors-story/">Bangor's Story - Discover Our Heritage</Link></h3>
    <p>Wednesday 9th & Thursday 10th May<br/>
    10am - Noon<br/>
    Coach tour begins and ends at Hamilton Road Presbyterian </p>

    <h3><Link to="/events/emmas-story">Emma’s Story – Anorexia Loses Its Grip</Link></h3>
    <p>Wednesday 9th May <br/>
    8pm <br/>
    Hamilton Road Presbyterian Church</p>


    <h3><Link to="/events/honors-story">Honor’s Story - Hope When It Hurts (Women's Event)</Link></h3>
    <p>Thursday 10th May <br/>
    9:30am <br/>
    Hamilton Road Baptist Church</p>

    <h3><Link to="/events/james-story">James’s Story – When Life Throws a Curve Ball </Link></h3>
    <p>Thursday 10th May<br/>
    8pm <br/>
    St Andrew's Presbyterian Church</p>


    <h3><Link to="/events/raymonds-story">Raymond’s Story - Travel Is My Business</Link></h3>
    <p>Friday 11th May <br/>
    7:30-9am <br/>
    Coffee Cure @ The Heritage Centre</p>

    <h3><Link to="/events/brendas-story">Brenda’s Story – Tracing the Rainbow Through the Rain</Link></h3>
    <p>Friday 11th May <br/>
    8pm <br/>
    Lisnabreen Presbyterian Church </p>

    <h3><Link to="/events/the-story-that-changes">The Story That Changes - Youth Event</Link></h3>
    <p>Friday 11th May <br/>
    8pm <br/>
    Hamilton Road Baptist Church </p>

    <h3><Link to="/events/the-amazing-story">The Amazing Story  – Family Event</Link></h3>
    <p>Saturday 12th May <br/>
    3:30pm – 5:15pm <br/>
    Hamilton Road Presbyterian Church</p>

    <h3><Link to="/events/the-thiefs-story">The Thief’s Story</Link></h3>
    <p>Saturday 12th May <br/>
    8pm <br/>
    Hamilton Road Baptist Church</p>

    <h3><Link to="/events/the-greatest-story">The Greatest Story Ever Told</Link></h3>
    <p>Sunday 13th May<br/>
    Hamilton Road Baptist Church at 10:30am <br/>
    Hamilton Road Presbyterian Church at 11am & 6:30pm.</p>
  </div>
);

export default () => <Main currentPageNum={1} article={<Article />} pageMeta={<PageMeta />} />;
