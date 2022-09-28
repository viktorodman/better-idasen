import React from 'react'
import DeviceToggle from '../../../features/device-toggle/DeviceToggle'
import Desk from '../../../features/desk/Desk'
type CenterContentProps = {}

const CenterContent = ({}: CenterContentProps) => {
  return (
    <div className='w-full h-2/6 bg-dark-two flex-none py-20'>
      <DeviceToggle />
    </div>
  )
}

export default CenterContent
