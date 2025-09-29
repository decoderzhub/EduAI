import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import './Contact.css'

function Contact() {
  useEffect(() => {
    // Component-specific initialization can go here
    console.log('Contact component mounted');
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-e-1">
        <div className="contact-e-116">
            <div className="contact-e-117">
                <div className="contact-e-128"> <Text tag="span" className="contact-e-129"> <Image src="/assets/asset-81133393.svg" alt="Image" /> </Text><Text tag="span" className="contact-e-130">
                        <Text tag="p">EduAI Bridge </Text>
                    </Text></div>
                <div className="contact-e-119">
                    <div className="contact-e-126"> <i className="far fa-window-close contact-e-127"></i></div>
                    <div className="contact-e-120"> <Text tag="span" className="contact-e-121"><Link href="/" target="_self" className="link">
                                <Text tag="p">HOME</Text>
                            </Link></Text><Text tag="span" className="contact-e-122"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="contact-e-124"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="contact-e-123"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div>
                </div><i className="fas fa-bars contact-e-118"></i>
            </div>
        </div>
        <div className="contact-e-11">
            <div className="contact-e-12"> <Text tag="span" className="contact-e-13">
                    <Text tag="p">CONTACT</Text>
                </Text></div>
        </div>
    </div>
    <div className="contact-e-14">
        <div className="contact-e-16">
            <div className="contact-e-17"> <Text tag="span" className="contact-e-41">
                    <Text tag="p">GET IN TOUCH</Text>
                    <div className="contact-e-46"> </div>
                </Text><Text tag="span" className="contact-e-47">
                    <Text tag="p"><strong>Contact Us Now</strong></Text>
                </Text>
                <div className="contact-e-18">
                    <div className="contact-e-19" data-component-type="form-component-v1" data-clientid="contact-e-19">
                        <div className="contact-e-20" data-clientid="contact-e-20">
                            <div className="contact-e-21" data-clientid="contact-e-21">
                                <div className="contact-e-22" data-clientid="contact-e-22">
                                    <div className="contact-e-31" data-clientid="contact-e-31">
                                        <div className="contact-e-32" data-clientid="contact-e-32">
                                            <label htmlFor="firstName">First Name</label>
                                            <input id="firstName" className="contact-e-33" data-clientid="contact-e-33" type="text" placeholder="Enter your first name" required />
                                        </div>
                                        <div className="contact-e-34" data-clientid="contact-e-34">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input id="lastName" className="contact-e-35" data-clientid="contact-e-35" type="text" placeholder="Enter your last name" required />
                                        </div>
                                    </div>
                                    <div className="contact-e-36" data-clientid="contact-e-36">
                                        <div className="contact-e-37" data-clientid="contact-e-37">
                                            <label htmlFor="email">Email</label>
                                            <input id="email" className="contact-e-38" data-clientid="contact-e-38" type="email" placeholder="Enter your email address" required />
                                        </div>
                                        <div className="contact-e-39" data-clientid="contact-e-39">
                                            <label htmlFor="phone">Phone</label>
                                            <input id="phone" className="contact-e-40" data-clientid="contact-e-40" type="tel" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    <div className="contact-e-26" data-clientid="contact-e-26">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" className="contact-e-27" data-clientid="contact-e-27" placeholder="Enter your message" rows="5" required></textarea>
                                        <input 
                                            type="checkbox" 
                                            id="policy-agreement" 
                                            className="contact-e-29" 
                                            data-clientid="contact-e-29" 
                                            required 
                                        />
                                    <div className="contact-e-28" data-clientid="contact-e-28"> <input className="contact-e-29" data-clientid="contact-e-29" /><Text tag="span" className="cd-paragraph-clean contact-e-30" data-clientid="contact-e-30">
                                            <Text tag="p">You agree to our friendly policy</Text>
                                        </Text></div>
                                    <div className="contact-e-23" data-clientid="contact-e-23">
                                        <div className="contact-e-24" data-clientid="contact-e-24"> <Text tag="span" className="contact-e-25" data-clientid="contact-e-25">
                                                <Text tag="p">Submit Form</Text>
                                            </Text></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><Text tag="span" className="contact-e-48"> <Image src="/assets/asset-78e81b68.svg" alt="Image" /> </Text>
        </div>
        <div className="contact-e-15">
            <div className="contact-e-49">
                <div className="contact-e-50"> <i className="fas fa-mail-bulk contact-e-51"><Text tag="span" className="contact-e-52">
                        </Text></i>
                    <div className="contact-e-54"> <Text tag="span" className="contact-e-55">
                            <Text tag="p">Email</Text>
                        </Text><Text tag="span" className="contact-e-56">
                            <Text tag="p">help@website.com</Text>
                        </Text></div>
                </div>
                <div className="contact-e-64"> <i className="fas fa-mail-bulk contact-e-65"><Text tag="span" className="contact-e-66">
                        </Text></i>
                    <div className="contact-e-68"> <Text tag="span" className="contact-e-69">
                            <Text tag="p">Location</Text>
                        </Text><Text tag="span" className="contact-e-70">
                            <Text tag="p">69 Queen St, Melbourne</Text>
                        </Text></div>
                </div>
                <div className="contact-e-57"> <i className="fas fa-mail-bulk contact-e-58"><Text tag="span" className="contact-e-59">
                        </Text></i>
                    <div className="contact-e-61"> <Text tag="span" className="contact-e-62">
                            <Text tag="p">Phone</Text>
                        </Text><Text tag="span" className="contact-e-63">
                            <Text tag="p">+7 (928)-123-45-45</Text>
                        </Text></div>
                </div>
            </div>
        </div>
    </div>
    <div className="contact-e-2">
        <div className="contact-e-3"> <i className="far fa-window-close contact-e-10"></i><Text tag="span" className="contact-e-4">
                <Text tag="p"><strong>Where can i reach you</strong></Text>
            </Text><Text tag="span" className="contact-e-9">
                <Text tag="p">Enter your email address below to receive your appointment (and reminders before we begin)</Text>
            </Text>
            <div className="contact-e-5" data-component-type="form-component-v1" data-clientid="contact-e-5">
                <div className="contact-e-7" data-clientid="contact-e-7"> <input className="contact-e-6" data-clientid="contact-e-6" /></div><button className="contact-e-8" data-clientid="contact-e-8">
                    <Text tag="p">LETS TALK</Text>
                </button>
            </div>
        </div>
    </div>
    <div className="contact-e-71">
        <div className="contact-e-72">
            <div className="contact-e-73">
                <div className="contact-e-74">
                    <div className="contact-e-113"> <Text tag="span" className="contact-e-114"> <Image src="/assets/asset-81133393.svg" alt="Image" /> </Text><Text tag="span" className="contact-e-115">
                            <Text tag="p">EduAI Bridge </Text>
                        </Text></div>
                    <div className="contact-e-75"> <Text tag="span" className="contact-e-103">
                            <Text tag="p">EduAI Bridge enhances learning with AI, addressing teacher shortages and improving student outcomes. </Text>
                        </Text></div>
                </div>
                <div className="contact-e-76"> <Text tag="span" className="contact-e-80">
                        <Text tag="p">QUICK LINKS</Text>
                    </Text>
                    <div className="contact-e-77"> <Text tag="span" className="contact-e-78"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="contact-e-79"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="contact-e-84"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div>
                </div>
                <div className="contact-e-81"> <Text tag="span" className="contact-e-82">
                        <Text tag="p">CONTACT</Text>
                    </Text>
                    <div className="contact-e-85">
                        <div className="contact-e-86">
                            <div className="contact-e-87"> <i className="fas fa-map-marker-alt contact-e-88"></i></div>
                            <div className="contact-e-89"> <Text tag="span" className="contact-e-90">
                                    <Text tag="p">Address Not Provided </Text>
                                </Text></div>
                        </div>
                        <div className="contact-e-97">
                            <div className="contact-e-98"> <i className="fas fa-phone-alt contact-e-99"></i></div>
                            <div className="contact-e-100"> <Text tag="span" className="contact-e-101">
                                    <Text tag="p">555-123-4567 </Text>
                                </Text><Text tag="span" className="contact-e-102">
                                    <Text tag="p">555-987-6543 </Text>
                                </Text></div>
                        </div>
                        <div className="contact-e-91">
                            <div className="contact-e-92"> <i className="fas fa-map-marker-alt contact-e-93"></i></div>
                            <div className="contact-e-94"> <Text tag="span" className="contact-e-95">
                                    <Text tag="p">info@eduaibridge.com </Text>
                                </Text><Text tag="span" className="contact-e-96">
                                    <Text tag="p">support@eduaibridge.com </Text>
                                </Text></div>
                        </div>
                        <div className="contact-e-104">
                            <div className="contact-e-105"> <i className="fab fa-facebook-f contact-e-106"></i></div>
                            <div className="contact-e-111"> <i className="fab fa-instagram contact-e-112"></i></div>
                            <div className="contact-e-109"> <i className="fab fa-youtube contact-e-110"></i></div>
                            <div className="contact-e-107"> <i className="fab fa-linkedin-in contact-e-108"></i></div>
                        </div>
                    </div>
                </div>
            </div><Text tag="span" className="contact-e-83">
                <Text tag="p">©2066 . All Rights Reserved.</Text>
            </Text>
        </div>
    </div>
    
    
    
    





    </div>
  )
}

export default Contact