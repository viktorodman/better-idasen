import React from 'react'
import { FiBluetooth } from 'react-icons/fi'
import { useAppDispatch } from '../../../app/hooks'
import { deskRequestOptions } from '../deskOptions'
import { connectGattServer } from '../deskSlice'

type ConnectProps = {
  hidden: boolean
}

const Connect = ({ hidden }: ConnectProps) => {
  const dispatch = useAppDispatch()
  const pair = async () => {
    const pairedDesk = await navigator.bluetooth.requestDevice(deskRequestOptions)

    if (pairedDesk) {
      connect(pairedDesk)
    }
  }

  const connect = async (desk: BluetoothDevice) => {
    if (desk.gatt) {
      const deskGattServer = await desk.gatt.connect()
      if (deskGattServer) {
        dispatch(connectGattServer(deskGattServer))
      }
    }
  }

  return (
    <div
      className={`${
        hidden ? 'hidden' : ''
      } flex flex-col justify-center items-center h-full space-y-2`}
    >
      <span className=''>Not Connected to desk</span>
      <div>
        <button
          type='button'
          onClick={pair}
          className='text-white bg-mah-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          <span className='pr-2'>Connect</span>
          <FiBluetooth className='' size={20} />
        </button>
      </div>
    </div>
  )
}

export default Connect
