import React from 'react'
import { GiCog } from 'react-icons/gi'
import { ImCog } from 'react-icons/im'
import { IoMdCog } from 'react-icons/io'
import { GoSettings } from 'react-icons/go'

const Header = () => {
  return (
    <div className='w-full h-12 flex justify-between px-6 items-center bg-secondary'>
      <GoSettings className='text-icon-grey' />
    </div>
  )
}

export default Header
