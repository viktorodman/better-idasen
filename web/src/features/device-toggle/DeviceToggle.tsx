import { Switch } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import DeviceToggleItem from './DeviceToggleItem'
type DeviceToggleProps = {}

const DeviceToggle = ({}: DeviceToggleProps) => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className='container mx-auto flex justify-between h-full'>
      <div className='border-icon-grey border-r w-2/6 flex'>
        <DeviceToggleItem />
      </div>
      <div className='border-icon-grey  w-2/6 flex'>
        <DeviceToggleItem />
      </div>
      <div className='border-icon-grey border-l w-2/6 flex'>
        <DeviceToggleItem />
      </div>
    </div>
  )
}

export default DeviceToggle
