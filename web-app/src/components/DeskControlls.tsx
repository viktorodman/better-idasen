import { ArrowDownwardOutlined, ArrowUpward, ArrowUpwardOutlined, Stop } from '@mui/icons-material'
import { Button, ButtonGroup, IconButton } from '@mui/material'
import React from 'react'
import { TableActions } from '../enums/TableActions'
import { TableIds } from '../enums/TableIds'
import { hexStrToArray } from '../helpers/general'

type Props = {
    service: BluetoothRemoteGATTService
}

const DeskControlls = (props: Props) => {
    const sendActionToDesk = async (actionId: string) => {
        if (!props.service) throw new Error("Cant do that action")

        const char = await props.service.getCharacteristic(TableIds.CHAR_ID)
        await char.writeValue(hexStrToArray(actionId))
    }

    const handleButtonUpPress = async () => {
        console.log("up");
        await sendActionToDesk(TableActions.UP);
    }
    const handleButtonDownPress = async () => {
        console.log("down");
        await sendActionToDesk(TableActions.DOWN);
    }
    const handleButtonStopPress = async () => {
        console.log("stop");
        await sendActionToDesk(TableActions.STOP);
    }

    return (

        <ButtonGroup sx={{ padding: "10px", color: "white" }}>
            <Button sx={{ color: 'white' }} startIcon={<ArrowUpwardOutlined />} onClick={handleButtonUpPress}>Up</Button>
            <Button sx={{ color: 'white' }} startIcon={<ArrowDownwardOutlined />} onClick={handleButtonDownPress}>Down</Button>
            <Button sx={{ color: 'white' }} startIcon={<Stop />} onClick={handleButtonStopPress}>Stop</Button>
            {/* <IconButton>
                    <ArrowUpwardOutlined />
                </IconButton>
                <IconButton>
                    <ArrowDownwardOutlined />
                </IconButton>
                <IconButton>
                    <Stop />
                </IconButton> */}

        </ButtonGroup>
    )
}

export default DeskControlls