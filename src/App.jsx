import React, { useState } from 'react';
import { Bell, Heart, MessageCircle, Repeat2, Share, Bookmark, Send } from 'lucide-react';

const PostCard = ({ author, handle, time, content, isSubscribed }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="author-info">
          <div className="avatar"></div>
          <div>
            <strong>{author}</strong>
            <span> @{handle} • {time}</span>
          </div>
        </div>
        {!isSubscribed && <button className="btn-subscribe">Subscribe</button>}
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-media"></div>

      <div className="post-actions">
        <div className="action-item"><MessageCircle size={18} /> 24</div>
        <div className="action-item"><Repeat2 size={18} /> 5</div>
        <div className="action-item"><Heart size={18} /> 120</div>
        <div className="action-item"><Bookmark size={18} /> 8</div>
        <div className="action-item"><Share size={18} /></div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('foryou');

  return (
    <div className="app-container">
      
      <main className="main-content">
        <header className="header">
          <div className="greeting">
            <h1>Good morning, Rakibul 👋</h1>
            <p>Here's what is happening today.</p>
          </div>
          <div className="header-actions">
            <button className="btn-primary">Go Focused</button>
            <button className="btn-icon"><Bell size={20} /></button>
            <div className="avatar"></div>
          </div>
        </header>

        <div className="tabs">
          <div 
            className={`tab ${activeTab === 'foryou' ? 'active' : ''}`}
            onClick={() => setActiveTab('foryou')}
          >
            For you
          </div>
          <div 
            className={`tab ${activeTab === 'newsenders' ? 'active' : ''}`}
            onClick={() => setActiveTab('newsenders')}
          >
            New senders
          </div>
        </div>

        <div className="feed">
          <PostCard 
            author="Design Team" 
            handle="designers" 
            time="2h" 
            content="Check out the new design system updates for the Authorse v2 platform! We've made everything snappier and fully customizable."
            isSubscribed={false}
          />
          <PostCard 
            author="Engineering" 
            handle="engineers" 
            time="4h" 
            content="Backend systems have been completely refactored to support realtime AI queries."
            isSubscribed={true}
          />
          <PostCard 
            author="Product Updates" 
            handle="product" 
            time="8h" 
            content="Have you seen what we shipped this week? A new focus mode built just for you."
            isSubscribed={false}
          />
        </div>

        <div className="bottom-bar">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search or ask AI anything..." 
          />
          <button className="btn-primary" style={{ padding: '8px', display: 'flex', alignItems: 'center' }}>
            <Send size={18} />
          </button>
        </div>
      </main>

      <aside className="sidebar">
        <div className="promo-card">
          <h3>Get Pro</h3>
          <p>Unlock advanced AI queries, unlimited saves, and premium features on Authorse.</p>
          <button className="btn-primary" style={{width: '100%'}}>Upgrade Now</button>
        </div>
      </aside>
    </div>
  );
}
