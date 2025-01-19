import React from 'react'
import HeaderEight from './Header'
import HomeEightBanner from './Banner'
import HomeEightFeature from './Feature'
import HomeEightPricing from './Pricing'
import HomeEightSupportFeature from './SupportFeature'
import HomeEightTestimonials from './Testimonial'
import HomeEightCloudFeature from './CloudFeature'
import HomeEightCta from './Cta'
import HomeThreeFooter from '../home-three/Footer'

function HomeEight() {
  return (
    <div className='cloud__hosting'>
        <HeaderEight />
        <HomeEightBanner />
        <HomeEightFeature />
        <HomeEightPricing />
        <HomeEightSupportFeature />
        <HomeEightTestimonials />
        <HomeEightCloudFeature />
        <HomeEightCta />
        <HomeThreeFooter />
    </div>
  )
}

export default HomeEight