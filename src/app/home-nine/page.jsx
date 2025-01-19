import React from 'react'
import HeaderEight from '../home-eight/Header'
import HomeNineBanner from './Banner'
import HomeNineHostingType from './HostingType'
import HomeNineDomainFinder from './DomainFinder'
import HomeNineAbout from './About'
import HomeNinePlan from './Plan'
import HomeNineTestimonials from './Testimonial'
import HomeFaq from '../home-one/Faq'
import HomeNineContact from './Contact'
import HomeFooter from '../home-one/Footer'

function HomeNine() {
    return (
        <>
            <HeaderEight />
            <HomeNineBanner />
            <HomeNineHostingType />
            <HomeNineDomainFinder />
            <HomeNineAbout />
            <HomeNinePlan />
            <HomeNineTestimonials />
            <HomeFaq />
            <HomeNineContact />
            <HomeFooter />
        </>
    )
}

export default HomeNine