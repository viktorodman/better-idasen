import React, { useState } from 'react'
import { TableIds } from '../enums/TableIds';

type Props = {
    onPair: (bleDevice: BluetoothDevice) => void,
    onError: (message: string) => void;
}

const requestOptions: RequestDeviceOptions = {
    optionalServices: [TableIds.PRIMARY_SERVICE_ID, TableIds.POSITION_SERVICE_ID],
    acceptAllDevices: true
}

const Connect = (props: Props) => {

    const findDevice = async () => {
        const bleDevice = await navigator
            .bluetooth
            .requestDevice(requestOptions)
            .catch(
                (error: Error) => { props.onError(error.message) }
            );

        console.log(bleDevice);
        if (bleDevice) props.onPair(bleDevice);
    }

    return (
        <div>Connect</div>
    )
}

export default Connect