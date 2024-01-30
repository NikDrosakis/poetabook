import React from "react";
import Header from '../components/Header';
import Banner from '../components/Banner';
import MainHome from '../components/MainHome';
import Footer from '../components/Footer';

const Home=()=> {
  return (
    <div id="page-wrapper">
      <Header />
      <Banner />
      <MainHome />
      <Footer />
    </div>
  )
}
export default Home;