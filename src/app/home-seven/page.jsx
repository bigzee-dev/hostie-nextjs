import React from 'react'
import HeaderFive from './Header'
import HomeSevenBanner from './Banner'
import HomeSevenPopularGame from './PopularGame'
import HomeSevenGameBanner from './GameBanner'
import HomeSevenFeature from './Feature'
import HomeSevenPricing from './Pricing'
import HomeSevenGameCollection from './GameCollection'
import HomeSevenTestimonials from './Testimonial'
import HomeSevenFaq from './Faq'
import HomeSevenFooter from './Footer'

function HomeSeven() {
  return (
    <div className='template-game'>
        <HeaderFive />
        <HomeSevenBanner />
        <HomeSevenPopularGame />
        <HomeSevenGameBanner />
        <HomeSevenFeature />
        <HomeSevenPricing />
        <HomeSevenGameCollection />
        <HomeSevenTestimonials />
        <HomeSevenFaq />
        <HomeSevenFooter />
    </div>
  )
}

export default HomeSeven