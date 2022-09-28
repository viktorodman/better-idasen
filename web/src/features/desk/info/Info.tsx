import React from 'react'
import { GiDesk } from 'react-icons/gi'
import { useAppSelector } from '../../../app/hooks'
import { selectDeskGattServer } from '../deskSlice'

type InfoProps = {}

const Info = ({}: InfoProps) => {
  const deskGattServer = useAppSelector(selectDeskGattServer)
  return (
    <div className='w-5/6 h-40 bg-secondary mx-auto rounded-3xl p-4'>
      <span className='text-text-one'>Info</span>
    </div>
    /* <div className='w-full h-full flex justify-center flex-col'>
      <div className='flex'>
        <GiDesk size={80} />

        <div className='flex flex-col justify-center'>
          <span className='uppercase text-dark-two font-bold text-xl'>
            Connected to {deskGattServer ? deskGattServer.device.name : 'Unknown'}
          </span>
          <span className='text-icon-grey font-bold text-base text-start'>Mode - Standing</span>
        </div>
      </div>
    </div> */
  )
}

export default Info
