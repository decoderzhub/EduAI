import React from 'react'
import { Text, Image, Link } from './index'
import './ProductShowcaseSection.css'

function ProductShowcaseSection() {
  return (
    <div className="courses-section">
      <div className="courses-container">
        <div className="courses-header">
          <Text tag="p" className="courses-label">Our Courses</Text>
          <Text tag="h2" className="courses-title">Explore AI Learning</Text>
          <Text tag="p" className="courses-description">
            Explore our courses designed to enhance your skills and knowledge.
          </Text>
        </div>

        <div className="courses-grid">
          {/* Math Mastery Course */}
          <div className="course-card">
            <div className="course-image">
              <Image src="assets/photo-1518133910546-b6c2fb7d79e3.jpeg" alt="Math Mastery Course" />
              <div className="course-price">$29</div>
            </div>
            <div className="course-content">
              <div className="course-meta">
                <span className="course-lessons">38 lessons</span>
                <span className="course-date">25 oct 2024</span>
              </div>
              <Text tag="h3" className="course-title">Math Mastery</Text>
              <Text tag="p" className="course-text">
                Master math concepts with our comprehensive course. Build a strong foundation and excel.
              </Text>
              <Link href="/contact" className="course-button">
                <Text tag="span">Enroll Now</Text>
              </Link>
            </div>
          </div>

          {/* English Essentials Course */}
          <div className="course-card">
            <div className="course-image">
              <Image src="assets/photo-1543109740-4bdb38fda756.jpeg" alt="English Essentials Course" />
              <div className="course-price">$100</div>
            </div>
            <div className="course-content">
              <div className="course-meta">
                <span className="course-lessons">38 lessons</span>
                <span className="course-date">25 oct 2024</span>
              </div>
              <Text tag="h3" className="course-title">English Essentials</Text>
              <Text tag="p" className="course-text">
                Enhance your English skills. Improve grammar, vocabulary, and writing proficiency effectively.
              </Text>
              <Link href="/contact" className="course-button">
                <Text tag="span">Enroll Now</Text>
              </Link>
            </div>
          </div>

          {/* Science Explorations Course */}
          <div className="course-card">
            <div className="course-image">
              <Image src="assets/photo-1507413245164-6160d8298b31.jpeg" alt="Science Explorations Course" />
              <div className="course-price">$100</div>
            </div>
            <div className="course-content">
              <div className="course-meta">
                <span className="course-lessons">38 lessons</span>
                <span className="course-date">25 oct 2024</span>
              </div>
              <Text tag="h3" className="course-title">Science Explorations</Text>
              <Text tag="p" className="course-text">
                Dive into the world of science. Explore experiments, theories, and scientific principles.
              </Text>
              <Link href="/contact" className="course-button">
                <Text tag="span">Enroll Now</Text>
              </Link>
            </div>
          </div>
        </div>

        <div className="courses-footer">
          <Link href="/contact" className="view-all-button">
            <Text tag="span">View All Courses</Text>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductShowcaseSection