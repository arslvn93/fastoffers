import React from 'react'
import ButtonThird from '../../../atoms/control/ButtonThird'
import TextTitleBorderAnim from '../../../atoms/text/TextTitleBorderAnim'
import { BsArrowRightShort } from 'react-icons/bs'
import ButtonFlipped from '../../../atoms/control/ButtonFlipped'
import Link from 'next/link'

const FooterLeft: React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full md:w-6/12'>
            <div className='mt-8'>
                <TextTitleBorderAnim
                    text='start your'
                    textBordered='free trial.'
                    classes='text-center md:text-left mb-8'
                />

                <div className='text-center md:inline-block'>
                    <Link href='https://forms.ltd/register'>
                        <a>
                            <ButtonThird
                                text="CLICK HERE TO BEGIN"
                                icon={BsArrowRightShort}
                                classes='py-4 px-14 rounded-full text-lg hover:bg-primary hover:text-white'
                            />
                        </a>
                    </Link>

                    <p className='text-xs mt-3 text-center text-white'>
                        totally <span className='font-bold'>free for 30 days</span>. No credit card required.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterLeft
