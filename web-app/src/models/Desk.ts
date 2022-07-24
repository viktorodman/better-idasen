import { TableActions } from "../enums/TableActions";
import { TableIds } from "../enums/TableIds";
import { hexStrToArray } from "../helpers/general";


class Desk {
    private _currentPos: number = -1;
    private _primaryService?: BluetoothRemoteGATTService;
    private _gattServer?: BluetoothRemoteGATTServer;

    constructor(private readonly device: BluetoothDevice) {
    }


    public get name(): string {
        return this.device.name ?? "No name"
    }

    public get currentPos(): number {
        return this._currentPos;
    }

    public async connect(): Promise<void> {
        this._gattServer = await this.device.gatt?.connect();
        console.log(this._gattServer)
        this._primaryService = await this._gattServer?.getPrimaryService(TableIds.PRIMARY_SERVICE_ID);
        console.log(this._primaryService)
        await this.onPositionChange();
        /* await this._setCurrentPosition() */

    }

    public async moveUp(): Promise<void> {
        await this._sendActionToDesk(TableActions.UP)
        /* await this._setCurrentPosition() */
    }

    public async moveDown(): Promise<void> {
        await this._sendActionToDesk(TableActions.DOWN)
        /* await this._setCurrentPosition() */
    }

    public async stop(): Promise<void> {
        await this._sendActionToDesk(TableActions.STOP)
        /* await this._setCurrentPosition() */
    }

    private async onPositionChange() {
        const characteristic = await this._getCharacteristic(TableIds.POSITION_SERVICE_ID, TableIds.POSITION_CHAR_ID)
        await characteristic.startNotifications()
        characteristic.addEventListener('characteristicvaluechanged', (e) => {
            if (e !== null && (e.target as BluetoothRemoteGATTCharacteristic)) {
                const value = (e?.target as BluetoothRemoteGATTCharacteristic).value
                const buffer = value?.buffer
                if (buffer) this._currentPos = (new Uint16Array(buffer)[0])
                console.log(this._currentPos)
            }
        })
    }

    private async _setCurrentPosition(): Promise<void> {
        const posBuffer = await this._getInfoFromDesk(TableIds.POSITION_SERVICE_ID, TableIds.POSITION_CHAR_ID);

        this._currentPos = new Uint16Array(posBuffer)[0];
    }

    private async _sendActionToDesk(actionId: string): Promise<void> {
        if (!this._primaryService) throw new Error("Cant do that action")

        const char = await this._primaryService.getCharacteristic(TableIds.CHAR_ID)
        await char.writeValue(hexStrToArray(actionId))
    }

    private async _getInfoFromDesk(serviceId: string, characteristicID: string): Promise<ArrayBuffer> {
        const char = await this._getCharacteristic(serviceId, characteristicID)
        const value = await char.readValue()
        return value.buffer
    }

    private async _getCharacteristic(serviceId: string, characteristicID: string): Promise<BluetoothRemoteGATTCharacteristic> {
        if (!this._currentPos || !this._gattServer) throw new Error("Cant get characteristic from device")
        const posService = await this._gattServer.getPrimaryService(serviceId);
        return await posService.getCharacteristic(characteristicID);
    }
}

export { Desk }