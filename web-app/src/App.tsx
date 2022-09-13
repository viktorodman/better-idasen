import React, { useEffect, useState } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
/* import { Desk } from './models/Desk'; */
import { TableIds } from './enums/TableIds';
import BlePair from './components/BlePair';
import Desk from './components/Desk';

const requestOptions: RequestDeviceOptions = {
  optionalServices: [TableIds.PRIMARY_SERVICE_ID, TableIds.POSITION_SERVICE_ID],
  acceptAllDevices: true
}

const App = () => {
  const [pairedDesk, setPairedDesk] = useState<BluetoothDevice | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleConnectError = (errorMessage: string) => {
    console.log("Disconnect desk")
    setPairedDesk(null);
  }

  console.log('Render app')
  return (
    <div className="App">
      <header className="App-header">
        {
          pairedDesk ? <Desk onConnectError={handleConnectError} pairedDesk={pairedDesk} /> : null
        }

        <BlePair
          onPair={setPairedDesk}
          onError={setErrorMessage}
          buttonText="Pair Desk"
          bleRequestDeviceOptions={requestOptions}
        />
      </header>
    </div>
  );
}

export default App;
