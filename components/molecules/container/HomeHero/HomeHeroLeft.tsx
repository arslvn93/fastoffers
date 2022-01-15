import React from 'react'
import ButtonSecondary from '../../../atoms/control/ButtonSecondary'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'

const HomeHeroLeft = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full lg:w-6/12 xl:w-6/12 2xl:w-5/12'>
            <h1 className='text-gradient-green text-5xl md:text-9xl lg:text-80px xl:text-111px 2xl:text-120px font-bold leading-tight mt-5 lg:mt-0'>
            draft a full real estate offer in a minute
            </h1>

            <p className='leading-relaxed text-xl py-8'>
                A real estate offer is one of the most important parts of the transaction, which is why we created Fast Offers to help you draft an offer faster than ever before.
            </p>

            <div className='text-center inline-block'>
                <Link href='https://beta.fastoffers.ca/?demo=true'>
                    <a>
                        <ButtonSecondary
                            text="Click Here for Live Demo"
                            icon={BsArrowRightShort}
                            classes='py-4 px-14 rounded-full text-lg'
                        />
                    </a>
                </Link>

                <p className='text-xs mt-3'>
                Only available for agents in the <span className='font-bold'>Greater Toronto Area</span>.
                </p>
            </div>
        </div>
    )
}

export default HomeHeroLeft
