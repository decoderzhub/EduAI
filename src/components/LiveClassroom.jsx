import React, { useState, useEffect } from 'react';
import { Text } from './index';
import './LiveClassroom.css';

function LiveClassroom() {
  const [isLive, setIsLive] = useState(false);
  const [participants, setParticipants] = useState(24);
  const [aiInsights, setAiInsights] = useState([
    { type: 'engagement', message: 'Class engagement: 87% - Excellent!', priority: 'high' },
    { type: 'comprehension', message: '3 students may need additional support', priority: 'medium' },
    { type: 'pacing', message: 'Optimal pacing - continue current lesson', priority: 'low' }
  ]);

  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'AI Assistant', message: 'Welcome to today\'s math lesson! I\'m here to help.', time: '10:00 AM', isAI: true },
    { id: 2, user: 'Sarah M.', message: 'Can you explain fractions again?', time: '10:02 AM', isAI: false },
    { id: 3, user: 'AI Assistant', message: 'Of course! Think of fractions like pizza slices. If you have 1 slice out of 4 total slices, that\'s 1/4.', time: '10:02 AM', isAI: true }
  ]);

  const [studentEngagement, setStudentEngagement] = useState([
    { name: 'Alex', engagement: 95, status: 'active' },
    { name: 'Sarah', engagement: 78, status: 'needs-help' },
    { name: 'Mike', engagement: 92, status: 'active' },
    { name: 'Emma', engagement: 65, status: 'distracted' },
    { name: 'James', engagement: 88, status: 'active' }
  ]);

  const startLiveSession = () => {
    setIsLive(true);
    // Simulate real-time updates
    const interval = setInterval(() => {
      setParticipants(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(interval);
  };

  const endLiveSession = () => {
    setIsLive(false);
  };

  return (
    <div className="live-classroom-section">
      <div className="classroom-container">
        <div className="classroom-header">
          <Text tag="h2" className="classroom-title">
            AI-Enhanced Live Classroom
          </Text>
          <Text tag="p" className="classroom-subtitle">
            Real-time video streaming with intelligent AI teaching assistance and engagement monitoring
          </Text>
        </div>

        <div className="classroom-interface">
          {/* Main Video Area */}
          <div className="video-section">
            <div className="main-video">
              <div className="video-placeholder">
                {isLive ? (
                  <div className="live-video">
                    <div className="live-indicator">
                      <span className="live-dot"></span>
                      LIVE
                    </div>
                    <div className="video-content">
                      <div className="teacher-avatar">👩‍🏫</div>
                      <div className="lesson-info">
                        <h3>5th Grade Mathematics</h3>
                        <p>Introduction to Fractions</p>
                      </div>
                    </div>
                    <div className="video-controls">
                      <button className="control-btn">🎤</button>
                      <button className="control-btn">📹</button>
                      <button className="control-btn">📺</button>
                      <button className="control-btn end-call" onClick={endLiveSession}>📞</button>
                    </div>
                  </div>
                ) : (
                  <div className="video-preview">
                    <div className="preview-content">
                      <div className="preview-icon">📹</div>
                      <h3>Ready to Start Live Session</h3>
                      <p>Click below to begin your AI-enhanced classroom</p>
                      <button className="start-live-btn" onClick={startLiveSession}>
                        Start Live Session
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="session-info">
                <div className="info-item">
                  <span className="info-label">Participants:</span>
                  <span className="info-value">{participants}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">{isLive ? '23:45' : '00:00'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Recording:</span>
                  <span className="info-value recording">{isLive ? '● REC' : '○ OFF'}</span>
                </div>
              </div>
            </div>

            {/* Student Grid */}
            <div className="student-grid">
              <h4>Student Participants</h4>
              <div className="students-container">
                {studentEngagement.map((student, index) => (
                  <div key={index} className={`student-tile ${student.status}`}>
                    <div className="student-video">
                      <img 
                        src={
                          index === 0 ? 'https://i.postimg.cc/MMmKyDCF/Conner-image-copy.jpg' : // Alex (Conner)
                          index === 1 ? 'https://i.postimg.cc/KkDvnN6p/DIL-ES-Jaala-1.jpg' : // Sarah (Jaala)
                          index === 2 ? 'https://i.postimg.cc/zbFXnjsk/DITL-Demonty-copy-scaled-e1707736461771.jpg' : // Mike (Demonty)
                          index === 3 ? 'https://i.postimg.cc/k6vXxc0h/MARI-image-copy.jpg' : // Emma (Mari)
                          'https://i.postimg.cc/2b784ws0/PETER-image-copy.jpg' // James (Peter)
                        }
                        alt={`${student.name} profile`}
                        className="student-avatar-img"
                      />
                      <div className="engagement-indicator">
                        <div 
                          className="engagement-bar"
                          style={{width: `${student.engagement}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="student-name">{student.name}</div>
                    <div className="engagement-score">{student.engagement}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Assistant Panel */}
          <div className="ai-panel">
            <div className="ai-insights">
              <h4>🤖 AI Teaching Assistant</h4>
              <div className="insights-list">
                {aiInsights.map((insight, index) => (
                  <div key={index} className={`insight-item ${insight.priority}`}>
                    <div className="insight-icon">
                      {insight.type === 'engagement' && '👀'}
                      {insight.type === 'comprehension' && '🧠'}
                      {insight.type === 'pacing' && '⏱️'}
                    </div>
                    <div className="insight-message">{insight.message}</div>
                    <div className="insight-actions">
                      <button className="insight-btn">Act</button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="ai-suggestions">
                <h5>💡 AI Suggestions</h5>
                <div className="suggestion-item">
                  <p>Consider using visual aids for fraction concepts</p>
                  <button className="suggestion-btn">Apply</button>
                </div>
                <div className="suggestion-item">
                  <p>Sarah and Emma may benefit from breakout support</p>
                  <button className="suggestion-btn">Create Breakout</button>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="live-chat">
              <h4>💬 Live Chat</h4>
              <div className="chat-messages">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`chat-message ${message.isAI ? 'ai-message' : 'user-message'}`}>
                    <div className="message-header">
                      <span className="message-user">{message.user}</span>
                      <span className="message-time">{message.time}</span>
                    </div>
                    <div className="message-content">{message.message}</div>
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input type="text" placeholder="Ask AI assistant or chat with class..." />
                <button className="send-btn">Send</button>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Analytics */}
        <div className="analytics-showcase">
          <div className="showcase-container">
            <div className="showcase-left">
              <div className="geometric-shapes">
                <div className="shape-circle"></div>
                <div className="shape-semicircle"></div>
                <div className="shape-rounded-rect"></div>
              </div>
              
              <div className="analytics-cards">
                <div className="analytics-card-new">
                  <div className="card-image">
                    <div className="analytics-visual">📊</div>
                  </div>
                  <div className="card-content">
                    <h4>Real-time Analytics</h4>
                    <p className="card-date">Live Dashboard | Active Now</p>
                  </div>
                </div>
                
                <div className="analytics-card-new">
                  <div className="card-image">
                    <div className="analytics-visual">🎯</div>
                  </div>
                  <div className="card-content">
                    <h4>Engagement Monitoring</h4>
                    <p className="card-date">87% Average | +5% Improvement</p>
                  </div>
                </div>
                
                <div className="analytics-card-new">
                  <div className="card-image">
                    <div className="analytics-visual">🤖</div>
                  </div>
                  <div className="card-content">
                    <h4>AI Interventions</h4>
                    <p className="card-date">3 Active | Real-time Support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="showcase-right">
              <div className="showcase-content">
                <p className="showcase-label">Real-time Insights</p>
                <h3>Advanced Classroom Analytics</h3>
                <p className="showcase-description">
                  Monitor student engagement, track comprehension rates, and receive AI-powered insights 
                  in real-time. Our advanced analytics help teachers make data-driven decisions to 
                  enhance learning outcomes and provide personalized support.
                </p>
                <button className="showcase-btn">View Analytics</button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="features-showcase-new">
          <div className="showcase-container reverse">
            <div className="showcase-left">
              <div className="geometric-shapes">
                <div className="shape-circle green"></div>
                <div className="shape-triangle"></div>
                <div className="shape-rounded-rect green"></div>
              </div>
              
              <div className="features-cards">
                <div className="feature-card-new">
                  <div className="card-image">
                    <div className="feature-visual">🎥</div>
                  </div>
                  <div className="card-content">
                    <h4>HD Video Streaming</h4>
                    <p className="card-date">Adaptive Quality | Multi-device</p>
                  </div>
                </div>
                
                <div className="feature-card-new">
                  <div className="card-image">
                    <div className="feature-visual">🤖</div>
                  </div>
                  <div className="card-content">
                    <h4>AI Teaching Assistant</h4>
                    <p className="card-date">24/7 Support | Personalized Help</p>
                  </div>
                </div>
                
                <div className="feature-card-new">
                  <div className="card-image">
                    <div className="feature-visual">📱</div>
                  </div>
                  <div className="card-content">
                    <h4>Multi-Device Support</h4>
                    <p className="card-date">Tablets, Laptops | Interactive Boards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="showcase-right">
              <div className="showcase-content">
                <p className="showcase-label">Advanced Features</p>
                <h3>Next-Generation Learning Tools</h3>
                <p className="showcase-description">
                  Experience cutting-edge educational technology with HD video streaming, 
                  AI-powered teaching assistance, and seamless multi-device support. 
                  Our platform adapts to your needs and enhances the learning experience.
                </p>
                <button className="showcase-btn">Explore Features</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Engagement Tools Showcase */}
      <div className="engagement-showcase">
        <div className="showcase-container">
          <div className="showcase-left">
            <div className="geometric-shapes">
              <div className="shape-circle purple"></div>
              <div className="shape-hexagon"></div>
              <div className="shape-rounded-rect purple"></div>
            </div>
            
            <div className="engagement-cards">
              <div className="engagement-card-new">
                <div className="card-image">
                  <div className="engagement-visual">🎮</div>
                </div>
                <div className="card-content">
                  <h4>Interactive Polls</h4>
                  <p className="card-date">Real-time Feedback | Instant Results</p>
                </div>
              </div>
              
              <div className="engagement-card-new">
                <div className="card-image">
                  <div className="engagement-visual">🏆</div>
                </div>
                <div className="card-content">
                  <h4>Gamification</h4>
                  <p className="card-date">Points & Badges | Achievement System</p>
                </div>
              </div>
              
              <div className="engagement-card-new">
                <div className="card-image">
                  <div className="engagement-visual">👥</div>
                </div>
                <div className="card-content">
                  <h4>Breakout Rooms</h4>
                  <p className="card-date">Small Groups | Collaborative Learning</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="showcase-right">
            <div className="showcase-content">
              <p className="showcase-label">Student Engagement</p>
              <h3>Interactive Learning Tools</h3>
              <p className="showcase-description">
                Boost student participation with interactive polls, gamification elements, 
                and collaborative breakout rooms. Our engagement tools keep students 
                actively involved and motivated throughout the learning process.
              </p>
              <button className="showcase-btn">Try Engagement Tools</button>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Dashboard Showcase */}
      <div className="dashboard-showcase">
        <div className="showcase-container reverse">
          <div className="showcase-left">
            <div className="geometric-shapes">
              <div className="shape-circle orange"></div>
              <div className="shape-diamond"></div>
              <div className="shape-rounded-rect orange"></div>
            </div>
            
            <div className="dashboard-cards">
              <div className="dashboard-card-new">
                <div className="card-image">
                  <div className="dashboard-visual">📊</div>
                </div>
                <div className="card-content">
                  <h4>Performance Analytics</h4>
                  <p className="card-date">Detailed Reports | Progress Tracking</p>
                </div>
              </div>
              
              <div className="dashboard-card-new">
                <div className="card-image">
                  <div className="dashboard-visual">⚡</div>
                </div>
                <div className="card-content">
                  <h4>Quick Actions</h4>
                  <p className="card-date">One-Click Tools | Instant Access</p>
                </div>
              </div>
              
              <div className="dashboard-card-new">
                <div className="card-image">
                  <div className="dashboard-visual">📋</div>
                </div>
                <div className="card-content">
                  <h4>Lesson Planning</h4>
                  <p className="card-date">AI-Assisted | Standards Aligned</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="showcase-right">
            <div className="showcase-content">
              <p className="showcase-label">Teacher Dashboard</p>
              <h3>Comprehensive Teaching Hub</h3>
              <p className="showcase-description">
                Access powerful analytics, quick action tools, and AI-assisted lesson 
                planning from one centralized dashboard. Streamline your teaching 
                workflow and focus on what matters most - your students.
              </p>
              <button className="showcase-btn">Explore Dashboard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveClassroom;