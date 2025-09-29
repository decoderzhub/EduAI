import React from 'react'
import { Text, Image, Link } from './index'
import './ServicesGridSection.css'

function ServicesGridSection() {
  return (
    <div className="home-e-64"> <Text tag="span" className="home-e-76"> <Image src="assets/template-asset-e76c5d49" alt="Image" /> </Text>
            <div className="home-e-65"> <Text tag="span" className="home-e-66">
                    <Text tag="p">Our Services </Text>
                </Text><Text tag="span" className="home-e-72">
                    <Text tag="p">Comprehensive Educational Solutions for Success </Text>
                </Text><Text tag="span" className="home-e-75">
                    <Text tag="p">EduAI Bridge offers a comprehensive suite of services designed to enhance K-12 education. From AI-driven learning to government funding compliance, we support educational institutions. </Text>
                </Text><Text tag="span" className="home-e-73">
                    <Text tag="p">We provide tailored solutions for school districts, charter schools, after-school programs, and tutoring centers. Our services ensure compliance and maximize the impact of government education funding. </Text>
                </Text><button className="home-e-74"><Link href="About" target="_self" className="link">
                        <Text tag="p">View More </Text>
                    </Link> </button></div>
        </div>
  )
}

export default ServicesGridSection