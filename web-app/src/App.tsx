import React, { useEffect, useState } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import { Desk } from './models/Desk';
import { TableIds } from './enums/TableIds';

const requestOptions: RequestDeviceOptions = {
  optionalServices: [TableIds.POSITION_SERVICE_ID, TableIds.POSITION_SERVICE_ID],
  acceptAllDevices: true
}

const App = () => {
  const [desk, setDesk] = useState<Desk | null>(null)

  const findDevice = async () => {
    const bluetoothDevice =
      await navigator.bluetooth.requestDevice(requestOptions)
        .catch((error: any) => { console.log(error.message) });

    if (bluetoothDevice) setDesk(new Desk(bluetoothDevice))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BETTER IDÅSEN</h1>
        <button onClick={async () => { await findDevice() }} >Find Device</button>
        <h1>Found device: {desk?.name ?? "No device connected"}</h1>
        <p>Current Pos: {desk?.currentPos ?? "No pos set"}</p>
        {desk !== null ?
          (
            <div>
              <button onClick={async () => await desk.connect()} >Connect</button>
              <button onClick={async () => await desk.moveUp()}>Up</button>
              <button onClick={async () => await desk.moveDown()}>Down</button>
              <button onClick={async () => await desk.stop()}>Stop</button>
            </div>
          ) : null
        }
      </header>
    </div>
  );
}

export default App;
