import React from 'react'
import { FiPlay } from 'react-icons/fi'

type BottomContentProps = {}

const BottomContent = ({}: BottomContentProps) => {
  return (
    <div className='w-full grow border-accent-grey border-l-2'>
      <div className='container mx-auto py-20 flex justify-between'>
        <div className='flex flex-col justify-between'>
          <h4 className='uppercase font-extrabold text-2xl'>Device Description</h4>
          <div className='w-3/6'>
            <span className='text-icon-grey font-extrabold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis sed sint,
              beatae illo rem tempora.
            </span>
          </div>
        </div>
        <div className='w-1/4 flex flex-col justify-between'>
          <div className='space-y-4'>
            <h4 className='uppercase font-extrabold text-2xl'>Stand for 1 hour</h4>
            <div className='w-3/6'>
              <span className='text-icon-grey font-extrabold'>Time: 60:00</span>
            </div>
            <button
              type='button'
              className='text-white bg-mah-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <span className='pr-2'>Start</span>
              <FiPlay />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomContent
