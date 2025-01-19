import React from 'react'
import HeaderOne from '../home-one/Header'
import SupportBanner from './Banner'
import AboutReseller from '../about/Reseller'
import AffiliatePromote from '../affiliate/AffiliatePromote'
import PricingFaq from './Faq'
import HomeSixContact from '../home-six/Contact'
import AffiliateTestimonials from '../affiliate/AffiliateTestimonials'
import HomeEightCta from '../home-eight/Cta'
import HomeThreeFooter from '../home-three/Footer'

function Support() {
    return (
        <>
            <HeaderOne />
            <SupportBanner />
            <AboutReseller />
            <AffiliatePromote className="d-none"/>
            <PricingFaq />
            <HomeSixContact className="d-none"/>
            <AffiliateTestimonials />
            <HomeEightCta />
            <HomeThreeFooter />
        </>
    )
}

export default Support