import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { IoMdStarOutline } from 'react-icons/io'
import DeviceSelector from '../../features/device-selector/DeviceSelector'
import DeviceToggle from '../../features/device-toggle/DeviceToggle'
import BottomContent from './bottom-content/BottomContent'
import CenterContent from './center-content/CenterContent'
import TopContent from './top-content/TopContent'
import Desk from '../../features/desk/Desk'
import Header from '../header/Header'

type ContentProps = {}

const Content = ({}: ContentProps) => {
  return (
    <div className='grow'>
      <Desk />
    </div>
  )
}

export default Content
