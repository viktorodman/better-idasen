import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { IoMdStarOutline } from 'react-icons/io'
import DeviceSelector from '../../features/device-selector/DeviceSelector'
import DeviceToggle from '../../features/device-toggle/DeviceToggle'
import BottomContent from './bottom-content/BottomContent'
import CenterContent from './center-content/CenterContent'
import TopContent from './top-content/TopContent'

type ContentProps = {}

const Content = ({}: ContentProps) => {
  return (
    <div className='min-h-screen bg-primary grow flex flex-col'>
      <TopContent />
      <CenterContent />
      <BottomContent />
    </div>
  )
}

export default Content
