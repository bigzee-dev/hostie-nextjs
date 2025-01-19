import React from 'react'
import HeaderOne from '../home-one/Header'
import VpsHostingBanner from './VpsHostingBanner'
import VpsHostingFeature from './VpsHostingFeature'
import HomeFourPricing from '../home-four/Pricing'
import VpsHostingPerformance from './VpsHostingPerformance'
import VpsHostingFeatureTwo from './VpsHostingFeatureTwo'
import AboutTestimonials from '../about/Testimonial'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function VpsHosting() {
  return (
    <div className='vps-hosting page-template'>
        <HeaderOne />
        <VpsHostingBanner />
        <VpsHostingFeature />
        <HomeFourPricing />
        <VpsHostingPerformance />
        <VpsHostingFeatureTwo />
        <AboutTestimonials className=""/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default VpsHosting