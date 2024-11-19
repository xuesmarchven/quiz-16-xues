import { useState } from 'react'
import './App.css'
import logo from './assets/logor.jpg'
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <FollowSuggestions />
    </div>
  );
};

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">SOCIO</div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Notification</li>
        <li>Messages</li>
        <li>Profile</li>
      </ul>
    </nav>
    <button className="trending-button">Trending</button>
  </div>
);

const MainContent = () => (
  <div className="main-content">
    <div className="post-section">
      <input type="text" placeholder="What happened today?" />
      <button className="share-button">Share</button>
    </div>
    <div className="feed">
      <Post username="tereke7319" time="40 days ago" content="Makan apa nich" />
      <Post username="tereke7319" time="40 days ago" content="Selamat malam" />
    </div>
  </div>
);

const Post = ({ username, time, content }) => (
  <div className="post">
    <strong>{username}</strong> {time}
    <p>{content}</p>
    <div className="engagement">
      <span>0</span>
      <span>10</span>
      <span>10</span>
    </div>
  </div>
);

const FollowSuggestions = () => (
  <div className="follow-suggestions">
    <h3>Who to follow</h3>

    <ul className='gambarone'>
      <li>tereke7319</li>
    </ul>


    <ul className='gambarK'>
      <img className='gambarKK' src={logo}></img>
      <li className='rageyo'  >rageyoc579   +</li>
    </ul>
  </div>
);

export default App;
