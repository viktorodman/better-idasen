import React from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import { IoStop } from 'react-icons/io5'

type DeskButtonsProps = {}

const DeskButtons = ({}: DeskButtonsProps) => {
  return (
    <div className='h-40'>
      <div className='w-full bg-white flex justify-center space-x-4 py-6 px-8 rounded-2xl drop-shadow'>
        <button className='flex flex-col border-accent-grey border-r grow justify-between items-center space-y-2 hover:text-gray-700'>
          <FiArrowUp size={24} className='text-dark-one' />
          <span className='text-icon-grey'>Up</span>
        </button>
        <button className='flex flex-col grow items-center space-y-2'>
          <FiArrowDown size={24} className='text-dark-one' />
          <span className='text-icon-grey'>Down</span>
        </button>
        <button className='flex flex-col border-accent-grey border-l grow items-center space-y-2'>
          <IoStop size={24} className='text-dark-one' />
          <span className='text-icon-grey'>Stop</span>
        </button>
      </div>
    </div>
  )
}

export default DeskButtons
