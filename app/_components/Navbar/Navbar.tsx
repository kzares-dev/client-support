'use client'
import ProductNav from './ProductNav'
import SolutionNav from './SolutionNav'
import OpenSourceNav from './OpenSourceNav'
import { useState } from 'react'
import { Logo } from '../common'

type Props = {}

const Navbar = (props: Props) => {
    const [showNav, setShowNav] = useState(false)

    return (
        <nav className='absolute w-full text-black py-5 box px-4 xl:px-[150px] lg:px-[100px] '>
            <div className='flex items-center gap-5 max-lg:justify-between max-lg:flex-row-reverse'>

                <div className='flex justify-between items-center max-lg:w-full'>


                    {/*-- Logo --*/}
                    <Logo />

                    {/*-- Responsive Nav --*/}
                    <button type='button' onClick={() => setShowNav(!showNav)} className='lg:hidden cursor-pointer '>
                        <div className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${showNav ? "rotate-45 mb-0  translate-y-[1px]" : "rotate-0 mb-1"} `}></div>
                        <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${showNav ? "hidden mb-0" : "mb-1"} `}></div>
                        <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${showNav ? "-rotate-45 mb-0" : "rotate-0"}`}></div>
                    </button>
                </div>

                <div className={` flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40  ${showNav ? "max-lg:translate-x-0 max-lg:scale-100" : " max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"}`}>
                    {/*-- Dropdowns --*/}
                    <div className='flex max-lg:flex-col lg:items-center lg:justify-between max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px]  overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg'>
                        <nav className='mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5'>
                            <ul className='flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto'>
                                <ProductNav />
                                <SolutionNav />
                                <li>
                                    <a className='max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300'>
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/*-- SignIn & SignUp --*/}
                        <div className='lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4 bg-gray-50'>
                            <div className='lg:flex mb-2 lg:mb-0 relative max-lg:mr-4'>

                                <input placeholder='Search Macroclient' className='bg-gray-50 shadow-md border max-lg:bg-gray-50 max-lg:w-full  w-[240px] lg:px-2 h-[38px] max-lg:h-[41px] p-[3.5px] whitespace-nowrap overflow-hidden placeholder:text-[14px] max-lg:placeholder:text-[16px] font-medium placeholder:pl-2 focus:z-10 text-[14px] focus:outline-none focus:bg-white focus:text-black lg:border-neutral-500 max-lg:border-neutral-300 rounded-md' type='text' />

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" className="mr-1 absolute right-0 top-[10px] max-lg:hidden"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>

                            </div>

                            <div className='max-lg:flex justify-center max-lg:border-[1px] max-lg:mr-4 rounded-md max-lg:bg-gray-800'>
                                <a href="" className='hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-semibold '>Sign in</a>
                            </div>
                            <a href="" className='max-lg:hidden px-2 py-[5px] border-[1px] rounded-md hover:text-neutral-400 '>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar