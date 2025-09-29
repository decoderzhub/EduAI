import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import '../library.css'
import './Contact.css'

function Contact() {
  useEffect(() => {
    // Component-specific initialization can go here
    console.log('Contact component mounted');
  }, []);

  return (
    <div className="contact-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container flex-between">
          <div className="navbar-brand">
            <Image src="/assets/asset-81133393.svg" alt="EduAI Bridge Logo" className="navbar-logo" />
            <Text tag="span">EduAI Bridge</Text>
          </div>
          <div className="navbar-nav">
            <Link href="/" className="nav-link">HOME</Link>
            <Link href="/about" className="nav-link">ABOUT</Link>
            <Link href="/service" className="nav-link">SERVICE</Link>
            <Link href="/contact" className="nav-link">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container text-center">
          <Text tag="h1" className="heading-xl mb-4">Contact Us</Text>
          <Text tag="p" className="text-lg">Get in touch with our education technology experts</Text>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-form-section section-lg">
        <div className="container">
          <div className="grid-2 gap-8">
            {/* Contact Form */}
            <div className="card">
              <Text tag="h2" className="heading-md mb-4 text-primary">GET IN TOUCH</Text>
              <Text tag="p" className="text-base mb-4">
                We'd love to hear from you! Reach out to learn more about how EduAI Bridge can transform your educational institution.
              </Text>
              <Text tag="p" className="text-base mb-8">
                Our team of education technology experts is ready to help you implement AI-powered solutions that enhance learning outcomes.
              </Text>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="form-input" 
                      placeholder="Enter your first name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="form-input" 
                      placeholder="Enter your last name" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-input" 
                      placeholder="Enter your email address" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="form-input" 
                      placeholder="Enter your phone number" 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea 
                    id="message" 
                    className="form-textarea" 
                    placeholder="Tell us about your educational needs and how we can help..." 
                    rows="5" 
                    required
                  ></textarea>
                </div>
                
                <div className="form-checkbox">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy" className="text-sm">
                    I agree to the privacy policy and terms of service *
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit Form
                </button>
              </form>
            </div>

            {/* Contact Information & Image */}
            <div>
              <div className="mb-8">
                <Image src="/assets/asset-78e81b68" alt="Contact Us" className="card" />
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <Text tag="h4" className="font-semibold mb-2">Email</Text>
                  <Text tag="p" className="text-gray">info@eduaibridge.com</Text>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <Text tag="h4" className="font-semibold mb-2">Location</Text>
                  <Text tag="p" className="text-gray">Education Technology Hub, USA</Text>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <Text tag="h4" className="font-semibold mb-2">Phone</Text>
                  <Text tag="p" className="text-gray">+1 (555) 123-4567</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section section-dark">
        <div className="container text-center">
          <Text tag="h3" className="heading-md mb-4">Stay Connected</Text>
          <Text tag="p" className="text-lg mb-8">
            Enter your email address below to receive updates and appointment reminders
          </Text>
          <div className="flex-center gap-4">
            <input 
              type="email" 
              className="form-input" 
              placeholder="Enter your email address"
              style={{maxWidth: '300px'}}
            />
            <button className="btn btn-secondary">
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bg section">
        <div className="container">
          <div className="grid-3 gap-8 mb-8">
            <div>
              <div className="navbar-brand mb-4">
                <Image src="/assets/asset-81133393.svg" alt="EduAI Bridge Logo" className="navbar-logo" />
                <Text tag="span" className="text-white">EduAI Bridge</Text>
              </div>
              <Text tag="p" className="text-white">
                EduAI Bridge enhances learning with AI, addressing teacher shortages and improving student outcomes.
              </Text>
            </div>
            
            <div>
              <Text tag="h4" className="heading-sm text-white mb-4">Quick Links</Text>
              <div className="flex-col gap-2">
                <Link href="/about" className="text-white nav-link">About</Link>
                <Link href="/service" className="text-white nav-link">Service</Link>
                <Link href="/contact" className="text-white nav-link">Contact</Link>
              </div>
            </div>
            
            <div>
              <Text tag="h4" className="heading-sm text-white mb-4">Contact</Text>
              <div className="flex-col gap-2 text-white">
                <Text tag="p">📧 info@eduaibridge.com</Text>
                <Text tag="p">📧 support@eduaibridge.com</Text>
                <Text tag="p">📞 555-123-4567</Text>
                <Text tag="p">📞 555-987-6543</Text>
              </div>
            </div>
          </div>
          
          <div className="text-center py-4" style={{borderTop: '1px solid rgba(255,255,255,0.2)'}}>
            <Text tag="p" className="text-white">©2024 EduAI Bridge. All Rights Reserved.</Text>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact