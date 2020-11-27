import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Banner from '../Banner';
import About from '../About'
import Services from '../Services';
import Contact from '../contact';

function Home() {
  return (
    <>
      <Banner />
      <Cards />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
