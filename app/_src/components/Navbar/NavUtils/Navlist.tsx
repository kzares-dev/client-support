'use client'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
    main: string,
    submain: string,
    Icon: any
}

const Navlist = ({ main, submain, Icon }: Props) => {
    const [focus, setFocus] = useState<boolean>(false)
    return (
        <Link href="#" onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} className='py-3 flex items-center space-x-3 cursor-pointer'>
            <Icon strokeWidth={1} size={30} color={focus ? "rgb(37 99 235)" : "rgb(38 38 38)"} />
            <div className={`${focus ? "text-blue-600" : "text-neutral-500"} transition ease-in duration-100   text-[14px]`}>
                <div className={`font-semibold transition ease-in duration-100  ${focus ? "text-blue-600" : "text-neutral-800"} text-base leading-5`}>{main}</div>
                {submain}
            </div>
        </Link >
    )
}

export default Navlist