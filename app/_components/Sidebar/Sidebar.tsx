import Link from "next/link"


const Sidebar = () => {

  return (
    <div className={`relative rounded-md py-2 px-6 transition ease-in duration-300 text-[15px]`}>

      <div className='lg:border-b-[1px] mb-4 pb-4 w-full'>
        <span className='text-neutral-800 font-semibold text-lg'>Overview</span>
        <ul className='text-neutral-500 mt-1 w-full'>
          <li >
            <Link href="/admin/dashboard#members" className='block py-2 hover:text-blue-600'>Members</Link>
          </li>
          <li >
            <Link href="/admin/dashboard#analytics" className='block py-2 hover:text-blue-600'>Analytics</Link>
          </li>
          <li>
            <Link href="/admin/dashboard#usage" className='block py-2 hover:text-blue-600'>Usage</Link>
          </li>

        </ul>
      </div>
      <div className='lg:border-b-[1px] mb-4 pb-4 pt-2 w-full'>
        <span className='text-neutral-800 font-semibold text-lg'>Guides</span>
        <ul className='text-neutral-500 mt-1 w-full'>

          <li >
            <a href="" className='block py-2 hover:text-blue-600'>Setup guide</a>
          </li>

          <li >
            <a href="" className='block py-2 hover:text-blue-600'>Other guide</a>
          </li>

        </ul>
      </div>
      <div className='mb-4 pb-0 pt-2 w-full'>
        <span className='text-neutral-800 font-semibold text-lg'>Account</span>
        <ul className='text-neutral-500 mt-1 w-full'>
          <li >
            <a href="" className='block py-2 hover:text-blue-600'>API key</a>
          </li>

          <li >
            <a href="" className='block py-2 hover:text-blue-600'>Profile</a>
          </li>

          <li >
            <a href="" className='block py-2 hover:text-blue-600'>Upgrade</a>
          </li>

          <li >
            <a href="" className='block py-2 hover:text-blue-600'>LogOut</a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar