import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

const Height = () => {
  return (
    <div className='w-full h-1/4 flex justify-center pt-14'>
      <div className='w-48 h-48 rounded-full bg-secondary flex flex-col justify-center items-center drop-shadow-md'>
        <span className='text-sm text-icon-grey'>Height</span>
        <span className='text-4xl'>10 cm</span>
      </div>
    </div>
  )
}

export default Height
