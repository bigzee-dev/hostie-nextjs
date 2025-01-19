import React from 'react'
import HeaderOne from '../home-one/Header'
import AffiliateBanner from './AffiliateBanner'
import AffiliatePricing from './AffiliatePricing'
import AffiliateEarn from './AffiliateEarn'
import AffiliateFeature from './AffiliateFeature'
import AffiliateFeatureTwo from './AffiliateFeatureTwo'
import AffiliatePromote from './AffiliatePromote'
import AffiliateTestimonials from './AffiliateTestimonials'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function Affiliate() {
  return (
    <div className='page-template template-affiliate'>
        <HeaderOne />
        <AffiliateBanner />
        <AffiliatePricing />
        <AffiliateEarn />
        <AffiliateFeature />
        <AffiliateFeatureTwo />
        <AffiliatePromote />
        <AffiliateTestimonials />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default Affiliate