import React, { useEffect } from 'react'
import { Text, Image, Link } from '../components'
import FundingCalculator from '../components/FundingCalculator'
import './FundingCalculator.css'

function FundingCalculatorPage() {
  useEffect(() => {
    console.log('FundingCalculator page mounted');
  }, []);

  return (
    <div className="funding-calculator-page">
      <div className="funding-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <Image src="assets/asset-81133393.svg" alt="EduAI Bridge Logo" className="nav-logo" />
            <Text tag="span" className="nav-title">EduAI Bridge</Text>
          </div>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/service" className="nav-link">Services</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
      
      <FundingCalculator />
      
      <div className="funding-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <Image src="/assets/asset-81133393.svg" alt="EduAI Bridge Logo" className="footer-logo" />
                <Text tag="span" className="footer-title">EduAI Bridge</Text>
              </div>
              <Text tag="p" className="footer-description">
                Revolutionizing K-12 education with AI-powered solutions that enhance teacher capabilities and improve student outcomes.
              </Text>
            </div>
            
            <div className="footer-section">
              <Text tag="h4" className="footer-heading">Quick Links</Text>
              <div className="footer-links">
                <Link href="/" className="footer-link">Home</Link>
                <Link href="/about" className="footer-link">About</Link>
                <Link href="/service" className="footer-link">Services</Link>
                <Link href="/contact" className="footer-link">Contact</Link>
              </div>
            </div>
            
            <div className="footer-section">
              <Text tag="h4" className="footer-heading">Resources</Text>
              <div className="footer-links">
                <Link href="/funding-calculator" className="footer-link">Funding Calculator</Link>
                <Link href="#" className="footer-link">Case Studies</Link>
                <Link href="#" className="footer-link">Documentation</Link>
                <Link href="#" className="footer-link">Support</Link>
              </div>
            </div>
            
            <div className="footer-section">
              <Text tag="h4" className="footer-heading">Contact</Text>
              <div className="footer-contact">
                <Text tag="p">📧 info@eduaibridge.com</Text>
                <Text tag="p">📞 555-123-4567</Text>
                <Text tag="p">📍 Education Technology Hub</Text>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <Text tag="p">© 2024 EduAI Bridge. All rights reserved.</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundingCalculatorPage