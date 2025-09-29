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
          <div className="about-label">TEMPORIBUS</div>
          <h2 className="about-title">Get to Know About Eginary Education</h2>
          
          <p className="about-paragraph">
            Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetur sed quia non numquam eius modi incidunt dolor.
          </p>
          
          <p className="about-paragraph">
            Omnis dolor repellendus. Temporibus autem qui aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae aroin ac lo is arcu, a vestibulum augue rhvamus ipsum neu facilisis vel mollis vitae, mollis nec ante.
          </p>
        </div>
      </div>
      
      {/* Bottom description paragraphs */}
      <div className="about-bottom-text">
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere ssi omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis aut rerum nece tatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur.
        </p>
        
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.
        </p>
      </div>
      
      {/* Statistics cards */}
      <div className="about-stats-section">
        <div className="stat-card">
          <div className="stat-icon">🎓</div>
          <div className="stat-number">25+</div>
          <div className="stat-label">Students</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-number">25+</div>
          <div className="stat-label">Courses</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏛️</div>
          <div className="stat-number">25+</div>
          <div className="stat-label">Universities</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-number">25+</div>
          <div className="stat-label">Scholarships</div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection