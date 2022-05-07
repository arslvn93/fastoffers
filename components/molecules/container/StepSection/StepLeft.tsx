import React from 'react'
import TextTitleBorder from '../../../atoms/text/TextTitleBorder'
import TextTitleBorderAnim from '../../../atoms/text/TextTitleBorderAnim'

const StepLeft : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full lg:w-5/12'>
            <TextTitleBorderAnim
                text='we help agents draft offers'
                textBordered='faster'
                classes='mb-7'
            />

            <p className='leading-relaxed mb-3 text-lg'>
                We know that in real estate, every minute counts. Fast Offers
                saves time by assembling the initial offer for you with just a few clicks!
            </p>

            <p className='leading-relaxed mb-3 text-lg'>
                We have designed this tool specifically for the needs of real estate
                agents – so you can spend less time drafting offers and more time closing
                deals!
            </p>
        </div>
    )
}

export default StepLeft
