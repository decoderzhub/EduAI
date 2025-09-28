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
                        src={`https://images.pexels.com/photos/${
                          index === 0 ? '8923659' : // Alex - young student boy
                          index === 1 ? '8923661' : // Sarah - young student girl
                          index === 2 ? '8923663' : // Mike - young student boy
                          index === 3 ? '8923665' : // Emma - young student girl
                          '8923667' // James - young student boy
                        }/pexels-photo-${
                          index === 0 ? '8923659' : 
                          index === 1 ? '8923661' : 
                          index === 2 ? '8923663' : 
                          index === 3 ? '8923665' : 
                          '8923667'
                        }.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face`}
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
        <div className="analytics-dashboard">
          <h3>📊 Real-time Classroom Analytics</h3>
          <div className="analytics-grid">
            <div className="analytics-card">
              <div className="analytics-icon">👥</div>
              <div className="analytics-content">
                <div className="analytics-value">87%</div>
                <div className="analytics-label">Average Engagement</div>
                <div className="analytics-trend positive">+5% from last class</div>
              </div>
            </div>
            
            <div className="analytics-card">
              <div className="analytics-icon">🎯</div>
              <div className="analytics-content">
                <div className="analytics-value">92%</div>
                <div className="analytics-label">Comprehension Rate</div>
                <div className="analytics-trend positive">+8% improvement</div>
              </div>
            </div>
            
            <div className="analytics-card">
              <div className="analytics-icon">⚡</div>
              <div className="analytics-content">
                <div className="analytics-value">3</div>
                <div className="analytics-label">AI Interventions</div>
                <div className="analytics-trend neutral">Real-time support</div>
              </div>
            </div>
            
            <div className="analytics-card">
              <div className="analytics-icon">📝</div>
              <div className="analytics-content">
                <div className="analytics-value">15</div>
                <div className="analytics-label">Questions Answered</div>
                <div className="analytics-trend positive">By AI Assistant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="features-showcase">
          <h3>🚀 Advanced Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h4>HD Video Streaming</h4>
              <p>Crystal clear video with adaptive quality based on connection</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h4>AI Teaching Assistant</h4>
              <p>Real-time support, question answering, and personalized help</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Engagement Monitoring</h4>
              <p>Track student attention and participation in real-time</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h4>Auto Recording</h4>
              <p>Automatic session recording with AI-generated transcripts</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Smart Interventions</h4>
              <p>AI identifies struggling students and suggests immediate help</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h4>Multi-Device Support</h4>
              <p>Works seamlessly on tablets, laptops, and interactive whiteboards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveClassroom;