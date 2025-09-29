import React from 'react'
import { Text, Image, Link } from './index'
import './TestimonialsSection.css'

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Lincoln Elementary School District",
      role: "California • 2,500 Students",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400",
      message: "EduAI Bridge has transformed our district operations. The AI Early Warning System helped us identify at-risk students early, leading to a 35% improvement in academic performance. Our teachers save 15+ hours weekly on lesson planning, allowing more focus on student interaction."
    },
    {
      id: 2,
      name: "Roosevelt Middle School",
      role: "Texas • 800 Students",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400",
      message: "The intelligent content generation and smart teacher-student matching have revolutionized our learning environment. We've seen a 28% increase in student engagement and significantly improved test scores across all grade levels."
    },
    {
      id: 3,
      name: "Washington High School",
      role: "New York • 1,200 Students",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400",
      message: "The adaptive learning features ensure each student is challenged appropriately. Our live streaming classes have expanded our reach to remote learners, and we've seen remarkable improvements in graduation rates and college readiness."
    },
    {
      id: 4,
      name: "Jefferson County Schools",
      role: "Florida • 15,000 Students",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400",
      message: "The ROI on EduAI Bridge has exceeded our expectations across our entire district. We've achieved a 35% improvement in at-risk student outcomes and reduced administrative costs by 25%. The government funding support made implementation seamless."
    },
    {
      id: 5,
      name: "Madison Special Education Center",
      role: "Illinois • 300 Students",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400",
      message: "EduAI Bridge's personalized learning paths have been transformative for our special needs students. The AI adapts to each child's unique learning style, and we've seen remarkable progress in areas where traditional methods struggled to reach students."
    },
    {
      id: 6,
      name: "Oakwood Academy",
      role: "Georgia • 600 Students",
      image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=400",
      message: "Implementation was smooth and technical support is outstanding. The platform integrates seamlessly with our existing systems, and the real-time analytics provide insights we never had before. Our teachers are more effective than ever."
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-animated-shapes">
        <div className="testimonial-bouncing-shape testimonial-shape-1"></div>
        <div className="testimonial-bouncing-shape testimonial-shape-2"></div>
        <div className="testimonial-bouncing-shape testimonial-shape-3"></div>
        <div className="testimonial-bouncing-shape testimonial-shape-4"></div>
        <div className="testimonial-bouncing-shape testimonial-shape-5"></div>
        <div className="testimonial-bouncing-shape testimonial-shape-6"></div>
        <div className="testimonial-bouncing-shape testimonial-rectangle-1"></div>
        <div className="testimonial-bouncing-shape testimonial-rectangle-2"></div>
        <div className="testimonial-bouncing-shape testimonial-triangle-1"></div>
        <div className="testimonial-bouncing-shape testimonial-triangle-2"></div>
        <div className="testimonial-bouncing-shape testimonial-hexagon"></div>
        <div className="testimonial-bouncing-shape testimonial-diamond"></div>
      </div>
      
      <div className="testimonials-container">
        <div className="testimonials-header">
          <Text tag="p" className="testimonials-label">Success Stories</Text>
          <Text tag="h2" className="testimonials-title">Institutional Impact</Text>
          <Text tag="p" className="testimonials-description">
            Discover how schools and districts nationwide have transformed education with EduAI Bridge
          </Text>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-shapes">
            <div className="testimonials-shapes-track">
              {/* First set of shapes */}
              {Array.from({ length: 8 }, (_, index) => (
                <div key={index} className="shape-group">
                  <div className="floating-shape circle-1"></div>
                  <div className="floating-shape circle-2"></div>
                  <div className="floating-shape circle-3"></div>
                  <div className="floating-shape circle-4"></div>
                  <div className="floating-shape rectangle"></div>
                  <div className="floating-shape triangle"></div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 8 }, (_, index) => (
                <div key={`duplicate-${index}`} className="shape-group">
                  <div className="floating-shape circle-1"></div>
                  <div className="floating-shape circle-2"></div>
                  <div className="floating-shape circle-3"></div>
                  <div className="floating-shape circle-4"></div>
                  <div className="floating-shape rectangle"></div>
                  <div className="floating-shape triangle"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonials-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-avatar">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="avatar-image"
                  />
                </div>
                
                <Text tag="h4" className="testimonial-name">{testimonial.name}</Text>
                <Text tag="p" className="testimonial-role">{testimonial.role}</Text>
                
                <Text tag="p" className="testimonial-message">
                  {testimonial.message}
                </Text>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial) => (
              <div key={`duplicate-${testimonial.id}`} className="testimonial-card">
                <div className="testimonial-avatar">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="avatar-image"
                  />
                </div>
                
                <Text tag="h4" className="testimonial-name">{testimonial.name}</Text>
                <Text tag="p" className="testimonial-role">{testimonial.role}</Text>
                
                <Text tag="p" className="testimonial-message">
                  {testimonial.message}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-footer">
          <Link href="/contact" className="testimonials-cta">
            <Text tag="span">Join These Success Stories</Text>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection