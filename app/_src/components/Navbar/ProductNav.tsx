'use client'
import React, { useState } from 'react'
import Navlist from './NavUtils/Navlist'
import Navlist2 from './NavUtils/Navlist2'

import {
    Laugh,
    Shield,
    FolderEdit,
    Key,
    Brain,
    TabletSmartphone,
    Database,
    Lightbulb,

} from "lucide-react"

type Props = {
}

const ProductNav = (props: Props) => {
    const [show, setShow] = useState(false)

    const handleOnclick = () => {
        if (window.innerWidth < 1024) {
            setShow(!show)
        }
    }

    const handleMouseEnter = () => {
        if (window.innerWidth > 1024) {
            setShow(true)
        }
    }

    const handleMouseLeave = () => {
        if (window.innerWidth > 1024) {
            setShow(false)
        }
    }
    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <button onClick={() => setShow(!show)} type='button' className={`flex items-center p-1 max-lg:font-semibold  transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${show ? "lg:text-neutral-300 " : ""}`}>
                Product
                <svg opacity="0.5" aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={` ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${show ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"}`}>
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
            </button>

            <div className={`border border-t-transparent relative lg:absolute lg:flex -ml-5 bg-white rounded-md lg:py-4 py-2 transition ease-in duration-150 ${show ? "opacity-100 " : "opacity-0 invisible max-lg:hidden"}`}>
                <div className='lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0 lg:pr-10  '>
                    <ul className='max-lg:pl-6'>
                        <Navlist
                            Icon={Laugh}
                            main='User-friendly'
                            submain='Easy to navigate and implement.'
                        />
                        <Navlist
                            Icon={Shield}
                            main='Secure'
                            submain='Ensures privacy and data protection.'
                        />
                        <Navlist
                            Icon={FolderEdit}
                            main='Customizable'
                            submain='Tailored to match brand style.'
                        />
                        <Navlist
                            Icon={Key}
                            main='Accessible'
                            submain='Always available for customer support.'
                        />
                        <Navlist
                            Icon={Brain}
                            main='Knowledgeable'
                            submain='Deep understanding of products and services.'
                        />
                        <Navlist
                            Icon={TabletSmartphone}
                            main='Responsive'
                            submain='Timely and efficient customer assistance.'
                        />
                        <Navlist
                            Icon={Database}
                            main='Integrated'
                            submain='Seamlessly works with existing systems.'
                        />
                        <Navlist
                            Icon={Lightbulb}
                            main='Innovative'
                            submain='Utilizes cutting-edge technology for enhancement.'
                        />
                    </ul>
                </div>


            </div>
        </li>
    )
}

export default ProductNav