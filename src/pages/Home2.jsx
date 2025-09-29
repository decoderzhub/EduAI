import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import AboutSection from '../components/AboutSection'
import FeatureSection from '../components/FeatureSection'
import HighlightedFeatureSection from '../components/HighlightedFeatureSection'
import ProductShowcaseSection from '../components/ProductShowcaseSection'
import BenefitsSection from '../components/BenefitsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactFormSection from '../components/ContactFormSection'
import HeroSection from '../components/HeroSection'
import Sectionblock from '../components/Sectionblock'
import './Home2.css'

function Home2() {
  useEffect(() => {
    // Component-specific initialization can go here
    console.log('Home2 component mounted');
  }, []);

  return (
    <div className="home2-container">
      <HeroSection />
    <div className="home2-e-8"> </div>
    <AboutSection />
    <FeatureSection />
    <HighlightedFeatureSection />
    <ProductShowcaseSection />
    <BenefitsSection />
    <TestimonialsSection />
    <ContactFormSection />
    <div className="home2-e-1">
        <div className="home2-e-2"> <i className="far fa-window-close home2-e-10"></i><Text tag="span" className="home2-e-3">
                <Text tag="p"><strong>Where can i reach you</strong></Text>
            </Text><Text tag="span" className="home2-e-9">
                <Text tag="p">Enter your email address below to receive your appointment (and reminders before we begin)</Text>
            </Text>
            <div className="home2-e-4" data-component-type="form-component-v1" data-clientid="home2-e-4">
                <div className="home2-e-6" data-clientid="home2-e-6"> <input className="home2-e-5" data-clientid="home2-e-5" /></div><button className="home2-e-7" data-clientid="home2-e-7">
                    <Text tag="p">LETS TALK</Text>
                </button>
            </div>
        </div>
    </div>
    <div className="home2-e-264">
        <div className="home2-e-265">
            <div className="home2-e-266">
                <div className="home2-e-267">
                    <div className="home2-e-306"> <Text tag="span" className="home2-e-307"> <Image src="/assets/asset-81133393.svg" alt="EduAI Bridge Logo" /> </Text><Text tag="span" className="home2-e-308">
                            <Text tag="p">EduAI Bridge </Text>
                        </Text></div>
                    <div className="home2-e-268"> <Text tag="span" className="home2-e-269">
                            <Text tag="p">EduAI Bridge revolutionizes K-12 education with AI-enhanced learning, addressing teacher shortages and improving student outcomes. </Text>
                        </Text></div>
                </div>
                <div className="home2-e-270"> <Text tag="span" className="home2-e-275">
                        <Text tag="p">QUICK LINKS</Text>
                    </Text>
                    <div className="home2-e-271"> <Text tag="span" className="home2-e-272"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="home2-e-273"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="home2-e-274"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div>
                </div>
                <div className="home2-e-276"> <Text tag="span" className="home2-e-277">
                        <Text tag="p">COURSES</Text>
                    </Text>
                    <div className="home2-e-278">
                        <div className="home2-e-279">
                            <div className="home2-e-280"> <i className="fas fa-map-marker-alt home2-e-281"></i></div>
                            <div className="home2-e-282"> <Text tag="span" className="home2-e-283">
                                    <Text tag="p">Not provided </Text>
                                </Text></div>
                        </div>
                        <div className="home2-e-290">
                            <div className="home2-e-291"> <i className="fas fa-phone-alt home2-e-292"></i></div>
                            <div className="home2-e-293"> <Text tag="span" className="home2-e-294">
                                    <Text tag="p">Not provided </Text>
                                </Text><Text tag="span" className="home2-e-295">
                                    <Text tag="p">Not provided </Text>
                                </Text></div>
                        </div>
                        <div className="home2-e-284">
                            <div className="home2-e-285"> <i className="fas fa-map-marker-alt home2-e-286"></i></div>
                            <div className="home2-e-287"> <Text tag="span" className="home2-e-288">
                                    <Text tag="p">Not provided </Text>
                                </Text><Text tag="span" className="home2-e-289">
                                    <Text tag="p">Not provided </Text>
                                </Text></div>
                        </div>
                        <div className="home2-e-296">
                            <div className="home2-e-297"> <i className="fab fa-facebook-f home2-e-298"></i></div>
                            <div className="home2-e-303"> <i className="fab fa-instagram home2-e-304"></i></div>
                            <div className="home2-e-301"> <i className="fab fa-youtube home2-e-302"></i></div>
                            <div className="home2-e-299"> <i className="fab fa-linkedin-in home2-e-300"></i></div>
                        </div>
                    </div>
                </div>
            </div><Text tag="span" className="home2-e-305">
                <Text tag="p">©2066 . All Rights Reserved.</Text>
            </Text>
        </div>
    </div>
    
    
    
    





    </div>
  )
}

export default Home2