import React from 'react'
import { Text, Image, Link } from './index'
import './HighlightedFeatureSection.css'

function HighlightedFeatureSection() {
  return (
    <div className="home-e-132">
        <div className="home-e-133">
            <div className="home-e-134"> <Text tag="span" className="home-e-135">
                    <Text tag="p">Key Benefits </Text>
                </Text><Text tag="span" className="home-e-141">
                    <Text tag="p">Unlock Educational Excellence with AI </Text>
                </Text><Text tag="span" className="home-e-143">
                    <Text tag="p">Experience a 25% reduction in administrative time, a 35% improvement in at-risk student outcomes, and a 23% increase in overall engagement. </Text>
                    <div className="home-e-145"> </div>
                    <div className="home-e-146"> </div>
                </Text>
                <div className="home-e-147">
                    <div className="home-e-148"> <i className="fas fa-check-circle home-e-149"><Text tag="span" className="home-e-150">
                            </Text></i><Text tag="span" className="home-e-152">
                            <Text tag="p">Reduce Administrative Time by 25% </Text>
                        </Text></div>
                    <div className="home-e-158"> <i className="fas fa-check-circle home-e-159"><Text tag="span" className="home-e-160">
                            </Text></i><Text tag="span" className="home-e-162">
                            <Text tag="p">Improve Student Outcomes by 35% </Text>
                        </Text></div>
                    <div className="home-e-153"> <i className="fas fa-check-circle home-e-154"><Text tag="span" className="home-e-155">
                            </Text></i><Text tag="span" className="home-e-157">
                            <Text tag="p">Increase Engagement by 23% </Text>
                        </Text></div>
                </div><button className="home-e-142"><Link href="contact" target="_self" className="link">
                        <Text tag="p">Explore Now </Text>
                    </Link> </button>
            </div><Text tag="span" className="home-e-144"> <Image src="/assets/template-asset-2cf5dca7" alt=\"Image" /> </Text>
        </div>
    </div>
  )
}

export default HighlightedFeatureSection