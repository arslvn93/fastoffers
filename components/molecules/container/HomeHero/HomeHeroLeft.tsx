import React from 'react'
import ButtonSecondary from '../../../atoms/control/ButtonSecondary'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'

const HomeHeroLeft = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full lg:w-6/12 xl:w-6/12 2xl:w-5/12'>
            <h1 className='text-gradient-green text-5xl md:text-9xl lg:text-80px xl:text-111px 2xl:text-120px font-bold leading-tight mt-5 lg:mt-8'>
            draft real estate offers in seconds
            </h1>

            <p className='leading-relaxed text-xl py-8'>
            Generate auto-populated residential lease and purchase agreements faster than you ever thought possible.
            </p>

            <div className='text-center inline-block'>
                <Link href='https://forms.ltd/register'>
                    <a>
                        <ButtonSecondary
                            text="Try it Free for 30 Days"
                            icon={BsArrowRightShort}
                            classes='py-4 px-14 rounded-full text-lg'
                        />
                    </a>
                </Link>

                <p className='text-m mt-3'>
                &#40;No credit card required&#41;
                </p>
            </div>
        </div>
    )
}

export default HomeHeroLeft
