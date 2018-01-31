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
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="tel" name="phone"/>
      <input type="checkbox" name="explore" />
      <input type="checkbox" name="follow" />
    </form>
    <ContactForm />
  </div>
);


export default () => <Main article={<Article />} />;
