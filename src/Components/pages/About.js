import React from 'react';
import './About.css';
import pic from '../../images/Aboutpic.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Card from '../Card';
import patphoto from '../../images/patimage.jpeg'
import taniosphoto from '../../images/taniosimage.jpeg'

const use1 = {
    name: 'Patrick Moussallem',
    description: 'Founder of Mostakbali and Software Engineer at Saint-Joseph University',
    photoUrl: patphoto,
    twitterUrl: 'https://twitter.com/patrickmslm',
    facebookUrl: 'https://www.facebook.com/johndoe',
    instagramUrl: 'https://www.instagram.com/patrickmoussallem/',
  };

  const user2 = {
    name: 'Tanios Bou Diwan',
    description: 'co-Founder of Mostakbali and Software Engineer at Saint-Joseph University',
    photoUrl: taniosphoto,
    twitterUrl: 'https://twitter.com/lebanese_wise',
    facebookUrl: 'https://www.facebook.com/tanios.boudiwan',
    instagramUrl: 'https://www.instagram.com/tanios_boudiwan/',
  };

export default function About(){
    return(
        <>
        <Navbar/>
        <section className='Aboutus'>
        <div className='about-img'>
            <img src={pic} alt='about pic' className='image'/>
        </div>
        <div className='text'>
            <h1>About us</h1>
            <hr/>
            <p>
            Welcome to Mostakbali, your compass for navigating the path to a fulfilling future career! At Mostakbali, we understand that choosing a career is a significant and sometimes daunting decision. That's why we've created a platform dedicated to guiding you through this transformative journey.

Our mission is to empower individuals like you with the tools and resources needed to make informed decisions about their future. Whether you're a student exploring options, a professional looking to make a career change, or someone seeking guidance on personal development, Mostakbali is here to support you every step of the way.
            </p>

        </div>
        </section>
        <section className='meet-our-team'>
            <h2>
                Meet Our Team
            </h2>
            <div className='cards'>
            <Card {...use1}/>
            <Card {...user2}/>
            </div>


        </section>

        <Footer/>
        
        </>


    );
}