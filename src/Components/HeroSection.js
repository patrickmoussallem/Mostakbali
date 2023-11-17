import React, { useState } from 'react';
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { useLocation } from 'react-router-dom';

function HeroSection() {

  const location = useLocation();
  const { state } = location;
  const isLoggedIn = state ? state : false;


  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>What do you want to be when you are older?</h1>
        <h3>find out by taking our test</h3>
        <div className='hero-btns'>
            <Button class='btns' to={isLoggedIn ? 'test' : 'Signin'} name='GET STARTED'/>
        </div>
      
    </div>
  )
}

export default HeroSection
