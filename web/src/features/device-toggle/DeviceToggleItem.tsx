import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

type DeviceToggleItemProps = {}

const DeviceToggleItem = ({}: DeviceToggleItemProps) => {
  return (
    <div className='w-full flex justify-center flex-col items-center space-y-6'>
      <div className='space-y-4'>
        <div className='w-1/6'>
          <h1 className='text-3xl text-white font-bold'>Desk Something</h1>
        </div>
        <div>
          <button
            type='button'
            className='text-white bg-mah-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <span className='pr-2'>Something</span>
            <AiOutlineArrowRight className='' size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeviceToggleItem
