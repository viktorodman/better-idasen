import React from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import { IoStop } from 'react-icons/io5'

const ManualControls = () => {
  return (
    <div className='w-full h-1/6 flex justify-center pt-8 space-x-2'>
      <button className='rounded-full h-14 w-14 bg-secondary border-supa-grey border flex justify-center items-center'>
        <FiArrowUp size={26} className='text-blue-400' />
      </button>
      <button className='rounded-full h-14 w-14 bg-secondary border-supa-grey border flex justify-center items-center'>
        <FiArrowDown size={26} className='text-blue-400' />
      </button>
      <button className='rounded-full h-14 w-14 bg-secondary border-supa-grey border flex justify-center items-center'>
        <IoStop size={26} className='text-red-400' />
      </button>
    </div>
  )
}

export default ManualControls
