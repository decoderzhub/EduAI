import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import './Page404.css'

function Page404() {
  useEffect(() => {
    // Component-specific initialization can go here
    console.log('Page404 component mounted');
  }, []);

  return (
    <div className="404-container">
      <div className="page-404-e-6">
        <div className="page-404-e-52">
            <div className="page-404-e-53">
                <div className="page-404-e-64"> <Text tag="span" className="page-404-e-65"> <Image src="/assets/asset-81133393" alt="Image" /> </Text><Text tag="span" className="page-404-e-66">
                        <Text tag="p">EduAI Bridge </Text>
                    </Text></div>
                <div className="page-404-e-55">
                    <div className="page-404-e-62"> <i className="far fa-window-close page-404-e-63"></i></div>
                    <div className="page-404-e-56"> <Text tag="span" className="page-404-e-57"><Link href="home2" target="_self" className="link">
                                <Text tag="p">HOME</Text>
                            </Link></Text><Text tag="span" className="page-404-e-58"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="page-404-e-60"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="page-404-e-59"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div><button className="page-404-e-61"><Link href="Contact" target="_self" className="link">
                            <Text tag="p">CONTACT US</Text>
                        </Link></button>
                </div><i className="fas fa-bars page-404-e-54"></i>
            </div>
        </div>
    </div>
    <div className="page-404-e-1"> <Text tag="span" className="page-404-e-2">
            <Text tag="p">ERROR 404</Text>
        </Text><Text tag="span" className="page-404-e-3">
            <Text tag="p">Oops! Page not found.</Text>
        </Text><Text tag="span" className="page-404-e-4">
            <Text tag="p">Looks like the page you are looking for doesn’t exist.</Text>
        </Text><button className="page-404-e-5"><Link href="home" target="_self" className="link">
                <Text tag="p">Back to HomePage</Text>
            </Link></button></div>
    <div className="page-404-e-7">
        <div className="page-404-e-8">
            <div className="page-404-e-9">
                <div className="page-404-e-10">
                    <div className="page-404-e-49"> <Text tag="span" className="page-404-e-50"> <Image src="/assets/asset-81133393" alt="Image" /> </Text><Text tag="span" className="page-404-e-51">
                            <Text tag="p">EduAI Bridge </Text>
                        </Text></div>
                    <div className="page-404-e-11"> <Text tag="span" className="page-404-e-39">
                            <Text tag="p">EduAI Bridge enhances learning with AI, addressing teacher shortages and improving student outcomes. </Text>
                        </Text></div>
                </div>
                <div className="page-404-e-12"> <Text tag="span" className="page-404-e-16">
                        <Text tag="p">QUICK LINKS</Text>
                    </Text>
                    <div className="page-404-e-13"> <Text tag="span" className="page-404-e-14"><Link href="About" target="_self" className="link">
                                <Text tag="p">ABOUT</Text>
                            </Link></Text><Text tag="span" className="page-404-e-15"><Link href="service" target="_self" className="link">
                                <Text tag="p">SERVICE</Text>
                            </Link></Text><Text tag="span" className="page-404-e-20"><Link href="contact" target="_self" className="link">
                                <Text tag="p">CONTACT</Text>
                            </Link></Text></div>
                </div>
                <div className="page-404-e-17"> <Text tag="span" className="page-404-e-18">
                        <Text tag="p">CONTACT</Text>
                    </Text>
                    <div className="page-404-e-21">
                        <div className="page-404-e-22">
                            <div className="page-404-e-23"> <i className="fas fa-map-marker-alt page-404-e-24"></i></div>
                            <div className="page-404-e-25"> <Text tag="span" className="page-404-e-26">
                                    <Text tag="p">Address Not Provided </Text>
                                </Text></div>
                        </div>
                        <div className="page-404-e-33">
                            <div className="page-404-e-34"> <i className="fas fa-phone-alt page-404-e-35"></i></div>
                            <div className="page-404-e-36"> <Text tag="span" className="page-404-e-37">
                                    <Text tag="p">555-123-4567 </Text>
                                </Text><Text tag="span" className="page-404-e-38">
                                    <Text tag="p">555-987-6543 </Text>
                                </Text></div>
                        </div>
                        <div className="page-404-e-27">
                            <div className="page-404-e-28"> <i className="fas fa-map-marker-alt page-404-e-29"></i></div>
                            <div className="page-404-e-30"> <Text tag="span" className="page-404-e-31">
                                    <Text tag="p">info@eduaibridge.com </Text>
                                </Text><Text tag="span" className="page-404-e-32">
                                    <Text tag="p">support@eduaibridge.com </Text>
                                </Text></div>
                        </div>
                        <div className="page-404-e-40">
                            <div className="page-404-e-41"> <i className="fab fa-facebook-f page-404-e-42"></i></div>
                            <div className="page-404-e-47"> <i className="fab fa-instagram page-404-e-48"></i></div>
                            <div className="page-404-e-45"> <i className="fab fa-youtube page-404-e-46"></i></div>
                            <div className="page-404-e-43"> <i className="fab fa-linkedin-in page-404-e-44"></i></div>
                        </div>
                    </div>
                </div>
            </div><Text tag="span" className="page-404-e-19">
                <Text tag="p">©2066 . All Rights Reserved.</Text>
            </Text>
        </div>
    </div>
    
    
    





    </div>
  )
}

export default Page404