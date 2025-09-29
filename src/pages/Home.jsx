import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import ServicesGridSection from '../components/ServicesGridSection'
import ProductShowcaseSection from '../components/ProductShowcaseSection'
import HighlightedFeatureSection from '../components/HighlightedFeatureSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'
import ContactFormSection from '../components/ContactFormSection'
import AIIntegration from '../components/AIIntegration'
import LiveClassroom from '../components/LiveClassroom'
import './Home.css'

function Home() {
  useEffect(() => {
    // Component-specific initialization can go here
    console.log('Home component mounted');
  }, []);

  return (
    <div className="home-container">
      <HeroSection />
    <div className="home-e-20">
        <FeatureSection />
        <ServicesGridSection />
    </div>
    <AIIntegration />
    <ProductShowcaseSection />
    <HighlightedFeatureSection />
    <LiveClassroom />
    <TestimonialsSection />
    <BlogSection />
    <ContactFormSection />
    <div className="home-e-2">
        <div className="home-e-3"> <i className="far fa-window-close home-e-10"></i><Text tag="span" className="home-e-4">
                <Text tag="p"><strong>Where can i reach you</strong></Text>
            </Text><Text tag="span" className="home-e-9">
                <Text tag="p">Enter your email address below to receive your appointment (and reminders before we begin)</Text>
            </Text>
            <div className="home-e-5" data-component-type="form-component-v1" data-clientid="home-e-5">
                <div className="home-e-7" data-clientid="home-e-7"> <input className="home-e-6" data-clientid="home-e-6" /></div><button className="home-e-8" data-clientid="home-e-8">
                    <Text tag="p">LETS TALK</Text>
                </button>
            </div>
            <button className="contact-us-button">
                <Link href="/contact" target="_self" className="link">
                    <Text tag="p">CONTACT US</Text>
                </Link>
            </button>
            </div>
        </div>
    <div className="home-e-299">
        <div className="home-e-300">
            <div className="home-e-301">
                <div className="home-e-302">
                    <div className="home-e-341"> <Text tag="span" className="home-e-342"> <Image src="/assets/asset-81133393.svg" alt="EduAI Bridge Logo" /> </Text><Text tag="span" className="home-e-343">
                            <Text tag="p">EduAI Bridge </Text>
                        </Text></div>
                    <div className="home-e-303"> <Text tag="span" className="home-e-331">
                            <Text tag="p">EduAI Bridge enhances learning with AI, addressing teacher shortages and improving student outcomes. </Text>
                        </Text></div>
                </div>
                <div className="home-e-304"> <Text tag="span" className="home-e-308">
                        <Text tag="p">QUICK LINKS</Text>
                    </Text>
                    <div className="home-e-305"> <Text tag="span" className="home-e-306"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="home-e-307"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="home-e-312"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div>
                </div>
                <div className="home-e-309"> <Text tag="span" className="home-e-310">
                        <Text tag="p">CONTACT</Text>
                    </Text>
                    <div className="home-e-313">
                        <div className="home-e-314">
                            <div className="home-e-315"> <i className="fas fa-map-marker-alt home-e-316"></i></div>
                            <div className="home-e-317"> <Text tag="span" className="home-e-318">
                                    <Text tag="p">Address Not Provided </Text>
                                </Text></div>
                        </div>
                        <div className="home-e-325">
                            <div className="home-e-326"> <i className="fas fa-phone-alt home-e-327"></i></div>
                            <div className="home-e-328"> <Text tag="span" className="home-e-329">
                                    <Text tag="p">555-123-4567 </Text>
                                </Text><Text tag="span" className="home-e-330">
                                    <Text tag="p">555-987-6543 </Text>
                                </Text></div>
                        </div>
                        <div className="home-e-319">
                            <div className="home-e-320"> <i className="fas fa-map-marker-alt home-e-321"></i></div>
                            <div className="home-e-322"> <Text tag="span" className="home-e-323">
                                    <Text tag="p">info@eduaibridge.com </Text>
                                </Text><Text tag="span" className="home-e-324">
                                    <Text tag="p">support@eduaibridge.com </Text>
                                </Text></div>
                        </div>
                        <div className="home-e-332">
                            <div className="home-e-333"> <i className="fab fa-facebook-f home-e-334"></i></div>
                            <div className="home-e-339"> <i className="fab fa-instagram home-e-340"></i></div>
                            <div className="home-e-337"> <i className="fab fa-youtube home-e-338"></i></div>
                            <div className="home-e-335"> <i className="fab fa-linkedin-in home-e-336"></i></div>
                        </div>
                    </div>
                </div>
            </div><Text tag="span" className="home-e-311">
                <Text tag="p">©2066 . All Rights Reserved.</Text>
            </Text>
        </div>
    </div>
    
    
    
    





    </div>
  )
}

export default Home