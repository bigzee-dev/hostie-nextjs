import React from 'react'
import HeaderOne from '../home-one/Header'
import ResellerHostingBanner from './ResellerHostingBanner'
import AboutReseller from '../about/Reseller'
import HomeFourPricing from '../home-four/Pricing'
import ResellerHostingFeature from './ResellerHostingFeature'
import AboutTestimonials from '../about/Testimonial'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function ResellerHosting() {
  return (
    <div className='page-template template-resell'>
        <HeaderOne />
        <ResellerHostingBanner />
        <AboutReseller />
        <HomeFourPricing />
        <ResellerHostingFeature />
        <AboutTestimonials className=""/>
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default ResellerHosting