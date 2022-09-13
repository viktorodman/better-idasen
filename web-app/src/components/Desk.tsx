import { Paper, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react'
import { TableIds } from '../enums/TableIds';
import DeskControlls from './DeskControlls';

type Props = {
  pairedDesk: BluetoothRemoteGATTServer,
  onConnectError: (errorMessage: string) => void
}

const Desk = (props: Props) => {
  const [position, setPosition] = useState<number>(0);
  const [primaryService, setPrimaryService] = useState<BluetoothRemoteGATTService | null>(null);
  const [posCharacteristic, setPosCharacteristic] = useState<BluetoothRemoteGATTCharacteristic | null>(null);


  const initianlize = useCallback(
    async () => {
      const primaryService = await props.pairedDesk.getPrimaryService(
        TableIds.PRIMARY_SERVICE_ID
      );

      if (primaryService) return setPrimaryService(primaryService);

      props.onConnectError("Could not connect to desk")
    },
    []
  );

  const setUpDeskPosition = useCallback(
    async () => {
      const deskPosCharacteristic = await getDeskPosCharacteristic(props.pairedDesk)

      await setUpPositionNotifications(deskPosCharacteristic);
      await setStartPosition(deskPosCharacteristic);
    },
    []
  )

  const getDeskPosCharacteristic = async (gattServer: BluetoothRemoteGATTServer) => {
    const deskPosPrimaryService = await gattServer?.getPrimaryService(
      TableIds.POSITION_SERVICE_ID
    );

    return await deskPosPrimaryService?.getCharacteristic(
      TableIds.POSITION_CHAR_ID
    );
  }

  const setStartPosition = async (deskPosCharacteristic: BluetoothRemoteGATTCharacteristic) => {
    const posBuffer = (await deskPosCharacteristic.readValue()).buffer;
    setPosition(new Uint16Array(posBuffer)[0]);
  }


  const setUpPositionNotifications = async (deskPosCharacteristic: BluetoothRemoteGATTCharacteristic) => {
    if (deskPosCharacteristic) {
      deskPosCharacteristic?.startNotifications();
      deskPosCharacteristic.addEventListener('characteristicvaluechanged', handlePositionChange);
    }
  }

  const handlePositionChange = (e: Event) => {
    if (e !== null && (e.target as BluetoothRemoteGATTCharacteristic)) {
      const buffer = (e.target as BluetoothRemoteGATTCharacteristic).value?.buffer;
      if (buffer) {
        const currentPos = new Uint16Array(buffer)[0];
        console.log(currentPos);
        setPosition(currentPos);
      }
    }
  }

  const disconnectFromTable = useCallback(
    async () => {
      if (posCharacteristic) {
        await posCharacteristic.stopNotifications();
        posCharacteristic.removeEventListener('characteristicvaluechanged', handlePositionChange);
        props.pairedDesk.disconnect();
        setPrimaryService(null);
        setPosCharacteristic(null);
        setPosition(0);
      }
    },
    []
  )

  useEffect(() => {
    initianlize();
    setUpDeskPosition();
    return () => {
      disconnectFromTable()
    }
  }, [initianlize, setUpDeskPosition, disconnectFromTable]);
  console.log('Render Desk')
  return (
    <div>
      <h2>Desk</h2>
      <Typography>Current Pos: {position}</Typography>
      {primaryService != null ? <DeskControlls service={primaryService} /> : null}
    </div>
  )
}

export default Desk