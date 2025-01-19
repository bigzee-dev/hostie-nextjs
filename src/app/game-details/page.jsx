import React from 'react'
import HeaderFive from '../home-seven/Header'
import GameDetailsBanner from './GameDetailsBanner'
import HomeSevenPricing from '../home-seven/Pricing'
import HomeSevenPopularGame from '../home-seven/PopularGame'
import HomeSevenFooter from '../home-seven/Footer'

function GameDetails() {
    
    return (
        <div className='template-game template-game-details'>
            <HeaderFive />
            <GameDetailsBanner />
            <HomeSevenPricing />
            <HomeSevenPopularGame />
            <HomeSevenFooter />
        </div>
    )
}

export default GameDetails