import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProductShowcaseSection from '../components/ProductShowcaseSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactFormSection from '../components/ContactFormSection'
import './Home3.css'

function Home3() {
  useEffect(() => {
    // Component-specific initialization can go here
    console.log('Home3 component mounted');
  }, []);

  return (
    <div className="home3-container">
      <HeroSection />
    <ProductShowcaseSection />
    <AboutSection />
    <TestimonialsSection />
    <ContactFormSection />
    <div className="home3-e-2">
        <div className="home3-e-3"> <i className="far fa-window-close home3-e-10"></i><Text tag="span" className="home3-e-4">
                <Text tag="p"><strong>Where can i reach you</strong></Text>
            </Text><Text tag="span" className="home3-e-9">
                <Text tag="p">Enter your email address below to receive your appointment (and reminders before we begin)</Text>
            </Text>
            <div className="home3-e-5" data-component-type="form-component-v1" data-clientid="home3-e-5">
                <div className="home3-e-7" data-clientid="home3-e-7"> <input className="home3-e-6" data-clientid="home3-e-6" /></div><button className="home3-e-8" data-clientid="home3-e-8">
                    <Text tag="p">LETS TALK</Text>
                </button>
            </div>
        </div>
    </div>
    <div className="home3-e-170">
        <div className="home3-e-171">
            <div className="home3-e-172">
                <div className="home3-e-173">
                    <div className="home3-e-212"> <Text tag="span" className="home3-e-213"> <Image src="/assets/asset-81133393" alt="Image" /> </Text><Text tag="span" className="home3-e-214">
                            <Text tag="p">EduAI Bridge </Text>
                        </Text></div>
                    <div className="home3-e-174"> <Text tag="span" className="home3-e-175">
                            <Text tag="p">EduAI Bridge revolutionizes K-12 education with AI-enhanced learning, addressing teacher shortages and improving student outcomes. </Text>
                        </Text></div>
                </div>
                <div className="home3-e-176"> <Text tag="span" className="home3-e-181">
                        <Text tag="p">QUICK LINKS</Text>
                    </Text>
                    <div className="home3-e-177"> <Text tag="span" className="home3-e-178"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="home3-e-179"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="home3-e-180"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div>
                </div>
                <div className="home3-e-182"> <Text tag="span" className="home3-e-183">
                        <Text tag="p">COURSES</Text>
                    </Text>
                    <div className="home3-e-184">
                        <div className="home3-e-185">
                            <div className="home3-e-186"> <i className="fas fa-map-marker-alt home3-e-187"></i></div>
                            <div className="home3-e-188"> <Text tag="span" className="home3-e-189">
                                    <Text tag="p">Not provided </Text>
                                </Text></div>
                        </div>
                        <div className="home3-e-196">
                            <div className="home3-e-197"> <i className="fas fa-phone-alt home3-e-198"></i></div>
                            <div className="home3-e-199"> <Text tag="span" className="home3-e-200">
                                    <Text tag="p">Not provided </Text>
                                </Text><Text tag="span" className="home3-e-201">
                                    <Text tag="p">Not provided </Text>
                                </Text></div>
                        </div>
                        <div className="home3-e-190">
                            <div className="home3-e-191"> <i className="fas fa-map-marker-alt home3-e-192"></i></div>
                            <div className="home3-e-193"> <Text tag="span" className="home3-e-194">
                                    <Text tag="p">Not provided </Text>
                                </Text><Text tag="span" className="home3-e-195">
                                    <Text tag="p">Not provided </Text>
                                </Text></div>
                        </div>
                        <div className="home3-e-202">
                            <div className="home3-e-203"> <i className="fab fa-facebook-f home3-e-204"></i></div>
                            <div className="home3-e-209"> <i className="fab fa-instagram home3-e-210"></i></div>
                            <div className="home3-e-207"> <i className="fab fa-youtube home3-e-208"></i></div>
                            <div className="home3-e-205"> <i className="fab fa-linkedin-in home3-e-206"></i></div>
                        </div>
                    </div>
                </div>
            </div><Text tag="span" className="home3-e-211">
                <Text tag="p">©2066 . All Rights Reserved.</Text>
            </Text>
        </div>
    </div>
    
    
    
    





    </div>
  )
}

export default Home3