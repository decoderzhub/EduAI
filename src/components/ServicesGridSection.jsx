import React from 'react'
import { Text, Image, Link } from './index'
import './ServicesGridSection.css'

function ServicesGridSection() {
  return (
    <div className="services-section">
      {/* Services Grid */}
      <div className="services-grid-container">
        <div className="services-grid">
          {/* AI Early Warning System */}
          <div className="service-card">
            <div className="service-icon">
              <div className="icon-wrapper">
                🎯
              </div>
            </div>
            <h3 className="service-title">AI Early Warning System</h3>
            <p className="service-description">
              Identify at-risk students with 89% accuracy using advanced AI algorithms that analyze learning patterns and engagement metrics.
            </p>
          </div>

          {/* Smart Content Generation */}
          <div className="service-card">
            <div className="service-icon">
              <div className="icon-wrapper">
                📝
              </div>
            </div>
            <h3 className="service-title">Smart Content Generation</h3>
            <p className="service-description">
              AI-powered lesson plans, assessments, and personalized materials aligned to state standards, saving teachers 15+ hours weekly.
            </p>
          </div>

          {/* Intelligent Matching */}
          <div className="service-card">
            <div className="service-icon">
              <div className="icon-wrapper">
                🤝
              </div>
            </div>
            <h3 className="service-title">Intelligent Matching</h3>
            <p className="service-description">
              AI pairs students with ideal instructors based on learning styles and success patterns, optimizing educational outcomes.
            </p>
          </div>

          {/* Live AI Classrooms */}
          <div className="service-card">
            <div className="service-icon">
              <div className="icon-wrapper">
                📹
              </div>
            </div>
            <h3 className="service-title">Live AI Classrooms</h3>
            <p className="service-description">
              Integrated video conferencing with real-time AI teaching assistants providing personalized support and engagement monitoring.
            </p>
          </div>

          {/* Government Funding Support */}
          <div className="service-card featured">
            <div className="service-icon">
              <div className="icon-wrapper">
                💰
              </div>
            </div>
            <h3 className="service-title">Government Funding Support</h3>
            <p className="service-description">
              Complete assistance with Title I, ESSA, and state grant applications to maximize your educational technology funding.
            </p>
          </div>

          {/* Analytics & Insights */}
          <div className="service-card">
            <div className="service-icon">
              <div className="icon-wrapper">
                📊
              </div>
            </div>
            <h3 className="service-title">Analytics & Insights</h3>
            <p className="service-description">
              Real-time dashboards and comprehensive reports providing actionable insights to improve student outcomes and teacher effectiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Illustration */}
      <div className="services-bottom-section">
        <div className="services-bottom-container">
          <div className="services-illustration">
            <Image src="/assets/asset-f207e2e0.png" alt="Educational Success Illustration" />
          </div>
          
          <div className="services-content">
            <div className="services-label">AI-POWERED SOLUTIONS</div>
            <h2 className="services-main-title">
              Transform Your District with
              <br />
              Advanced AI Technology
            </h2>
            
            <p className="services-description">
              EduAI Bridge revolutionizes K-12 education by enhancing teacher capabilities with cutting-edge AI technology. Our comprehensive platform addresses critical challenges in modern education through intelligent automation and data-driven insights.
            </p>
            
            <p className="services-description">
              From identifying at-risk students early to generating personalized learning materials, our AI solutions empower educators to focus on what matters most - teaching and inspiring students to achieve their full potential.
            </p>
            
            <Link href="/contact" className="services-cta-button">
              <Text tag="span">Get Started Today</Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesGridSection