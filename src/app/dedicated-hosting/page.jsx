import React from 'react'
import HeaderOne from '../home-one/Header'
import DedicatedHostingBanner from './DedicatedHostingBanner'
import DedicatedHostingFeature from './DedicatedHostingFeature'
import DedicatedHostingPricing from './DedicatedHostingPricing'
import DedicatedHostingFeatureTwo from './DedicatedHostingFeatureTwo'
import DedicatedHostingFeatureThree from './DedicatedHostingFeatureThree'
import AboutTestimonials from '../about/Testimonial'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function DedicatedHosting() {
  return (
    <div className='page-template template-dedicated'>
        <HeaderOne />
        <DedicatedHostingBanner />
        <DedicatedHostingFeature />
        <DedicatedHostingPricing />
        <DedicatedHostingFeatureTwo />
        <DedicatedHostingFeatureThree />
        <AboutTestimonials className="dedicated-feedback-bg"/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default DedicatedHosting