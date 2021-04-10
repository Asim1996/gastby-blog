
import React from "react"

import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout>
            {/* <section class="section-book">
               <h3>Get In Touch</h3>
               <p>Drop an email at <a href="mailto:awesomeasim2596@gmail.com">Asim Ansari</a></p>  
            </section> */}
        <section class="section-book">
          <div class="row">
            <div class="book">
              <div class="book__form">
                <form class="form" name="contact"  method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div class="u-margin-bottom-medium">
               <h2 class="heading-secondary">
                   Get in Touch
               </h2>
               <input type="hidden" name="bot-field" />
               <input type="hidden" name="form-name" value="contact" />
               </div>
                  <div class="form__group">
                    <input name="name" type="text" class="form__input" placeholder="Full Name" id="name" required />
                    <label for="name" class="form__label">Full Name</label>
                  
                  </div>
                  <div class="form__group">
                    <input name="email" type="email" class="form__input" placeholder="Email" id="email" required />
                    <label for="email" class="form__label">Email</label>
                  </div>
                  <div class="form__group">
                    <textarea name="message" id="message" class="form__input" required placeholder="Your message"></textarea>
                    <label for="message" class="form__label">Your Message</label>
                  </div>
                  <div class="form__group">
                    <button type="submit" class="form__btn">Send Message</button>
                  </div> 
                </form>
              </div>
            </div>
          </div>
          
        </section>

        </Layout>
    )
}

export default Contact;