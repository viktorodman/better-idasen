import React from 'react'
import { GiDesk } from 'react-icons/gi'
import { useAppSelector } from '../../../app/hooks'
import { selectDeskGattServer } from '../deskSlice'

type InfoProps = {}

const Info = ({}: InfoProps) => {
  const deskGattServer = useAppSelector(selectDeskGattServer)
  return (
    <div className='w-full flex justify-center flex-col space-y-2'>
      <div className='flex space-x-4'>
        <GiDesk size={80} />

        <div className='flex flex-col justify-center'>
          <span className='uppercase text-dark-two font-bold text-2xl'>
            Connected to {deskGattServer ? deskGattServer.device.name : 'Unknown'}
          </span>
          <span className='text-icon-grey font-bold text-base text-start'>Mode - Standing</span>
        </div>
      </div>
      <div className=''>
        {/*  <label
          htmlFor='default-range'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Not Implemented yet
        </label>
        <input
          id='default-range'
          type='range'
          min='0'
          max='100'
          value='20'
          className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
        /> */}
      </div>
    </div>
  )
}

export default Info
