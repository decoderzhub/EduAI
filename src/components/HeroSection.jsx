import React from 'react'
import { Text, Image, Link } from './index'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className="home-e-1">
      <div className="home-e-283">
        <div className="home-e-284">
          <div className="home-e-285">
            <div className="home-e-296">
              <Text tag="span" className="home-e-297">
                <Image src="assets/asset-81133393" alt="Image" />
              </Text>
              <Text tag="span" className="home-e-298">
                <Text tag="p">EduAI Bridge </Text>
              </Text>
            </div>
            <i className="fas fa-bars home-e-293"></i>
            <div className="home-e-286">
              <div className="home-e-294">
                <i className="far fa-window-close home-e-295"></i>
              </div>
              <div className="home-e-287">
                <Text tag="span" className="home-e-288">
                  <Link href="home" target="_self" className="link">
                    <Text tag="p">HOME</Text>
                  </Link>
                </Text>
                <Text tag="span" className="home-e-289">
                  <Link href="About" target="_self" className="link">
                    <Text tag="p">ABOUT</Text>
                  </Link>
                </Text>
                <Text tag="span" className="home-e-291">
                  <Link href="service" target="_self" className="link">
                    <Text tag="p">SERVICE</Text>
                  </Link>
                </Text>
                <Text tag="span" className="home-e-290">
                  <Link href="contact" target="_self" className="link">
                    <Text tag="p">CONTACT</Text>
                  </Link>
                </Text>
              </div>
              <button className="home-e-292">
                <Link href="contact" target="_self" className="link">
                  <Text tag="p">CONTACT US</Text>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-e-11">
        <div className="home-e-14">
          <Text tag="span" className="home-e-15">
            <Image src="/assets/template-asset-5cc2b48f" alt="Image" />
          </Text>
          <Text tag="span" className="home-e-12">
            <Text tag="p">
              Empowering Education with AI-Driven Learning
            </Text>
          </Text>
          <Text tag="span" className="home-e-23">
            <Text tag="p">
              Revolutionizing K-12 education with AI-powered solutions,
              enhancing teacher capabilities and student outcomes. Government
              funding compliant and procurement ready.
            </Text>
          </Text>
          <div className="home-e-16">
            <button className="home-e-17">
              <Link href="About" target="_self" className="link">
                <Text tag="p">Get Started </Text>
              </Link>
            </button>
            <button className="home-e-18">
              <Link href="contact" target="_self" className="link">
                <Text tag="p">Learn More </Text>
              </Link>
            </button>
          </div>
        </div>
        <Text tag="span" className="home-e-19">
          <Image src="/assets/template-asset-711551c0" alt="Image" />
        </Text>
      </div>
    </div>
  )
}

export default HeroSection