import React from 'react'
import HeroParticles from '../../molecules/container/HomeHero/HeroParticles'
import HomeHeroLeft from '../../molecules/container/HomeHero/HomeHeroLeft'
import HomeHeroRight from '../../molecules/container/HomeHero/HomeHeroRight'
import Navigation from '../Navigation'

const HomeHero : React.FC = () => {
    return (
        <div className='relative'>
            <Navigation
                logo='./logo-2.svg'
                classes='py-5 z-30'
            />

            <div className='relative z-10 px-5 lg:px-28 xl:px-44 mx-auto flex flex-row flex-wrap lg:flex-nowrap items-center'>
                <HomeHeroLeft />
                <HomeHeroRight />
            </div>
            <HeroParticles />
        </div>
    )
}

export default HomeHero
