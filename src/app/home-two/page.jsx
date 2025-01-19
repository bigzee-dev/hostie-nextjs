
import React from 'react'
import HeaderOne from '../home-one/Header';
import HomeTwoBanner from './Banner';
import HomeTwoDs from './Ds';
import HomeTwoService from './Service';
import HomeTwoPricing from './Pricing';
import HomeTwoCta from './Cta';
import HomeTwoHosting from './Hosting';
import HomeTwoTestimonials from './Testimonial';
import HomeTwoHostingFeature from './Feature';
import HometwoBlog from './Blog';
import HomeTwoFooter from './Footer';

function Home() {
  return (
    <div className='page-template template-two'>
      <HeaderOne />
      <HomeTwoBanner />
      <HomeTwoDs />
      <HomeTwoService />
      <HomeTwoPricing className="pricing__bg"/>
      <HomeTwoCta />
      <HomeTwoHosting />
      <HomeTwoTestimonials />
      <HomeTwoHostingFeature />
      <HometwoBlog />
      <HomeTwoFooter />
    </div>
  )
}

export default Home
