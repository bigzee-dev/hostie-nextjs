import React from 'react'
import HeaderTwo from './Header'
import HomeThreeBanner from './Banner'
import HomeThreeBrand from './Brand'
import HomeThreeService from './Service'
import HomeThreePricing from './Pricing'
import HomeThreeService2 from './ServiceTwo'
import HomeThreeFeatures from './Feature'
import HomeThreeHostingFeatures from './HostingFeature'
import HomeThreeTestimonials from './Testimonial'
import HomeThreeBlog from './Blog'
import HomeThreeCta from './Cta'
import HomeThreeFooter from './Footer'

function Home() {
  return (
    <div className='home-three'>
      <HeaderTwo />
      <HomeThreeBanner />
      <HomeThreeBrand />
      <HomeThreeService />
      <HomeThreePricing />
      <HomeThreeService2 />
      <HomeThreeFeatures />
      <HomeThreeHostingFeatures />
      <HomeThreeTestimonials />
      <HomeThreeBlog />
      <HomeThreeCta />
      <HomeThreeFooter />
    </div>
  )
}

export default Home