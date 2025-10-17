import React from 'react'
import HeroSection from '../sections/HeroSection'
import Products from '../products/Products.jsx'
import Productype from '../products/Productype'
import Videos from '../products/Videos'


const Home = () => {
  return (
    <div>


      <HeroSection
        title="D.S. Brothers"
        names="Since 2008"
        description="We create customized products for you."
        videoUrl="/Videos/BG.mp4"
        altText="Background video"
      />
      {/* <HeroSection
        title="D.S Brothers"
        names=" Since 2008"
        description="Discover the timeless beauty of handcrafted jewelry that speaks elegance."
        imageUrl="https://www.shutterstock.com/image-photo/necklace-set-designed-on-black-600nw-1879916446.jpg"
        altText="Gold necklace on black background"/> */}
      <Videos />
      <Products />
    </div>
  )
}

export default Home