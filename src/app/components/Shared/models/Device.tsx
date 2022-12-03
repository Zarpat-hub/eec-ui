export interface DEVICE {
  modelIdentifier: string
  deviceName: string
  annualCost: number
  energyEfficencyClass: string
  category: string
  powerConsumption: number
  manufacturer: string
  ecoScore?: number
  upgrade?: DEVICE[]
}
export interface STATE {
  energyCost: number
  waterCost: number
  devices: DEVICE[]
  activeDevice: DEVICE
}
export interface PAYLOAD {
  modelIdentifier?: string
  device?: DEVICE
}

export interface ACTION {
  type: string
  payload: PAYLOAD
}
