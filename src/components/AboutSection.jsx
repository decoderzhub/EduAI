import React from 'react'
import { Text, Image, Link } from './index'
import './AboutSection.css'

function AboutSection() {
  return (
    <div className="about-section-container">
      {/* Main content section */}
      <div className="about-main-content">
        <div className="about-image-section">
          <Image src="/assets/asset-f207e2e0.png" alt="Education team working together" />
        </div>
        
        <div className="about-text-section">
          <div className="about-label">AI-POWERED EDUCATION</div>
          <h2 className="about-title">Revolutionizing K-12 Education with EduAI Bridge</h2>
          
          <p className="about-paragraph">
            EduAI Bridge transforms K-12 education by enhancing teachers with AI technology, not replacing them. Our platform addresses critical challenges in modern education through intelligent automation and personalized learning solutions.
          </p>
          
          <p className="about-paragraph">
            Our AI-driven early warning system identifies at-risk students with 89% accuracy, enabling proactive interventions. Smart content generation saves teachers 15+ hours weekly on lesson planning, while our intelligent matching system optimizes learning outcomes.
          </p>
        </div>
      </div>
      
      {/* Bottom description paragraphs */}
      <div className="about-bottom-text">
        <p>
          <strong>Addressing Teacher Shortages:</strong> With over 300,000 teacher vacancies nationwide, EduAI Bridge provides AI teaching assistants that support educators with real-time classroom insights, automated grading, and personalized student interventions. Our platform enables one teacher to effectively manage larger class sizes while maintaining quality education through intelligent automation and data-driven decision making.
        </p>
        
        <p>
          <strong>Supporting Struggling Students:</strong> Our AI continuously monitors student progress, identifying learning gaps before they become critical. The system provides personalized learning paths, adaptive assessments, and targeted interventions that have shown to improve at-risk student outcomes by 35%. Government funding through Title I, ESSA, and state grants makes our solution accessible to districts nationwide, ensuring no student is left behind.
        </p>
      </div>
      
      {/* Statistics cards */}
      <div className="about-stats-section">
        <div className="stat-card">
          <div className="stat-icon">🎓</div>
          <div className="stat-number">50K+</div>
          <div className="stat-label">Students Served</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-number">150+</div>
          <div className="stat-label">School Districts</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏛️</div>
          <div className="stat-number">89%</div>
          <div className="stat-label">Prediction Accuracy</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-number">$2.5M</div>
          <div className="stat-label">Funding Secured</div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection