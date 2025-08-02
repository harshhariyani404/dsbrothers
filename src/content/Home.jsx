import React from 'react'
import HeroSection from '../sections/HeroSection'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <HeroSection
        title="D.S Brothers"
        description="Discover the timeless beauty of handcrafted jewelry that speaks elegance."
        imageUrl="https://www.shutterstock.com/image-photo/necklace-set-designed-on-black-600nw-1879916446.jpg"
        altText="Gold necklace on black background"/>
      <Services/>
    </div>
  )
}

export default Home