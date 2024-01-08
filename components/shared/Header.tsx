import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

function Header() {
    return (
        <header className='w-full bg-white border-b py-5'>
            <div className='flex-between container'>

                <div className='flex-between gap-10'>

                    <Image src="/assets/images/logo.png" width={130} height={130} alt="" />

                    <div className="hidden lg:block">
                        <NavItems />
                    </div>

                </div>

                <MobileNav />

                <div className='hidden md:flex flex-center text-left space-x-4 bg-gray-50 '>
                    <div className='lex mb-2 lg:mb-0 relative mr-4 rounded-md'>

                        <input placeholder='Search Macroclient' className='bg-gray-50 rounded-[5px] shadow-md border border-black w-[240px] px-2 h-[38px] max-h-[41px] p-[3.5px] whitespace-nowrap overflow-hidden placeholder:text-[14px] font-medium placeholder:pl-2 focus:z-10 text-[14px] focus:outline-none focus:bg-white focus:text-black  ' type='text' />

                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" className="mr-1 absolute right-0 top-[10px] max-lg:hidden"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>

                    </div>

                    <div className='max-lg:flex justify-center max-lg:mr-4 rounded-md'>
                        <Link href="/sign-in" className='hover:text-neutral-400'>Sign in</Link>
                    </div>
                    <Link href="/sign-up" className='px-2 py-[5px] border-[1px] rounded-md hover:text-neutral-400 '>Sign up</Link>





                </div>

            </div>
        </header>
    )
}

export default Header
