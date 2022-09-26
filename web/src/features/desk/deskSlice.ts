import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { pairDesk } from './deskBLE'

export interface DeskState {
  height: number
  unit: 'cm' | 'inches'
  isConnected: boolean
  deskGattServer: BluetoothRemoteGATTServer | null
}

const initialState: DeskState = {
  height: 0,
  unit: 'cm',
  isConnected: false,
  deskGattServer: null,
}

export const deskSlice = createSlice({
  name: 'desk',
  initialState,
  reducers: {
    changeHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },
    connectGattServer: (state, action: PayloadAction<BluetoothRemoteGATTServer>) => {
      state.deskGattServer = action.payload
      state.isConnected = true
    },
    disconnectFromDesk: (state) => {
      state.height = 0
      state.isConnected = false
      state.deskGattServer = null
    },
  },
})

export const { changeHeight, connectGattServer, disconnectFromDesk } = deskSlice.actions

export const selectHeight = (state: RootState) => state.desk.height
export const selectUnit = (state: RootState) => state.desk.unit
export const selectIsConnected = (state: RootState) => state.desk.isConnected
export const selectDeskGattServer = (state: RootState) => state.desk.deskGattServer

export default deskSlice.reducer
