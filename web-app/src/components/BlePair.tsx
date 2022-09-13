import { Bluetooth } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState } from 'react'
import { TableIds } from '../enums/TableIds';

type Props = {
    onPair: (bleDevice: BluetoothRemoteGATTServer) => void,
    onError: (message: string) => void,
    bleRequestDeviceOptions: RequestDeviceOptions
    buttonText?: string,
}


const BlePair = (props: Props) => {
    console.log('Render Pair')
    const selectFromAvailableDevices = async () => {
        const pairedDevice = await navigator
            .bluetooth
            .requestDevice(props.bleRequestDeviceOptions)
            .catch(
                (error: Error) => { props.onError(error.message) }
            );

        /* const gattServer = await pairedDevice. */

        console.log(pairedDevice);
        if (pairedDevice) {
            const gattServer = await pairedDevice.gatt?.connect()

            if (gattServer) {
                props.onPair(gattServer);
                return;
            }
        }

        props.onError("Cant connect to device")
        /* if (pairedDevice) props.onPair(pairedDevice); */
    }

    return (
        <Button variant='outlined' startIcon={<Bluetooth />} onClick={selectFromAvailableDevices}>
            {props.buttonText ? props.buttonText : "Pair Device"}
        </Button>
    )
}

export default BlePair