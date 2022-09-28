import React from 'react'
import { FiArrowDown, FiArrowUp, FiBluetooth } from 'react-icons/fi'
import { GiDesk } from 'react-icons/gi'
import { IoStop } from 'react-icons/io5'
import ControlButtons from './control-buttons/ControlButtons'

import UnitToggle from './unit-toggle/UnitToggle'
import Info from './info/Info'
import { useAppSelector } from '../../app/hooks'
import { selectDeskGattServer, selectIsConnected } from './deskSlice'
import Connect from './connect/Connect'
import Height from './height/Height'

type DeskControllerProps = {}

const DeskController = ({}: DeskControllerProps) => {
  const isConnected = useAppSelector(selectIsConnected)
  const deskGattServer = useAppSelector(selectDeskGattServer)

  if (deskGattServer) {
  }

  return (
    <div className='w-full h-full flex flex-col pt-6'>
      <UnitToggle />
      <Height />
      {/* <Info /> */}

      {/*   <div className='h-2/6 flex-none w-full h-full'>
        <UnitSelector />
      </div>
      <div className='grow w-full h-full flex flex-col'>
        <Info />
      </div>
      <div className='h-80 flex-none w-full flex flex-col'>
        <ControlButtons />
      </div> */}
      {/*  <Connect hidden={isConnected} />
      <div className={`${isConnected ? 'flex' : 'hidden'} flex flex-col h-full`}>
        <UnitSelector />
        <Info />
        <ControlButtons />
      </div> */}
    </div>
  )
}

export default DeskController
