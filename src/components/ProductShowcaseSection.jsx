import React from 'react'
import { Text, Image, Link } from './index'
import './ProductShowcaseSection.css'

function ProductShowcaseSection() {
  const courses = [
    {
      id: 1,
      title: "Math Mastery",
      description: "Master math concepts with our comprehensive course. Build a strong foundation and excel.",
      // price: "$29",
      lessons: "38 lessons",
      date: "25 oct 2024",
      image: "assets/photo-1518133910546-b6c2fb7d79e3.jpeg"
    },
    {
      id: 2,
      title: "English Essentials",
      description: "Enhance your English skills. Improve grammar, vocabulary, and writing proficiency effectively.",
      // price: "$100",
      lessons: "38 lessons",
      date: "25 oct 2024",
      image: "assets/photo-1543109740-4bdb38fda756.jpeg"
    },
    {
      id: 3,
      title: "Science Explorations",
      description: "Dive into the world of science. Explore experiments, theories, and scientific principles.",
      // price: "$100",
      lessons: "38 lessons",
      date: "25 oct 2024",
      image: "assets/photo-1507413245164-6160d8298b31.jpeg"
    },
    {
      id: 4,
      title: "AI Fundamentals",
      description: "Learn the basics of artificial intelligence and machine learning concepts for beginners.",
      // price: "$150",
      lessons: "42 lessons",
      date: "28 oct 2024",
      image: "assets/photo-1580894732444-8ecded7900cd.jpeg"
    },
    {
      id: 5,
      title: "Creative Writing",
      description: "Develop your creative writing skills with storytelling techniques and narrative structures.",
      // price: "$75",
      lessons: "30 lessons",
      date: "30 oct 2024",
      image: "assets/photo-1593510987760-2d895bc8109d.jpeg"
    },
    {
      id: 6,
      title: "Digital Art Basics",
      description: "Explore digital art creation using modern tools and techniques for artistic expression.",
      // price: "$120",
      lessons: "35 lessons",
      date: "02 nov 2024",
      image: "/assets/image.png"
    },
    {
      id: 7,
      title: "History Adventures",
      description: "Journey through time and explore fascinating historical events and civilizations.",
      // price: "$85",
      lessons: "40 lessons",
      date: "05 nov 2024",
      image: "/assets/image copy.png"
    }, 
      id: 8,
      title: "Music Theory",
      description: "Understand the fundamentals of music theory, composition, and musical structures.",
      // price: "$95",
      lessons: "32 lessons",
      date: "08 nov 2024",
      image: "https://i.postimg.cc/g0KscMsd/music-theory.png"
    }
  ];

  return (
    <div className="courses-section">
      <div className="courses-animated-shapes">
        <div className="course-bouncing-shape course-shape-1"></div>
        <div className="course-bouncing-shape course-shape-2"></div>
        <div className="course-bouncing-shape course-shape-3"></div>
        <div className="course-bouncing-shape course-shape-4"></div>
        <div className="course-bouncing-shape course-shape-5"></div>
        <div className="course-bouncing-shape course-shape-6"></div>
        <div className="course-bouncing-shape course-rectangle-1"></div>
        <div className="course-bouncing-shape course-rectangle-2"></div>
        <div className="course-bouncing-shape course-triangle-1"></div>
        <div className="course-bouncing-shape course-triangle-2"></div>
        <div className="course-bouncing-shape course-hexagon"></div>
        <div className="course-bouncing-shape course-diamond"></div>
      </div>
      
      <div className="courses-container">
        <div className="courses-header">
          <Text tag="p" className="courses-label">Our Courses</Text>
          <Text tag="h2" className="courses-title">Explore AI Learning</Text>
          <Text tag="p" className="courses-description">
            Explore our courses designed to enhance your skills and knowledge.
          </Text>
        </div>

        <div className="courses-carousel-container">
          <div className="courses-marquee">
            <div className="courses-track">
              {/* First set of courses */}
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <Image src={course.image} alt={course.title} />
                    <div className="course-price">{course.price}</div>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span className="course-lessons">{course.lessons}</span>
                      <span className="course-date">{course.date}</span>
                    </div>
                    <Text tag="h3" className="course-title">{course.title}</Text>
                    <Text tag="p" className="course-text">{course.description}</Text>
                    <Link href="/contact" className="course-button">
                      <Text tag="span" className="course-button-text">Enroll Now</Text>
                    </Link>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {courses.map((course) => (
                <div key={`duplicate-${course.id}`} className="course-card">
                  <div className="course-image">
                    <Image src={course.image} alt={course.title} />
                    <div className="course-price">{course.price}</div>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span className="course-lessons">{course.lessons}</span>
                      <span className="course-date">{course.date}</span>
                    </div>
                    <Text tag="h3" className="course-title">{course.title}</Text>
                    <Text tag="p" className="course-text">{course.description}</Text>
                    <Link href="/contact" className="course-button">
                      <Text tag="span" className="course-button-text">Enroll Now</Text>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="courses-footer">
          <Link href="/contact" className="view-all-button">
            <Text tag="span" className="course-button-text">View All Courses</Text>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductShowcaseSection