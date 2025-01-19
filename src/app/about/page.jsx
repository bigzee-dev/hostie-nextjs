import React from 'react'
import HeaderOne from '../home-one/Header'
import AboutBanner from './Banner'
import AboutReseller from './Reseller'
import AboutResellerTwo from './ResellerTwo'
import AboutDataCenter from './DataCenter'
import AboutCounterUp from './AboutCountUp'
import AboutTeam from './Team'
import AboutTestimonials from './Testimonial'
import AboutCta from './Cta'
import HomeTwoFooter from '../home-two/Footer'

function page() {
    return (
        <div className='page-template template-resell'>
            <HeaderOne />
            <AboutBanner />
            <AboutReseller />
            <AboutResellerTwo />
            <AboutDataCenter />
            <AboutCounterUp />
            <AboutTeam />
            <AboutTestimonials />
            <AboutCta />
            <HomeTwoFooter />
        </div>
    )
}

export default page