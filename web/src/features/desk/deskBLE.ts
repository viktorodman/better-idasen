import { DeskIds, deskRequestOptions } from './deskOptions'

export const pairDesk = async () => {
  const pairedDevice = await navigator.bluetooth.requestDevice(deskRequestOptions)
  return pairedDevice.gatt?.connect()
}

export const getDeskPosition = async (deskGattServer: BluetoothRemoteGATTServer) => {
  const deskPosCharacteristic = await getDeskPosCharacteristic(deskGattServer)
  const posBuffer = (await deskPosCharacteristic.readValue()).buffer

  return new Uint16Array(posBuffer)[0]
}

const getDeskPosCharacteristic = async (deskGattServer: BluetoothRemoteGATTServer) => {
  const deskPosPrimaryService = await deskGattServer?.getPrimaryService(DeskIds.POSITION_SERVICE_ID)

  return await deskPosPrimaryService?.getCharacteristic(DeskIds.POSITION_CHAR_ID)
}
