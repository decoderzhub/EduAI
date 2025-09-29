import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import AboutSection from '../components/AboutSection'
import './About.css'

function About() {
  useEffect(() => {
    // Component-specific initialization can go here
    console.log('About component mounted');
  }, []);

  return (
    <div className="about-container">
      <div className="About-e-1">
        <div className="About-e-113">
            <div className="About-e-114">
                <div className="About-e-125"> <Text tag="span" className="About-e-126"> <Image src="/assets/asset-81133393.svg" alt="Image" /> </Text><Text tag="span" className="About-e-127">
                        <Text tag="p">EduAI Bridge </Text>
                    </Text></div>
                <div className="About-e-116">
                    <div className="About-e-123"> <i className="far fa-window-close About-e-124"></i></div>
                    <div className="About-e-117"> <Text tag="span" className="About-e-118"><Link href="/" target="_self" className="link">
                                <Text tag="p">HOME</Text>
                            </Link></Text><Text tag="span" className="About-e-119"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="About-e-121"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="About-e-120"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div><button className="About-e-122"><Link href="contact" target="_self" className="link">
                            <Text tag="p">CONTACT US</Text>
                        </Link></button>
                </div><i className="fas fa-bars About-e-115"></i>
            </div>
        </div>
        <div className="About-e-11">
            <div className="About-e-12"> <Text tag="span" className="About-e-13">
                    <Text tag="p">ABOUT US</Text>
                </Text></div>
        </div>
    </div>
    <AboutSection />
    <div className="About-e-2">
        <div className="About-e-3"> <i className="far fa-window-close About-e-10"></i><Text tag="span" className="About-e-4">
                <Text tag="p"><strong>Where can i reach you</strong></Text>
            </Text><Text tag="span" className="About-e-9">
                <Text tag="p">Enter your email address below to receive your appointment (and reminders before we begin)</Text>
            </Text>
            <div className="About-e-5" data-component-type="form-component-v1" data-clientid="About-e-5">
                <div className="About-e-7" data-clientid="About-e-7"> <input className="About-e-6" data-clientid="About-e-6" /></div><button className="About-e-8" data-clientid="About-e-8">
                    <Text tag="p">LETS TALK</Text>
                </button>
            </div>
        </div>
    </div>
    <div className="About-e-68">
        <div className="About-e-69">
            <div className="About-e-70">
                <div className="About-e-71">
                    <div className="About-e-110"> <Text tag="span" className="About-e-111"> <Image src="/assets/asset-81133393" alt="Image" /> </Text><Text tag="span" className="About-e-112">
                    <div className="About-e-110"> <Text tag="span" className="About-e-111"> <Image src="/assets/asset-81133393.svg" alt="Image" /> </Text><Text tag="span" className="About-e-112">
                            <Text tag="p">EduAI Bridge </Text>
                        </Text></div>
                    <div className="About-e-72"> <Text tag="span" className="About-e-100">
                            <Text tag="p">EduAI Bridge enhances learning with AI, addressing teacher shortages and improving student outcomes. </Text>
                        </Text></div>
                </div>
                <div className="About-e-73"> <Text tag="span" className="About-e-77">
                        <Text tag="p">QUICK LINKS</Text>
                    </Text>
                    <div className="About-e-74"> <Text tag="span" className="About-e-75"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="About-e-76"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="About-e-81"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div>
                </div>
                <div className="About-e-78"> <Text tag="span" className="About-e-79">
                        <Text tag="p">CONTACT</Text>
                    </Text>
                    <div className="About-e-82">
                        <div className="About-e-83">
                            <div className="About-e-84"> <i className="fas fa-map-marker-alt About-e-85"></i></div>
                            <div className="About-e-86"> <Text tag="span" className="About-e-87">
                                    <Text tag="p">Address Not Provided </Text>
                                </Text></div>
                        </div>
                        <div className="About-e-94">
                            <div className="About-e-95"> <i className="fas fa-phone-alt About-e-96"></i></div>
                            <div className="About-e-97"> <Text tag="span" className="About-e-98">
                                    <Text tag="p">555-123-4567 </Text>
                                </Text><Text tag="span" className="About-e-99">
                                    <Text tag="p">555-987-6543 </Text>
                                </Text></div>
                        </div>
                        <div className="About-e-88">
                            <div className="About-e-89"> <i className="fas fa-map-marker-alt About-e-90"></i></div>
                            <div className="About-e-91"> <Text tag="span" className="About-e-92">
                                    <Text tag="p">info@eduaibridge.com </Text>
                                </Text><Text tag="span" className="About-e-93">
                                    <Text tag="p">support@eduaibridge.com </Text>
                                </Text></div>
                        </div>
                        <div className="About-e-101">
                            <div className="About-e-102"> <i className="fab fa-facebook-f About-e-103"></i></div>
                            <div className="About-e-108"> <i className="fab fa-instagram About-e-109"></i></div>
                            <div className="About-e-106"> <i className="fab fa-youtube About-e-107"></i></div>
                            <div className="About-e-104"> <i className="fab fa-linkedin-in About-e-105"></i></div>
                        </div>
                    </div>
                </div>
            </div><Text tag="span" className="About-e-80">
                <Text tag="p">©2066 . All Rights Reserved.</Text>
            </Text>
        </div>
    </div>
    
    
    
    





    </div>
  )
}

export default About