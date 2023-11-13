import React from 'react';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="home">
      </section>
      <section id="test">
      </section>
      <section id="about">
      </section>
      <section id="contact-us">
      </section>
      <Footer id="footer"/>
      
    </>
  );
}
