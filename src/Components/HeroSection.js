import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>What do you want to be when you are older</h1>
        <h3>find out by taking our test</h3>
        <div className='hero-btns'>
            <Button class='btns' to='Signin' name='GET STARTED'/>
        </div>
      
    </div>
  )
}

export default HeroSection
