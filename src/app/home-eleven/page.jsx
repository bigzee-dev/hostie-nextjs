import React from 'react'
import HeaderEleven from './Header'
import HomeElevenBanner from './Banner'
import HomeElevenDomainPricing from './DomainPricing'
import HomeElevenPricing from './Pricing'
import HomeElevenFindDomain from './FindDomain'
import HomeElevenWhyChoose from './WhyChooseUs'
import HomeElevenTestimonials from './Testimonial'
import HomeElevenFaq from './Faq'
import HomeElevenCta from './Cta'
import HomeElevenFooter from './Footer'

function HomeEleven() {
  return (
    <div className='style__eleven'>
        <HeaderEleven />
        <HomeElevenBanner />
        <HomeElevenDomainPricing className="domain__listing"/>
        <HomeElevenPricing />
        <HomeElevenFindDomain />
        <HomeElevenWhyChoose className="whychoose__eleven"/>
        <HomeElevenTestimonials />
        <HomeElevenFaq />
        <HomeElevenCta />
        <HomeElevenFooter />
    </div>
  )
}

export default HomeEleven