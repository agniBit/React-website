import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Banner from '../Banner';
import About from '../About'
import Services from '../Services';

function Home() {
  return (
    <>
      <Banner />
      <Cards />
      <Services />
      <About />
      <Footer />
    </>
  );
}

export default Home;
