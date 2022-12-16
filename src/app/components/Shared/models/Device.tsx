export type DEVICE = {
  modelIdentifier: string
  deviceName: string
  annualCost: number
  energyEfficiencyClass: string
  category: string
  powerConsumption: number
  manufacturer: string
  previousDevice?: DEVICE
  ecoScore?: number
  upgrade?: DEVICE[]
  upgrades?: any
}
export type STATE = {
  energyCost: number
  waterCost: number
  devices?: DEVICE[]
  upgrades?: any
  activeDevice?: DEVICE
}
export type PAYLOAD = {
  modelIdentifier?: string
  device?: DEVICE
  category?: any
}

export type ACTION = {
  type: string
  payload: PAYLOAD
}
