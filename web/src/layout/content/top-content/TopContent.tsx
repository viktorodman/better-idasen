import React from 'react'
import DeviceSelector from '../../../features/device-selector/DeviceSelector'

type TopContentProps = {}

const TopContent = ({}: TopContentProps) => {
  return (
    <div className='w-full h-2/6 bg-dark-one flex-none'>
      <div className='container mx-auto py-20 flex justify-between h-full'>
        <div className='space-y-6'>
          <div>
            <h1 className='uppercase text-mah-blue font-extrabold'>Better Idåsen</h1>
          </div>
          <div>
            <h2 className='uppercase text-white font-extrabold text-6xl'>Control your desk</h2>
          </div>
          <div className='w-5/6'>
            <span className='text-icon-grey font-extrabold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis sed sint,
              beatae illo rem tempora.
            </span>
          </div>
        </div>
        {/* <div className='grow flex justify-end'>
          <DeviceSelector />
        </div> */}
      </div>
    </div>
  )
}

export default TopContent
