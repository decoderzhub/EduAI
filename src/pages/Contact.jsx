import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import './Contact.css'

function Contact() {
  useEffect(() => {
    console.log('Contact component mounted');
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-e-1">
        <div className="contact-e-101">
            <div className="contact-e-102">
                <div className="contact-e-113"> 
                  <Text tag="span" className="contact-e-114"> 
                    <Image src="/assets/asset-81133393.svg" alt="EduAI Bridge Logo" /> 
                  </Text>
                  <Text tag="span" className="contact-e-115">
                    <Text tag="p">EduAI Bridge </Text>
                  </Text>
                </div>
                <div className="contact-e-104">
                    <div className="contact-e-111"> <i className="far fa-window-close contact-e-112"></i></div>
                    <div className="contact-e-105"> 
                      <Text tag="span" className="contact-e-106">
                        <Link href="/" target="_self" className="link">
                          <Text tag="p">HOME</Text>
                        </Link>
                      </Text>
                      <Text tag="span" className="contact-e-107">
                        <Link href="/about" target="_self" className="link">
                          <Text tag="p">ABOUT</Text>
                        </Link>
                      </Text>
                      <Text tag="span" className="contact-e-109">
                        <Link href="/service" target="_self" className="link">
                          <Text tag="p">SERVICE</Text>
                        </Link>
                      </Text>
                      <Text tag="span" className="contact-e-108">
                        <Link href="/contact" target="_self" className="link">
                          <Text tag="p">CONTACT</Text>
                        </Link>
                      </Text>
                    </div>
                    <button className="contact-e-110">
                      <Link href="/contact" target="_self" className="link">
                        <Text tag="p">CONTACT US</Text>
                      </Link>
                    </button>
                </div>
                <i className="fas fa-bars contact-e-103"></i>
            </div>
        </div>
        <div className="contact-e-11">
            <div className="contact-e-12"> 
              <Text tag="span" className="contact-e-13">
                <Text tag="p">CONTACT</Text>
              </Text>
            </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="contact-e-2">
        <div className="contact-e-3"> 
          <i className="far fa-window-close contact-e-10"></i>
          <Text tag="span" className="contact-e-4">
            <Text tag="p"><strong>Where can i reach you</strong></Text>
          </Text>
          <Text tag="span" className="contact-e-9">
            <Text tag="p">Enter your email address below to receive your appointment (and reminders before we begin)</Text>
          </Text>
          <div className="contact-e-5" data-component-type="form-component-v1" data-clientid="contact-e-5">
            <div className="contact-e-7" data-clientid="contact-e-7"> 
              <input className="contact-e-6" data-clientid="contact-e-6" placeholder="email@example.com" />
            </div>
            <button className="contact-e-8" data-clientid="contact-e-8">
              <Text tag="p">LETS TALK</Text>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-e-71">
        <div className="contact-e-72">
            <div className="contact-e-73">
                <div className="contact-e-74">
                    <div className="contact-e-113-footer"> 
                      <Text tag="span" className="contact-e-114-footer"> 
                        <Image src="/assets/asset-81133393.svg" alt="EduAI Bridge Logo" /> 
                      </Text>
                      <Text tag="span" className="contact-e-115-footer">
                        <Text tag="p">EduAI Bridge </Text>
                      </Text>
                    </div>
                    <div className="contact-e-75"> 
                      <Text tag="span" className="contact-e-103">
                        <Text tag="p">EduAI Bridge enhances learning with AI, addressing teacher shortages and improving student outcomes. </Text>
                      </Text>
                    </div>
                </div>
                <div className="contact-e-76"> 
                  <Text tag="span" className="contact-e-80">
                    <Text tag="p">QUICK LINKS</Text>
                  </Text>
                  <div className="contact-e-77"> 
                    <Text tag="span" className="contact-e-78">
                      <Link href="/about" target="_self" className="link">
                        <Text tag="p">ABOUT</Text>
                      </Link>
                    </Text>
                    <Text tag="span" className="contact-e-79">
                      <Link href="/service" target="_self" className="link">
                        <Text tag="p">SERVICE</Text>
                      </Link>
                    </Text>
                    <Text tag="span" className="contact-e-84">
                      <Link href="/contact" target="_self" className="link">
                        <Text tag="p">CONTACT</Text>
                      </Link>
                    </Text>
                  </div>
                </div>
                <div className="contact-e-81"> 
                  <Text tag="span" className="contact-e-82">
                    <Text tag="p">CONTACT</Text>
                  </Text>
                  <div className="contact-e-85">
                    <div className="contact-e-86">
                        <div className="contact-e-87"> <i className="fas fa-map-marker-alt contact-e-88"></i></div>
                        <div className="contact-e-89"> 
                          <Text tag="span" className="contact-e-90">
                            <Text tag="p">Address Not Provided </Text>
                          </Text>
                        </div>
                    </div>
                    <div className="contact-e-97">
                        <div className="contact-e-98"> <i className="fas fa-phone-alt contact-e-99"></i></div>
                        <div className="contact-e-100"> 
                          <Text tag="span" className="contact-e-101-phone">
                            <Text tag="p">555-123-4567 </Text>
                          </Text>
                          <Text tag="span" className="contact-e-102">
                            <Text tag="p">555-987-6543 </Text>
                          </Text>
                        </div>
                    </div>
                    <div className="contact-e-91">
                        <div className="contact-e-92"> <i className="fas fa-envelope contact-e-93"></i></div>
                        <div className="contact-e-94"> 
                          <Text tag="span" className="contact-e-95">
                            <Text tag="p">info@eduaibridge.com </Text>
                          </Text>
                          <Text tag="span" className="contact-e-96">
                            <Text tag="p">support@eduaibridge.com </Text>
                          </Text>
                        </div>
                    </div>
                    <div className="contact-e-104-social">
                        <div className="contact-e-105"> <i className="fab fa-facebook-f contact-e-106"></i></div>
                        <div className="contact-e-111-social"> <i className="fab fa-instagram contact-e-112-social"></i></div>
                        <div className="contact-e-109"> <i className="fab fa-youtube contact-e-110"></i></div>
                        <div className="contact-e-107"> <i className="fab fa-linkedin-in contact-e-108"></i></div>
                    </div>
                  </div>
                </div>
            </div>
            <Text tag="span" className="contact-e-83">
                <Text tag="p">©2066 . All Rights Reserved.</Text>
            </Text>
        </div>
      </div>
    </div>
  )
    {/* Contact Form Section */}
    <div className="contact-main-section">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <Text tag="h2" className="contact-form-title">Get In Touch</Text>
          <Text tag="p" className="contact-form-subtitle">
            Ready to transform your educational experience? Contact our team to learn more about EduAI Bridge.
          </Text>
        </div>
        
        <form className="contact-form" data-component-type="form-component-v1">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="Enter your first name"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                placeholder="Enter your last name"
                required 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="What can we help you with?"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6"
              placeholder="Tell us more about your needs..."
              required
            ></textarea>
          </div>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              I agree to the privacy policy and terms of service
            </label>
          </div>
          
          <button type="submit" className="contact-submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>

    {/* Newsletter Section */}

export default Contact