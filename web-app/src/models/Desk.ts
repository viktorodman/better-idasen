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
        this._primaryService = await this._gattServer?.getPrimaryService(TableIds.PRIMARY_SERVICE_ID);
        await this._setCurrentPosition()
    }

    public async moveUp(): Promise<void> {
        await this._sendActionToDesk(TableActions.UP)
        await this._setCurrentPosition()
    }

    public async moveDown(): Promise<void> {
        await this._sendActionToDesk(TableActions.DOWN)
        await this._setCurrentPosition()
    }

    public async stop(): Promise<void> {
        await this._sendActionToDesk(TableActions.STOP)
        await this._setCurrentPosition()
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
        if (!this._currentPos || !this._gattServer) throw new Error("Cant get info from device")
        const posService = await this._gattServer.getPrimaryService(serviceId);
        const char = await posService.getCharacteristic(characteristicID);
        const value = await char.readValue()
        return value.buffer
    }
}

export { Desk }