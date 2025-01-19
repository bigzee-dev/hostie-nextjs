import React from 'react'
import HeaderFour from './Header'
import HomeSixBanner from './Banner'
import HomeSixFeature from './Feature'
import HomeFourPricing from '../home-four/Pricing'
import HomeSixHostingFeature from './HostingFeature'
import HomeSixService from './Service'
import HomeSixBlog from './Blog'
import HomeFiveFooter from './Footer'
import HomeSixContact from './Contact'

function HomeSix() {
  return (
    <>
      <HeaderFour />
      <HomeSixBanner />
      <HomeSixFeature />
      <HomeFourPricing />
      <HomeSixHostingFeature />
      <HomeSixService />
      <HomeSixBlog />
      <HomeSixContact />
      <HomeFiveFooter />
    </>
  )
}

export default HomeSix