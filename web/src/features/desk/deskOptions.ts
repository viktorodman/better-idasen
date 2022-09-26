export enum DeskIds {
  PRIMARY_SERVICE_ID = '99fa0001-338a-1024-8a49-009c0215f78a',
  POSITION_SERVICE_ID = '99fa0020-338a-1024-8a49-009c0215f78a',
  POSITION_CHAR_ID = '99fa0021-338a-1024-8a49-009c0215f78a',
  CHAR_ID = '99fa0002-338a-1024-8a49-009c0215f78a',
}

export enum DeskActions {
  DOWN = '4600',
  UP = '4700',
  STOP = 'FF00',
}

export const deskRequestOptions: RequestDeviceOptions = {
  optionalServices: [DeskIds.PRIMARY_SERVICE_ID, DeskIds.POSITION_SERVICE_ID],
  acceptAllDevices: true,
}
