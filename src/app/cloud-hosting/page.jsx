import React from 'react'
import HeaderOne from '../home-one/Header'
import CloudHostingBanner from './CloudHostingBanner'
import CloudHostingFeature from './CloudHostingFeature'
import HomeFourPricing from '../home-four/Pricing'
import CloudHostingSupportFeature from './CloudHostingSupportFeature'
import AboutTestimonials from '../about/Testimonial'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function CloudHosting() {
  return (
    <div className='page-template template-cloud'>
        <HeaderOne />
        <CloudHostingBanner />
        <CloudHostingFeature />
        <HomeFourPricing />
        <CloudHostingSupportFeature />
        <AboutTestimonials className=""/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default CloudHosting