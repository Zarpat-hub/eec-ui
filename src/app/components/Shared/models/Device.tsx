export type DEVICE = {
  modelIdentifier: string
  deviceName: string
  annualCost: number
  energyEfficencyClass: string
  category: string
  upgrade?: DEVICE[]
}
export type STATE = {
  energyCost: number
  waterCost: number
  devices: DEVICE[]
  activeDevice: DEVICE
}
export type PAYLOAD = {
  modelIdentifier?: string
  device?: DEVICE
}

export type ACTION = {
  type: string
  payload: PAYLOAD
}
