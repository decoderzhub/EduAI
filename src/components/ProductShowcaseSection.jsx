import React from 'react'
import { Text, Image, Link } from './index'
import './ProductShowcaseSection.css'

function ProductShowcaseSection() {
  return (
    <div className="home-e-77"> <Text tag="span" className="home-e-80">
            <Text tag="p">Our Courses </Text>
        </Text><Text tag="span" className="home-e-86">
            <Text tag="p">Explore AI Learning </Text>
        </Text><Text tag="span" className="home-e-89">
            <Text tag="p">Explore our courses designed to enhance your skills and knowledge. </Text>
        </Text>
        <div className="home-e-78">
            <div className="home-e-79"> <Text tag="span" className="home-e-92"> <Image src="assets/photo-1518133910546-b6c2fb7d79e3.jpeg" alt="Image" /> </Text>
                <div className="home-e-93">
                    <div className="home-e-94">
                        <div className="home-e-95"> <i className="fas fa-book home-e-96"></i><Text tag="span" className="home-e-87">
                                <Text tag="p">38 lessons</Text>
                            </Text></div>
                        <div className="home-e-97"> <i className="fas fa-book home-e-99"></i><Text tag="span" className="home-e-98">
                                <Text tag="p">25 oct 2024</Text>
                            </Text></div>
                    </div><Text tag="span" className="home-e-91">
                        <Text tag="p">$29 </Text>
                    </Text>
                </div>
                <div className="home-e-100"> <Text tag="span" className="home-e-90">
                        <Text tag="p">Math Mastery </Text>
                    </Text><Text tag="span" className="home-e-101">
                        <Text tag="p">Master math concepts with our comprehensive course. Build a strong foundation and excel. </Text>
                    </Text></div><button className="home-e-88"><Link href="contact" target="_self" className="link">
                        <Text tag="p">Enroll Now </Text>
                    </Link> </button>
            </div>
            <div className="home-e-117"> <Text tag="span" className="home-e-119"> <Image src="assets/photo-1543109740-4bdb38fda756.jpeg" alt="Image" /> </Text>
                <div className="home-e-120">
                    <div className="home-e-122">
                        <div className="home-e-123"> <i className="fas fa-book home-e-125"></i><Text tag="span" className="home-e-124">
                                <Text tag="p">38 lessons</Text>
                            </Text></div>
                        <div className="home-e-126"> <i className="fas fa-book home-e-128"></i><Text tag="span" className="home-e-127">
                                <Text tag="p">25 oct 2024</Text>
                            </Text></div>
                    </div><Text tag="span" className="home-e-121">
                        <Text tag="p"><strong>$100</strong></Text>
                    </Text>
                </div>
                <div className="home-e-129"> <Text tag="span" className="home-e-130">
                        <Text tag="p">English Essentials </Text>
                    </Text><Text tag="span" className="home-e-131">
                        <Text tag="p">Enhance your English skills. Improve grammar, vocabulary, and writing proficiency effectively. </Text>
                    </Text></div><button className="home-e-118"><Link href="contact" target="_self" className="link">
                        <Text tag="p">Enroll Now </Text>
                    </Link> </button>
            </div>
            <div className="home-e-102"> <Text tag="span" className="home-e-104"> <Image src="assets/photo-1507413245164-6160d8298b31.jpeg" alt="Image" /> </Text>
                <div className="home-e-105">
                    <div className="home-e-107">
                        <div className="home-e-108"> <i className="fas fa-book home-e-110"></i><Text tag="span" className="home-e-109">
                                <Text tag="p">38 lessons</Text>
                            </Text></div>
                        <div className="home-e-111"> <i className="fas fa-book home-e-113"></i><Text tag="span" className="home-e-112">
                                <Text tag="p">25 oct 2024</Text>
                            </Text></div>
                    </div><Text tag="span" className="home-e-106">
                        <Text tag="p"><strong>$100</strong></Text>
                    </Text>
                </div>
                <div className="home-e-114"> <Text tag="span" className="home-e-115">
                        <Text tag="p">Science Explorations </Text>
                    </Text><Text tag="span" className="home-e-116">
                        <Text tag="p">Dive into the world of science. Explore experiments, theories, and scientific principles. </Text>
                    </Text></div><button className="home-e-103"><Link href="contact" target="_self" className="link">
                        <Text tag="p">Enroll Now </Text>
                    </Link> </button>
            </div>
        </div>
    </div>
  )
}

export default ProductShowcaseSection