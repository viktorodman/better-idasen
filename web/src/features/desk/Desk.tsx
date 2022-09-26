import React from 'react'
import { FiArrowDown, FiArrowUp, FiBluetooth } from 'react-icons/fi'
import { GiDesk } from 'react-icons/gi'
import { IoStop } from 'react-icons/io5'
import ControlButtons from './control-buttons/ControlButtons'

import UnitSelector from './unit-selector/UnitSelector'
import Info from './info/Info'
import { useAppSelector } from '../../app/hooks'
import { selectDeskGattServer, selectIsConnected } from './deskSlice'
import Connect from './connect/Connect'

type DeskControllerProps = {}

const DeskController = ({}: DeskControllerProps) => {
  const isConnected = useAppSelector(selectIsConnected)
  const deskGattServer = useAppSelector(selectDeskGattServer)

  if (deskGattServer) {
  }

  return (
    <>
      <Connect hidden={isConnected} />
      <div className={`${isConnected ? 'contents' : 'hidden'}`}>
        <UnitSelector />
        <Info />
        <ControlButtons />
      </div>
    </>
  )
}

export default DeskController
