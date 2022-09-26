import React from 'react'

type SideNavItemProps = {
  icon: React.ReactElement
}

const SideNavItem = ({ icon }: SideNavItemProps) => {
  return (
    <li>
      <a href='#' className='flex items-center p-2 text-3xl text-icon-grey justify-center'>
        {icon}
        {/* <span className='ml-3'></span> */}
      </a>
    </li>
  )
}

export default SideNavItem
