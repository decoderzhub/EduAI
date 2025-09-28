import React, { useState, useEffect } from 'react';
import { Text, Image, Link } from './index';
import './AIIntegration.css';

function AIIntegration() {
  const [aiMetrics, setAiMetrics] = useState({
    studentsAtRisk: 23,
    accuracyRate: 89,
    interventionsCreated: 156,
    teachingHoursSaved: 847
  });

  const [activeFeature, setActiveFeature] = useState('early-warning');

  return (
    <div className="ai-integration-section">
      <div className="ai-container">
        <div className="ai-header">
          <Text tag="h2" className="ai-title">
            AI-Powered Educational Intelligence
          </Text>
          <Text tag="p" className="ai-subtitle">
            Revolutionary Claude AI integration transforming K-12 education with 89% accuracy in student outcome prediction
          </Text>
        </div>

        <div className="ai-metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <div className="metric-value">{aiMetrics.studentsAtRisk}</div>
            <div className="metric-label">At-Risk Students Identified</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">📊</div>
            <div className="metric-value">{aiMetrics.accuracyRate}%</div>
            <div className="metric-label">Prediction Accuracy</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🚀</div>
            <div className="metric-value">{aiMetrics.interventionsCreated}</div>
            <div className="metric-label">AI Interventions Created</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">⏰</div>
            <div className="metric-value">{aiMetrics.teachingHoursSaved}</div>
            <div className="metric-label">Teaching Hours Saved</div>
          </div>
        </div>

        <div className="ai-features-tabs">
          <button 
            className={`tab-button ${activeFeature === 'early-warning' ? 'active' : ''}`}
            onClick={() => setActiveFeature('early-warning')}
          >
            Early Warning System
          </button>
          <button 
            className={`tab-button ${activeFeature === 'curriculum' ? 'active' : ''}`}
            onClick={() => setActiveFeature('curriculum')}
          >
            AI Curriculum Generator
          </button>
          <button 
            className={`tab-button ${activeFeature === 'matching' ? 'active' : ''}`}
            onClick={() => setActiveFeature('matching')}
          >
            Smart Matching
          </button>
          <button 
            className={`tab-button ${activeFeature === 'insights' ? 'active' : ''}`}
            onClick={() => setActiveFeature('insights')}
          >
            Real-time Insights
          </button>
        </div>

        <div className="ai-feature-content">
          {activeFeature === 'early-warning' && (
            <div className="feature-panel">
              <div className="feature-demo">
                <div className="demo-header">
                  <h3>AI Early Warning Dashboard</h3>
                  <div className="status-indicator live">LIVE</div>
                </div>
                <div className="student-alerts">
                  <div className="alert-item high-risk">
                    <div className="student-info">
                      <div className="student-avatar">JS</div>
                      <div className="student-details">
                        <div className="student-name">Jamie Smith</div>
                        <div className="risk-score">Risk Score: 87% (High)</div>
                      </div>
                    </div>
                    <div className="ai-recommendation">
                      <strong>AI Recommendation:</strong> Immediate math intervention needed. Suggest peer tutoring and visual learning materials.
                    </div>
                    <div className="action-buttons">
                      <button className="btn-intervention">Create Intervention</button>
                      <button className="btn-notify">Notify Parent</button>
                    </div>
                  </div>
                  <div className="alert-item medium-risk">
                    <div className="student-info">
                      <div className="student-avatar">AL</div>
                      <div className="student-details">
                        <div className="student-name">Alex Lee</div>
                        <div className="risk-score">Risk Score: 64% (Medium)</div>
                      </div>
                    </div>
                    <div className="ai-recommendation">
                      <strong>AI Recommendation:</strong> Reading comprehension support. Recommend audiobooks and interactive exercises.
                    </div>
                    <div className="action-buttons">
                      <button className="btn-intervention">Create Intervention</button>
                      <button className="btn-monitor">Monitor Progress</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  <li>89% accuracy in predicting student outcomes</li>
                  <li>Proactive intervention before students fall behind</li>
                  <li>Automated parent and teacher notifications</li>
                  <li>Personalized support recommendations</li>
                </ul>
              </div>
            </div>
          )}

          {activeFeature === 'curriculum' && (
            <div className="feature-panel">
              <div className="feature-demo">
                <div className="demo-header">
                  <h3>AI Curriculum Generator</h3>
                  <div className="generation-status">Generating...</div>
                </div>
                <div className="curriculum-generator">
                  <div className="input-section">
                    <label>Subject: Mathematics</label>
                    <label>Grade Level: 5th Grade</label>
                    <label>Learning Objective: Fractions</label>
                    <label>Duration: 2 weeks</label>
                  </div>
                  <div className="generated-content">
                    <h4>AI-Generated Lesson Plan:</h4>
                    <div className="lesson-preview">
                      <div className="lesson-day">
                        <strong>Day 1:</strong> Introduction to Fractions
                        <ul>
                          <li>Visual fraction representations using pizza slices</li>
                          <li>Interactive fraction manipulatives</li>
                          <li>Assessment: Quick visual quiz</li>
                        </ul>
                      </div>
                      <div className="lesson-day">
                        <strong>Day 2:</strong> Equivalent Fractions
                        <ul>
                          <li>Pattern recognition activities</li>
                          <li>Digital fraction bars</li>
                          <li>Peer collaboration exercises</li>
                        </ul>
                      </div>
                    </div>
                    <div className="standards-alignment">
                      <strong>Standards Aligned:</strong> CCSS.MATH.CONTENT.5.NF.A.1, CCSS.MATH.CONTENT.5.NF.A.2
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  <li>Saves 15+ hours per week on lesson planning</li>
                  <li>Automatically aligned to state standards</li>
                  <li>Personalized for different learning styles</li>
                  <li>Includes assessment rubrics and materials</li>
                </ul>
              </div>
            </div>
          )}

          {activeFeature === 'matching' && (
            <div className="feature-panel">
              <div className="feature-demo">
                <div className="demo-header">
                  <h3>AI Smart Teacher-Student Matching</h3>
                </div>
                <div className="matching-results">
                  <div className="match-pair">
                    <div className="teacher-profile">
                      <div className="profile-pic">👩‍🏫</div>
                      <div className="profile-info">
                        <h4>Ms. Rodriguez</h4>
                        <div className="teaching-style">Visual/Kinesthetic Specialist</div>
                        <div className="success-rate">92% Success Rate</div>
                      </div>
                    </div>
                    <div className="match-arrow">→</div>
                    <div className="student-profile">
                      <div className="profile-pic">👦</div>
                      <div className="profile-info">
                        <h4>Marcus Johnson</h4>
                        <div className="learning-style">Visual Learner</div>
                        <div className="match-score">Match Score: 94%</div>
                      </div>
                    </div>
                  </div>
                  <div className="match-reasoning">
                    <strong>AI Matching Rationale:</strong>
                    <p>Marcus shows strong visual processing skills and benefits from hands-on activities. Ms. Rodriguez's teaching methodology aligns perfectly with Marcus's learning preferences, with similar student profiles showing 94% improvement rates.</p>
                  </div>
                </div>
              </div>
              <div className="feature-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  <li>Optimizes learning outcomes through perfect matches</li>
                  <li>Reduces teacher burnout with compatible students</li>
                  <li>Increases student engagement by 35%</li>
                  <li>Data-driven matching based on learning patterns</li>
                </ul>
              </div>
            </div>
          )}

          {activeFeature === 'insights' && (
            <div className="feature-panel">
              <div className="feature-demo">
                <div className="demo-header">
                  <h3>Real-time AI Classroom Insights</h3>
                  <div className="live-indicator">🔴 LIVE</div>
                </div>
                <div className="insights-dashboard">
                  <div className="insight-cards">
                    <div className="insight-card attention">
                      <div className="insight-icon">👀</div>
                      <div className="insight-content">
                        <h4>Attention Alert</h4>
                        <p>3 students showing decreased engagement in the last 5 minutes</p>
                        <button className="insight-action">Suggest Break</button>
                      </div>
                    </div>
                    <div className="insight-card comprehension">
                      <div className="insight-icon">🧠</div>
                      <div className="insight-content">
                        <h4>Comprehension Check</h4>
                        <p>67% of class ready to move to next concept</p>
                        <button className="insight-action">Continue Lesson</button>
                      </div>
                    </div>
                    <div className="insight-card intervention">
                      <div className="insight-icon">🎯</div>
                      <div className="insight-content">
                        <h4>Intervention Needed</h4>
                        <p>Sarah needs additional support with current topic</p>
                        <button className="insight-action">Create Support Plan</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  <li>Real-time classroom optimization</li>
                  <li>Immediate intervention recommendations</li>
                  <li>Engagement monitoring and alerts</li>
                  <li>Adaptive pacing based on class comprehension</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="ai-cta">
          <Text tag="h3">Ready to Transform Your Classroom with AI?</Text>
          <Text tag="p">Join 500+ schools already using EduAI Bridge to improve student outcomes</Text>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">Schedule Demo</Link>
            <Link href="/funding-calculator" className="btn-secondary">Calculate ROI</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIIntegration;