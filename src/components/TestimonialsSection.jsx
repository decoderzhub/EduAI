import React from 'react'
import { Text, Image, Link } from './index'
import './TestimonialsSection.css'

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      role: "School Principal",
      avatar: "👩‍💼",
      message: "EduAI Bridge has transformed our school district. The AI Early Warning System helped us identify at-risk students early, leading to significant improvements in their academic performance. The personalized learning materials have also increased student engagement. Highly recommended!"
    },
    {
      id: 2,
      name: "John Smith",
      role: "5th Grade Teacher", 
      avatar: "👨‍🏫",
      message: "As a teacher, EduAI Bridge has been a game-changer. The intelligent content generation saves me hours of lesson planning, and the smart teacher-student matching has created a more effective learning environment."
    },
    {
      id: 3,
      name: "Emily White",
      role: "Tutoring Center Director",
      avatar: "👩‍🎓", 
      message: "Our tutoring center has seen remarkable growth since implementing EduAI Bridge. The adaptive learning feature ensures each student is challenged appropriately, and the live streaming classes have expanded our reach."
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      role: "Superintendent",
      avatar: "👨‍💼",
      message: "The ROI on EduAI Bridge has exceeded our expectations. We've seen a 35% improvement in at-risk student outcomes and saved over 25% on administrative costs. The government funding support made implementation seamless."
    },
    {
      id: 5,
      name: "Sarah Johnson", 
      role: "Special Education Teacher",
      avatar: "👩‍🏫",
      message: "EduAI Bridge's personalized learning paths have been incredible for my special needs students. The AI adapts to each child's unique learning style, and I've seen remarkable progress in areas where traditional methods struggled."
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Technology Director", 
      avatar: "👨‍💻",
      message: "Implementation was smooth and the technical support is outstanding. The platform integrates seamlessly with our existing systems, and the real-time analytics provide insights we never had before."
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <Text tag="p" className="testimonials-label">Real Stories</Text>
          <Text tag="h2" className="testimonials-title">Customer Success</Text>
          <Text tag="p" className="testimonials-description">
            Hear from educators and administrators who have transformed their institutions with EduAI Bridge
          </Text>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-avatar">
                  <div className="avatar-circle">
                    <span className="avatar-emoji">{testimonial.avatar}</span>
                  </div>
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
                  <div className="avatar-circle">
                    <span className="avatar-emoji">{testimonial.avatar}</span>
                  </div>
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
            <Text tag="span">Share Your Success Story</Text>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection