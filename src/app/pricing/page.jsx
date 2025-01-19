import React from 'react'
import HeaderOne from '../home-one/Header'
import PricingBanner from './Banner'
import PricingPlan from './PricingPlan'
import PricingFaq from '../support/Faq'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function Pricing() {
  return (
    <div className='page-template template-pricing'>
        <HeaderOne />
        <PricingBanner />
        <PricingPlan />
        <PricingFaq />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default Pricing