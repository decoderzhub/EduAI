import React from 'react'
import { Text, Image, Link } from './index'
import './BlogSection.css'

function BlogSection() {
  return (
    <div className="home-e-216">
        <div className="home-e-217">
            <div className="home-e-228">
                <div className="home-e-229">
                    <div className="home-e-230"> <Text tag="span" className="home-e-231"> <Image src="assets/photo-1697577418970-95d99b5a55cf.jpeg" alt="Image" /> </Text>
                        <div className="home-e-234"> <Text tag="span" className="home-e-232">
                                <Text tag="p">AI and Personalized Learning </Text>
                            </Text>
                            <div className="home-e-235"> <i className="fas fa-book home-e-237"></i><Text tag="span" className="home-e-236">
                                    <Text tag="p">25 October 2024 | by admin</Text>
                                </Text></div>
                        </div>
                    </div>
                    <div className="home-e-238"> <Text tag="span" className="home-e-239"> <Image src="assets/photo-1593510987760-2d895bc8109d.jpeg" alt="Image" /> </Text>
                        <div className="home-e-240"> <Text tag="span" className="home-e-241">
                                <Text tag="p">Funding Education with AI </Text>
                            </Text>
                            <div className="home-e-242"> <i className="fas fa-book home-e-244"></i><Text tag="span" className="home-e-243">
                                    <Text tag="p">25 October 2024 | by admin</Text>
                                </Text></div>
                        </div>
                    </div>
                </div>
                <div className="home-e-233">
                    <div className="home-e-245"> <Text tag="span" className="home-e-246"> <Image src="assets/photo-1580894732444-8ecded7900cd.jpeg" alt="Image" /> </Text>
                        <div className="home-e-247"> <Text tag="span" className="home-e-248">
                                <Text tag="p">Teacher Augmentation Strategies </Text>
                            </Text>
                            <div className="home-e-249"> <i className="fas fa-book home-e-251"></i><Text tag="span" className="home-e-250">
                                    <Text tag="p">25 October 2024 | by admin</Text>
                                </Text></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-e-218"> <Text tag="span" className="home-e-219">
                    <Text tag="p">Latest Insights </Text>
                </Text><Text tag="span" className="home-e-225">
                    <Text tag="p">Explore Our Blog </Text>
                </Text><Text tag="span" className="home-e-227">
                    <Text tag="p">Stay informed with our blog, offering insights into AI in education, government funding, and best practices for K-12 learning. Discover innovative strategies and expert advice to enhance educational outcomes. </Text>
                </Text><button className="home-e-226"><Link href="About" target="_self" className="link">
                        <Text tag="p">Read More </Text>
                    </Link> </button></div>
        </div>
    </div>
  )
}

export default BlogSection