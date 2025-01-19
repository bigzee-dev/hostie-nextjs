import React from 'react'
import HeaderOne from '../home-one/Header'
import PricingBanner from '../pricing/Banner'
import HomeTwoPricing from '../home-two/Pricing'
import AffiliateTestimonials from '../affiliate/AffiliateTestimonials'
import HomeThreeFooter from '../home-three/Footer'
import HomeEightCta from '../home-eight/Cta'

function PricingTwo() {
  return (
    <div className='page-template template-pricing'>
        <HeaderOne />
        <PricingBanner />
        <HomeTwoPricing />
        <AffiliateTestimonials className="pt--0"/>
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default PricingTwo