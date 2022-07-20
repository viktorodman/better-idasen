import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [device, setDevice] = useState<any>(null);
  const [server, setServer] = useState<any>(null);
  const [service, setService] = useState<any>(null);
  const serviceID = '99fa0001-338a-1024-8a49-009c0215f78a'
  const positionServiceID = '99fa0020-338a-1024-8a49-009c0215f78a'
  const charID = '99fa0002-338a-1024-8a49-009c0215f78a'

  /* useEffect(() => {
    const getDevices = async () => {
      const navigatorObject: any = window.navigator;
      const btDevices = await navigatorObject.bluetooth.requestDevice({
        optionalServices: ["battery_service", "device_information"],
        acceptAllDevices: true,
      });

      console.log(btDevices)
      setDevices(btDevices)
    }

    getDevices().catch(console.error)

  }, [devices]) */

  const findDevice = async () => {
    const navigatorObject: any = window.navigator;
    const btDevice = await navigatorObject.bluetooth.requestDevice({
      optionalServices: [serviceID, positionServiceID],
      acceptAllDevices: true,
    }).catch((error: any) => { console.log(error.message) })

    setDevice(btDevice)

    btDevice.addEventListener('gattserverdisconnected', () => console.log("first"))

    console.log(btDevice)
  }

  const connect = async () => {
    if (!device) throw "Device is not connected!"

    const gattServer = await device.gatt.connect()
    console.log(gattServer)

    const primaryService = await gattServer.getPrimaryService(serviceID)
    console.log(primaryService)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BETTER IDÅSEN</h1>
        <button onClick={async () => { await findDevice() }} >Find Device</button>
        <h1>Found device: {device === null ? "No device connected" : device.name}</h1>
        {device !== null ? <button onClick={async () => await connect()} >Connect</button> : null}
      </header>
    </div>
  );
}

export default App;
