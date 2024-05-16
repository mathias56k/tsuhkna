import React from 'react';

function ContactPage() {
  return (
    <div className="">
        <div className="h-[65px] flex items-center justify-center bg-[#CFC0AE] w-full top-0 fixed z-10">
            <a href="/"><img src="../tsuhkna-website-logo.png" className='h-9' alt="Tsuhkna Website Logo" /></a>
        </div>
      <div className="mt-[65px]">
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
