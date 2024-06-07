import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
