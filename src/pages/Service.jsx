import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import ServicesGridSection from '../components/ServicesGridSection'
import AboutSection from '../components/AboutSection'
import './Service.css'

function Service() {
  useEffect(() => {
    // Component-specific initialization can go here
    console.log('Service component mounted');
  }, []);

  return (
    <div className="service-container">
      <div className="service-e-1">
        <div className="service-e-101">
            <div className="service-e-102">
                <div className="service-e-113"> <Text tag="span" className="service-e-114"> <Image src="/assets/asset-81133393" alt="Image" /> </Text><Text tag="span" className="service-e-115">
                        <Text tag="p">EduAI Bridge </Text>
                    </Text></div>
                <div className="service-e-104">
                    <div className="service-e-111"> <i className="far fa-window-close service-e-112"></i></div>
                    <div className="service-e-105"> <Text tag="span" className="service-e-106"><Link href="home2" target="_self" className="link">
                                <Text tag="p">HOME</Text>
                            </Link></Text><Text tag="span" className="service-e-107"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="service-e-109"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="service-e-108"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div><button className="service-e-110"><Link href="contact" target="_self" className="link">
                            <Text tag="p">CONTACT US</Text>
                        </Link></button>
                </div><i className="fas fa-bars service-e-103"></i>
            </div>
        </div>
        <div className="service-e-11">
            <div className="service-e-12"> <Text tag="span" className="service-e-13">
                    <Text tag="p">SERVICE</Text>
                </Text></div>
        </div>
    </div>
    <ServicesGridSection />
    <div className="service-e-2">
        <div className="service-e-3"> <i className="far fa-window-close service-e-10"></i><Text tag="span" className="service-e-4">
                <Text tag="p"><strong>Where can i reach you</strong></Text>
            </Text><Text tag="span" className="service-e-9">
                <Text tag="p">Enter your email address below to receive your appointment (and reminders before we begin)</Text>
            </Text>
            <div className="service-e-5" data-component-type="form-component-v1" data-clientid="service-e-5">
                <div className="service-e-7" data-clientid="service-e-7"> <input className="service-e-6" data-clientid="service-e-6" /></div><button className="service-e-8" data-clientid="service-e-8">
                    <Text tag="p">LETS TALK</Text>
                </button>
            </div>
        </div>
    </div>
    <div className="service-e-56">
        <div className="service-e-57">
            <div className="service-e-58">
                <div className="service-e-59">
                    <div className="service-e-98"> <Text tag="span" className="service-e-99"> <Image src="/assets/asset-81133393.svg" alt="EduAI Bridge Logo" /> </Text><Text tag="span" className="service-e-100">
                            <Text tag="p">EduAI Bridge </Text>
                        </Text></div>
                    <div className="service-e-60"> <Text tag="span" className="service-e-88">
                            <Text tag="p">EduAI Bridge enhances learning with AI, addressing teacher shortages and improving student outcomes. </Text>
                        </Text></div>
                </div>
                <div className="service-e-61"> <Text tag="span" className="service-e-65">
                        <Text tag="p">QUICK LINKS</Text>
                    </Text>
                    <div className="service-e-62"> <Text tag="span" className="service-e-63"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="service-e-64"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="service-e-69"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div>
                </div>
                <div className="service-e-66"> <Text tag="span" className="service-e-67">
                        <Text tag="p">CONTACT</Text>
                    </Text>
                    <div className="service-e-70">
                        <div className="service-e-71">
                            <div className="service-e-72"> <i className="fas fa-map-marker-alt service-e-73"></i></div>
                            <div className="service-e-74"> <Text tag="span" className="service-e-75">
                                    <Text tag="p">Address Not Provided </Text>
                                </Text></div>
                        </div>
                        <div className="service-e-82">
                            <div className="service-e-83"> <i className="fas fa-phone-alt service-e-84"></i></div>
                            <div className="service-e-85"> <Text tag="span" className="service-e-86">
                                    <Text tag="p">555-123-4567 </Text>
                                </Text><Text tag="span" className="service-e-87">
                                    <Text tag="p">555-987-6543 </Text>
                                </Text></div>
                        </div>
                        <div className="service-e-76">
                            <div className="service-e-77"> <i className="fas fa-map-marker-alt service-e-78"></i></div>
                            <div className="service-e-79"> <Text tag="span" className="service-e-80">
                                    <Text tag="p">info@eduaibridge.com </Text>
                                </Text><Text tag="span" className="service-e-81">
                                    <Text tag="p">support@eduaibridge.com </Text>
                                </Text></div>
                        </div>
                        <div className="service-e-89">
                            <div className="service-e-90"> <i className="fab fa-facebook-f service-e-91"></i></div>
                            <div className="service-e-96"> <i className="fab fa-instagram service-e-97"></i></div>
                            <div className="service-e-94"> <i className="fab fa-youtube service-e-95"></i></div>
                            <div className="service-e-92"> <i className="fab fa-linkedin-in service-e-93"></i></div>
                        </div>
                    </div>
                </div>
            </div><Text tag="span" className="service-e-68">
                <Text tag="p">©2066 . All Rights Reserved.</Text>
            </Text>
        </div>
    </div>
    
    
    
    





    </div>
  )
}

export default Service