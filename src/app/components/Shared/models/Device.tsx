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
  uuid: string
}
export type STATE = {
  energyCost: number
  waterCost: number
  devices?: DEVICE[]
  upgrades?: any
  activeDevice?: DEVICE
  suggestedDevice?: DEVICE
}
export type PAYLOAD = {
  modelIdentifier?: string
  device?: DEVICE
  category?: any
  index?: number
  energyClass?: string
  uuid?: string
  energyCost?: number
  waterCost?: number
}

export type ACTION = {
  type: string
  payload: PAYLOAD
}

export enum DEVICE_CATEGORIES {
  FRIDGE = 'refrigeratingappliances2019',
  OVEN = 'ovens',
  AIRCONDITIONER = 'airconditioners',
  WASHING_MASHINE = 'washingmachines2019',
  DISH_WASHER = 'dishwashers2019',
}
