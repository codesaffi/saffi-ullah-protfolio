import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <>
    <article className="contact" data-page="contact">

<header>
  <h2 class="h2 article-title">Contact</h2>
</header>

<section className="mapbox" data-mapbox>
  <figure>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53715.78965733869!2d73.91131398799072!3d32.70633336509168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0976a9388329%3A0xb8a5131548b7b16a!2sLalamusa%2C%20Gujrat%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718977801110!5m2!1sen!2s" referrerpolicy="no-referrer-when-downgrade" width="400" height="300" loading="lazy"></iframe>
  </figure>
</section>

<section className="contact-form">

  <h3 className="h3 form-title">Contact Form</h3>

  <form action="https://formspree.io/f/xoqgpzyn" className="form" method="POST" data-form>

    <div className="input-wrapper">
      <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input/>

      <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input/>
    </div>

    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

    <button className="form-btn" type="submit">
    <FontAwesomeIcon icon={faPaperPlane} />
      <span>Send Message</span>
    </button>

  </form>

</section>

</article>
    </>

          
    
  )
}

export default Contact