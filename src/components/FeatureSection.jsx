import React from 'react'
import { Text, Image, Link } from './index'
import './FeatureSection.css'

function FeatureSection() {
  return (
    <div className="home-e-21">
            <div className="home-e-22"> <Text tag="span" className="home-e-13">
                    <Text tag="span" className="home-e-24">
                        <Text tag="p">Add text in text element</Text>
                    </Text><Text tag="span" className="home-e-25">
                        <Text tag="p">Add text in text element</Text>
                    </Text><Text tag="span" className="home-e-26">
                        <Text tag="p">Add text in text element</Text>
                    </Text><Text tag="span" className="cd-paragraph-clean home-e-27">
                        <Text tag="h2">Header 2</Text>
                    </Text>
                    <div className="home-e-28"> </div>
                </Text><Text tag="span" className="home-e-29">
                    <Text tag="p">Core AI Features </Text>
                </Text><Text tag="span" className="home-e-38">
                    <Text tag="p">EduAI Bridge revolutionizes K-12 education with AI-powered solutions, enhancing teacher capabilities and student outcomes. Government funding compliant and procurement ready. </Text>
                </Text><Text tag="span" className="home-e-31">
                    <Text tag="p">EduAI Bridge revolutionizes education by enhancing teachers with AI, not replacing them. Our LMS improves student outcomes, reduces administrative tasks, and increases engagement, all while ensuring compliance. </Text>
                </Text><button className="home-e-32"><Link href="service" target="_self" className="link">
                        <Text tag="p">See More </Text>
                    </Link> </button></div>
            <div className="home-e-33">
                <div className="home-e-34">
                    <div className="home-e-35"> <Text tag="span" className="home-e-36"> <Image src="assets/template-asset-c2ec2ce9" alt="Image" /> </Text><Text tag="span" className="home-e-37">
                            <Text tag="p">Early Warning </Text>
                        </Text><Text tag="span" className="home-e-30">
                            <Text tag="p">Identify at-risk students with 89% accuracy, enabling proactive interventions and personalized support for improved learning outcomes. </Text>
                        </Text>
                        <div className="home-e-39"> <Link href="About" target="_self" className="link"><Text tag="span" className="home-e-40">
                                    <Text tag="p">Read more</Text>
                                </Text><i className="fas fa-arrow-right home-e-41"></i></Link></div>
                    </div>
                    <div className="home-e-42"> <Text tag="span" className="home-e-44"> <Image src="assets/template-asset-114061ac" alt="Image" /> </Text><Text tag="span" className="home-e-45">
                            <Text tag="p">Content Generation </Text>
                        </Text><Text tag="span" className="home-e-43">
                            <Text tag="p">AI creates lesson plans, assessments, and personalized materials aligned to state standards, saving teachers valuable time. </Text>
                        </Text>
                        <div className="home-e-46"> <Link href="About" target="_self" className="link"><Text tag="span" className="home-e-47">
                                    <Text tag="p">Read more</Text>
                                </Text><i className="fas fa-arrow-right home-e-48"></i></Link></div>
                    </div>
                </div>
                <div className="home-e-49">
                    <div className="home-e-50"> <Text tag="span" className="home-e-52"> <Image src="assets/template-asset-d673a8a6" alt="Image" /> </Text><Text tag="span" className="home-e-53">
                            <Text tag="p">Smart Matching </Text>
                        </Text><Text tag="span" className="home-e-51">
                            <Text tag="p">AI pairs students with ideal instructors based on learning styles and success patterns, optimizing learning. </Text>
                        </Text>
                        <div className="home-e-54"> <Link href="About" target="_self" className="link"><Text tag="span" className="home-e-55">
                                    <Text tag="p">Read more</Text>
                                </Text><i className="fas fa-arrow-right home-e-56"></i></Link></div>
                    </div>
                    <div className="home-e-57"> <Text tag="span" className="home-e-59"> <Image src="assets/template-asset-c751bc3b" alt="Image" /> </Text><Text tag="span" className="home-e-60">
                            <Text tag="p">Live Classes </Text>
                        </Text><Text tag="span" className="home-e-58">
                            <Text tag="p">Integrated video conferencing with real-time AI teaching assistants, enhancing engagement and providing personalized support. </Text>
                        </Text>
                        <div className="home-e-61"> <Link href="About" target="_self" className="link"><Text tag="span" className="home-e-62">
                                    <Text tag="p">Read more</Text>
                                </Text><i className="fas fa-arrow-right home-e-63"></i></Link></div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FeatureSection