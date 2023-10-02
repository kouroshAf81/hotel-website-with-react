import React from 'react'
import DestinationHome from '../HomeSection/destina/DestinationHome'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import { MostPopular } from '../HomeSection/popular/MostPopular'
import Download from '../HomeSection/Downlaod/Download'
import Work from '../HomeSection/work/Work'
import Gallery from '../HomeSection/gallery/Gallery'

const Home = () => {
  return (
    <>
        <Hero />
        <HomeAbout />
        <MostPopular />
        <DestinationHome />
        <Download />
        <Work />
        <Gallery />
    </>
  )
}

export default Home 