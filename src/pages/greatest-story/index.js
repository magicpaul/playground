import React from 'react';
import Main from './components/_Main';
import ImgCaption from '../../components/ImgCaption';
import ResponsiveEmbed from 'react-responsive-embed'


const Article = () => (
  <div>
  <ResponsiveEmbed src="https://player.vimeo.com/video/253671047?byline=0&portrait=0" allowFullScreen/>
    <p className="padding-top">The Greatest Story Ever Told begins in <strong>light</strong> and <strong>life</strong> and  <strong>love</strong>.</p>
    <p>There's always been a Father<br/>loving His son, Jesus,<br/>in the joy of the Holy Sprit<br/>
    and you think, &ldquo;How wonderful that the story begins like that,<em> but that's not the world that we see.</em>&rdquo;</p>

<p>Well exactly, this is not the world that we see.</p>

<p>The world that we see if full of <strong>darkness</strong> and <strong>death</strong> and <strong>disconnection</strong>. So what&rsquo;s happened?</p>

<p>What&rsquo;s happened is we have turned from God.<br/>
    And when you turn from <strong>light</strong> where else do you go but <strong>darkness</strong>?<br/>
    When you turn from <strong>life</strong> where else do you go but <strong>death</strong>?<br/>
    When you turn from <strong>love</strong> where else do you go but <strong>disconnection</strong>?<br/>
    And that&rsquo;s why we walk through this valley of the shadow of death, because we have turned from God.</p>
    <p>But what does the God of <strong>light</strong> and <strong>life</strong> and  <strong>love</strong> do when he sees his beloved creatures perishing in the wilderness? He does what <strong>love does.</strong></p>
    <p>Love says your <strong>pit</strong> will be my <strong>pit</strong>,
    <br/>your <strong>death</strong> will be my <strong>death</strong>,
    <br/>your <strong>darkness</strong> will be my <strong>darkness</strong>,
    <br/>your <strong>disconnection</strong> will be my <strong>disconnection</strong>.</p>
    <p>And so the Son of the Father, Jesus, comes as our brother. At Christmas he is <strong>born into the darkness</strong> that we experience. He <strong>walks through the valley of the shadow</strong> with us. And on that cross he <strong>takes our darkness and death and disconnection</strong>. He takes it down to the hellish death that it deserves, and he <strong>and he rises up again to say:</strong></p>
    <p>I&rsquo;ve taken your <strong>darkness</strong>, do you want my <strong>light</strong>?<br/>
    I&rsquo;ve taken your <strong>disconnection</strong>, do you want my <strong>love</strong>?<br/>
    I&rsquo;ve taken your <strong>death</strong>, do you want my <strong>life</strong>?<br/>
    </p>
    <p>And for anyone who says &ldquo;Yes&rdquo;, Jesus comes into their life. He gives them His Father as their father, His Spirit as their spirit, and His future as their future. Jesus invites us into the <strong>happily ever after</strong>.
    </p>
    <p>That is the <strong>Greatest Story Ever Told</strong>.</p>
  </div>
);

export default () => <Main article={<Article />} />;
