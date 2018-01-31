import React from 'react';
import Main from './components/_Main';
import ImgCaption from '../../components/ImgCaption';
import ContactForm from '../../components/ContactForm';

// images


const Article = () => (
  <div>
    <p>If would like to EXPLORE more about Jesus and the Christian faith

Or if you would like to BEGIN following Jesus -

Let us know by filling in the form below and we will get in touch with you.</p>
    <form
          name="contact"
          method="post"
          action="your-story/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
        <fieldset>
          <p>
            <label>
              Your Name: <input type="text" name="name"/>
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email"/>
            </label>
          </p>
          <p>
            <label>
              Your Mobile Number: <input type="tel" name="phone"/>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="explore" /> I’d like to EXPLORE more
            </label>
            <label>
              <input type="checkbox" name="follow" /> I’d like to BEGIN following Jesus
            </label>
          </p>
          <p>
            <button type="submit" className="button--block">Send</button>
          </p></fieldset>
        </form>
  </div>
);


export default () => <Main article={<Article />} />;
