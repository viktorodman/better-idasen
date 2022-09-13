import { Button } from '@mui/material';
import React from 'react'

type Props = {
    onDisconnect: () => void;
}

const BleDisconnect = (props: Props) => {
    return (
        <Button
            onClick={props.onDisconnect}
            variant="outlined"
            color='error'
        /* sx={{
            color: "red",
            border: "1px solid red"
        }} */
        >
            Disconnect
        </Button>
    );
}

export default BleDisconnect