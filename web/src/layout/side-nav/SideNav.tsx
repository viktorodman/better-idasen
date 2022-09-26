import React from 'react'
import SideNavItem from './side-nav-item/SideNavItem'
import { HiHome, HiUser, HiOutlineDocumentReport, HiCog } from 'react-icons/hi'
import { IoMdHome } from 'react-icons/io'
import { AiOutlineReload } from 'react-icons/ai'

type SideNavProps = {}

const SideNav = ({}: SideNavProps) => {
  return (
    <aside
      className='flex-none min-h-screen w-32 bg-primary text-center w-40 flex flex-col justify-between py-14'
      aria-label='Sidebar'
    >
      <div className=''>
        <div className='inline-flex overflow-hidden relative justify-center items-center w-14 h-14 bg-dark-one rounded-full'>
          <span className='font-medium text-white'>BI</span>
        </div>
      </div>

      <ul className='space-y-10 items-center'>
        <SideNavItem icon={<IoMdHome size={34} />} />
        <SideNavItem icon={<HiCog size={34} />} />
      </ul>
      <div className='w-full space-y-4'>
        <span className='w-full text-icon-grey'>Do Stuff</span>
        <div>
          <button
            type='button'
            className='text-white bg-mah-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <AiOutlineReload size={30} />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default SideNav
