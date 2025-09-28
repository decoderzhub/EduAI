import React, { useState, useEffect } from 'react';
import { Text } from './index';
import './FundingCalculator.css';

function FundingCalculator() {
  const [formData, setFormData] = useState({
    districtSize: 'medium',
    studentCount: 5000,
    currentBudget: 2500000,
    titleIEligible: true,
    stateGrants: true,
    specialNeeds: 15,
    teacherShortage: true
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateFunding = () => {
    setIsCalculating(true);
    
    // Simulate API call
    setTimeout(() => {
      const baseROI = formData.studentCount * 125; // $125 per student base
      const titleIBonus = formData.titleIEligible ? baseROI * 0.3 : 0;
      const stateGrantBonus = formData.stateGrants ? baseROI * 0.25 : 0;
      const specialNeedsBonus = (formData.specialNeeds / 100) * formData.studentCount * 200;
      const teacherShortageBonus = formData.teacherShortage ? baseROI * 0.2 : 0;
      
      const totalFunding = baseROI + titleIBonus + stateGrantBonus + specialNeedsBonus + teacherShortageBonus;
      const implementationCost = formData.studentCount * 45; // $45 per student
      const netROI = totalFunding - implementationCost;
      const roiPercentage = ((netROI / implementationCost) * 100).toFixed(0);
      
      setResults({
        totalFunding: Math.round(totalFunding),
        implementationCost: Math.round(implementationCost),
        netROI: Math.round(netROI),
        roiPercentage,
        paybackPeriod: Math.ceil(implementationCost / (netROI / 12)),
        fundingSources: {
          titleI: Math.round(titleIBonus),
          stateGrants: Math.round(stateGrantBonus),
          specialNeeds: Math.round(specialNeedsBonus),
          teacherShortage: Math.round(teacherShortageBonus),
          base: Math.round(baseROI)
        }
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="funding-calculator-section">
      <div className="calculator-container">
        <div className="calculator-header">
          <Text tag="h2" className="calculator-title">
            Government Funding ROI Calculator
          </Text>
          <Text tag="p" className="calculator-subtitle">
            Discover how much federal and state funding your district can access with EduAI Bridge
          </Text>
        </div>

        <div className="calculator-content">
          <div className="calculator-form">
            <div className="form-section">
              <h3>District Information</h3>
              
              <div className="form-group">
                <label>District Size</label>
                <select 
                  value={formData.districtSize}
                  onChange={(e) => handleInputChange('districtSize', e.target.value)}
                >
                  <option value="small">Small (< 2,500 students)</option>
                  <option value="medium">Medium (2,500 - 10,000 students)</option>
                  <option value="large">Large (> 10,000 students)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Total Student Count</label>
                <input 
                  type="number"
                  value={formData.studentCount}
                  onChange={(e) => handleInputChange('studentCount', parseInt(e.target.value))}
                  min="100"
                  max="100000"
                />
              </div>

              <div className="form-group">
                <label>Current Annual Technology Budget</label>
                <input 
                  type="number"
                  value={formData.currentBudget}
                  onChange={(e) => handleInputChange('currentBudget', parseInt(e.target.value))}
                  min="50000"
                  step="50000"
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Funding Eligibility</h3>
              
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={formData.titleIEligible}
                    onChange={(e) => handleInputChange('titleIEligible', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Title I Eligible District
                  <div className="funding-info">+30% additional funding</div>
                </label>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={formData.stateGrants}
                    onChange={(e) => handleInputChange('stateGrants', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  State Education Grants Available
                  <div className="funding-info">+25% additional funding</div>
                </label>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={formData.teacherShortage}
                    onChange={(e) => handleInputChange('teacherShortage', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Experiencing Teacher Shortage
                  <div className="funding-info">+20% additional funding</div>
                </label>
              </div>

              <div className="form-group">
                <label>Special Needs Students (%)</label>
                <input 
                  type="range"
                  min="5"
                  max="40"
                  value={formData.specialNeeds}
                  onChange={(e) => handleInputChange('specialNeeds', parseInt(e.target.value))}
                />
                <div className="range-value">{formData.specialNeeds}%</div>
              </div>
            </div>

            <button 
              className="calculate-btn"
              onClick={calculateFunding}
              disabled={isCalculating}
            >
              {isCalculating ? (
                <>
                  <div className="spinner"></div>
                  Calculating...
                </>
              ) : (
                'Calculate Funding & ROI'
              )}
            </button>
          </div>

          {results && (
            <div className="results-panel">
              <div className="results-header">
                <h3>Your Funding Analysis</h3>
                <div className="roi-badge">
                  {results.roiPercentage}% ROI
                </div>
              </div>

              <div className="results-grid">
                <div className="result-card primary">
                  <div className="result-icon">💰</div>
                  <div className="result-value">${results.totalFunding.toLocaleString()}</div>
                  <div className="result-label">Total Available Funding</div>
                </div>

                <div className="result-card">
                  <div className="result-icon">💻</div>
                  <div className="result-value">${results.implementationCost.toLocaleString()}</div>
                  <div className="result-label">Implementation Cost</div>
                </div>

                <div className="result-card success">
                  <div className="result-icon">📈</div>
                  <div className="result-value">${results.netROI.toLocaleString()}</div>
                  <div className="result-label">Net ROI (Year 1)</div>
                </div>

                <div className="result-card">
                  <div className="result-icon">⏱️</div>
                  <div className="result-value">{results.paybackPeriod} months</div>
                  <div className="result-label">Payback Period</div>
                </div>
              </div>

              <div className="funding-breakdown">
                <h4>Funding Sources Breakdown</h4>
                <div className="breakdown-chart">
                  <div className="breakdown-item">
                    <div className="breakdown-bar">
                      <div 
                        className="breakdown-fill base"
                        style={{width: `${(results.fundingSources.base / results.totalFunding) * 100}%`}}
                      ></div>
                    </div>
                    <div className="breakdown-info">
                      <span className="breakdown-label">Base Funding</span>
                      <span className="breakdown-value">${results.fundingSources.base.toLocaleString()}</span>
                    </div>
                  </div>

                  {results.fundingSources.titleI > 0 && (
                    <div className="breakdown-item">
                      <div className="breakdown-bar">
                        <div 
                          className="breakdown-fill title1"
                          style={{width: `${(results.fundingSources.titleI / results.totalFunding) * 100}%`}}
                        ></div>
                      </div>
                      <div className="breakdown-info">
                        <span className="breakdown-label">Title I Funding</span>
                        <span className="breakdown-value">${results.fundingSources.titleI.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  {results.fundingSources.stateGrants > 0 && (
                    <div className="breakdown-item">
                      <div className="breakdown-bar">
                        <div 
                          className="breakdown-fill state"
                          style={{width: `${(results.fundingSources.stateGrants / results.totalFunding) * 100}%`}}
                        ></div>
                      </div>
                      <div className="breakdown-info">
                        <span className="breakdown-label">State Grants</span>
                        <span className="breakdown-value">${results.fundingSources.stateGrants.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  {results.fundingSources.specialNeeds > 0 && (
                    <div className="breakdown-item">
                      <div className="breakdown-bar">
                        <div 
                          className="breakdown-fill special"
                          style={{width: `${(results.fundingSources.specialNeeds / results.totalFunding) * 100}%`}}
                        ></div>
                      </div>
                      <div className="breakdown-info">
                        <span className="breakdown-label">Special Needs Funding</span>
                        <span className="breakdown-value">${results.fundingSources.specialNeeds.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  {results.fundingSources.teacherShortage > 0 && (
                    <div className="breakdown-item">
                      <div className="breakdown-bar">
                        <div 
                          className="breakdown-fill teacher"
                          style={{width: `${(results.fundingSources.teacherShortage / results.totalFunding) * 100}%`}}
                        ></div>
                      </div>
                      <div className="breakdown-info">
                        <span className="breakdown-label">Teacher Shortage Relief</span>
                        <span className="breakdown-value">${results.fundingSources.teacherShortage.toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="compliance-badges">
                <h4>Procurement Compliance</h4>
                <div className="badges-grid">
                  <div className="compliance-badge">
                    <div className="badge-icon">✅</div>
                    <div className="badge-text">SLED Approved</div>
                  </div>
                  <div className="compliance-badge">
                    <div className="badge-icon">✅</div>
                    <div className="badge-text">FERPA Compliant</div>
                  </div>
                  <div className="compliance-badge">
                    <div className="badge-icon">✅</div>
                    <div className="badge-text">COPPA Certified</div>
                  </div>
                  <div className="compliance-badge">
                    <div className="badge-icon">✅</div>
                    <div className="badge-text">Section 508</div>
                  </div>
                </div>
              </div>

              <div className="next-steps">
                <h4>Next Steps</h4>
                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <strong>Schedule Demo</strong>
                      <p>See EduAI Bridge in action with your specific use cases</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <strong>Funding Application Support</strong>
                      <p>Our team helps you apply for available grants and funding</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <strong>Implementation Planning</strong>
                      <p>Custom rollout plan tailored to your district's needs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <button className="cta-primary">Schedule Demo</button>
                <button className="cta-secondary">Download Report</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FundingCalculator;