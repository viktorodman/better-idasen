import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [device, setDevice] = useState<any>(null);
  const [server, setServer] = useState<any>(null);
  const [service, setService] = useState<any>(null);
  const [currentPos, setCurrentPos] = useState<any>(null);

  const serviceID = '99fa0001-338a-1024-8a49-009c0215f78a'
  const positionServiceID = '99fa0020-338a-1024-8a49-009c0215f78a'
  const positionCharID = '99fa0021-338a-1024-8a49-009c0215f78a'
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

    /* const gattServer = await btDevice.gatt.connect()
    console.log("Gatt Server: ", gattServer)
    const primaryService = await gattServer.getPrimaryService(serviceID)
    console.log("Primary Service ", primaryService) */
    /* const test = navigatorObject.bluetooth.requestDevice(
      { 
        optionalServices: [serviceID, positionServiceID],
        acceptAllDevices: true, 
    })
    .then((device:any) => {
  // Human-readable name of the device.
  console.log("In first then")
      console.log(device.name);

  // Attempts to connect to remote GATT Server.
    return device.gatt.connect();
    })
    .then((server:any) => { 
      console.log("In second then")
      console.log(server)
    })
    .catch((error:any) => { console.error(error); }); */

    if (btDevice) {
      
      setDevice(btDevice)
  
      btDevice.addEventListener('gattserverdisconnected', () => console.log("first"))
  
      console.log(btDevice)
    }

  }

  const connect = async () => {
    if (!device) throw "Device is not connected!"

    console.log("in connect")

    try {
      console.log(device.gatt)
      const gattServer = await device.gatt.connect()
      setServer(gattServer)
      console.log("Gatt Server: ", gattServer)
      const primaryService = await gattServer.getPrimaryService(serviceID)
      setService(primaryService)
      console.log("Primary Service ", primaryService)
    } catch (error) {
      console.log("Error")
      console.log(error)
    }

    /* const primaryService = await gattServer.getPrimaryService(serviceID)
    console.log("Primary Service " + primaryService) */
  }

  const getCurrentPos = async () => {
    const posService = await server.getPrimaryService(positionServiceID);
    const char = await posService.getCharacteristic(positionCharID);
    const value = await char.readValue()
    const readPosBuffer = await value.buffer
    console.log(readPosBuffer)
    setCurrentPos(new Uint16Array(readPosBuffer)[0])
  }

  const moveUp = async () => {
    console.log("Going up")
    const char = await service.getCharacteristic(charID)
    await char.writeValue(hexStrToArray('4700'))
    await getCurrentPos()
  }

  const moveDown = async () => {
    console.log("Going down")
    const char = await service.getCharacteristic(charID)
    await char.writeValue(hexStrToArray('4600'))
    await getCurrentPos()
  }

  const stop = async () => {
    console.log("STOOOOP")
    const char = await service.getCharacteristic(charID)
    await char.writeValue(hexStrToArray('FF00'))
    await getCurrentPos()
  }

  const hexStrToArray = (hexString:any) => {
    let decimals = []
    for (let i = 0; i < hexString.length; i += 2) {
      decimals.push(parseInt(hexString.substr(i, 2), 16))
    }
    return new Uint8Array(decimals)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BETTER IDÅSEN</h1>
        <button onClick={async () => { await findDevice() }} >Find Device</button>
        <h1>Found device: {device === null ? "No device connected" : device.name}</h1>
        <p>Gatt Server id: {server !== null ? server.device.id : ""}</p>
        <p>Gatt Service uuid: {service !== null ? service.uuid : ""}</p>
        <p>Current Pos: {currentPos !== null ? currentPos : "No pos set"}</p>
        {device !== null ? 
          (
            <div>
              <button onClick={async () => await connect()} >Connect</button>
              <button onClick={async () => await getCurrentPos()}>Get Current Pos</button>
              <button onClick={async () => await moveUp()}>Up</button>
              <button onClick={async () => await moveDown()}>Down</button>
              <button onClick={async () => await stop()}>Stop</button>
            </div>
          ) : null
          }
      </header>
    </div>
  );
}

export default App;
