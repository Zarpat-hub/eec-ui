import { ACTION, DEVICE, STATE } from '../components/Shared/models/Device'

export const initialState: STATE = {
  energyCost: 1,
  waterCost: 0.44,
  devices: [
    {
      modelIdentifier: '1',
      deviceName: 'test_1',
      annualCost: 500,
      energyEfficiencyClass: 'C',
      ecoScore: 40,
      category: 'refrigeratingappliances2019',
      powerConsumption: 155,
      manufacturer: 'Bosh',
      upgrades: {
        B: [
          {
            annualCost: 477,
            ecoScore: 75,
            deviceName: 'test_1_upgraded',
            energyEfficiencyClass: 'B',
            modelIdentifier: '7525.0110',
            index: 12,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
            powerConsumption: 111,
          },
          {
            annualCost: 384,
            ecoScore: 85,
            energyEfficiencyClass: 'B',
            deviceName: 'test_1_upgraded',
            modelIdentifier: '7525.0100',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
            powerConsumption: 88,
          },
          {
            annualCost: 400,
            ecoScore: 80,
            energyEfficiencyClass: 'B',
            deviceName: 'test_1_upgraded',
            modelIdentifier: 'AR51N',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Lyfco',
            powerConsumption: 101,
          },
        ],
      },
    },
    {
      modelIdentifier: '2',
      deviceName: 'test_2',
      annualCost: 300,
      energyEfficiencyClass: 'B',
      category: 'refrigeratingappliances2019',
      powerConsumption: 200,
      ecoScore: 75,
      manufacturer: 'Samsung',
      upgrades: {
        B: [
          {
            annualCost: 240,
            ecoScore: 89,
            deviceName: 'test_2_upgraded',
            energyEfficiencyClass: 'B',
            modelIdentifier: '7525.0110',
            index: 12,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
            powerConsumption: 150,
          },
          {
            annualCost: 263,
            ecoScore: 80,
            deviceName: 'test_2_upgraded',
            energyEfficiencyClass: 'B',
            modelIdentifier: '7525.0100',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
            powerConsumption: 177,
          },
          {
            annualCost: 288,
            ecoScore: 78,
            deviceName: 'test_2_upgraded',
            energyEfficiencyClass: 'B',
            modelIdentifier: 'AR51N',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Lyfco',
            powerConsumption: 189,
          },
        ],
        A: [
          {
            annualCost: 200,
            ecoScore: 90,
            deviceName: 'test_2_upgraded',
            energyEfficiencyClass: 'A',
            modelIdentifier: 'MD 30000',
            index: 1,
            category: 'refrigeratingappliances2019',
            manufacturer: 'MEDION',
            powerConsumption: 144,
          },
          {
            annualCost: 191,
            ecoScore: 95,
            deviceName: 'test_2_upgraded',
            energyEfficiencyClass: 'A',
            modelIdentifier: 'SKF 502 W',
            index: 1,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Scandomestic A/S ',
            powerConsumption: 122,
          },
          {
            annualCost: 182,
            ecoScore: 99,
            deviceName: 'test_2_upgraded',
            energyEfficiencyClass: 'A',
            modelIdentifier: 'SL-65',
            index: 7,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Buschbeck GmbH',
            powerConsumption: 111,
          },
        ],
      },
    },
  ],
  activeDevice: {
    modelIdentifier: '2',
    deviceName: 'test_2',
    annualCost: 300,
    energyEfficiencyClass: 'B',
    category: 'refrigeratingappliances2019',
    powerConsumption: 200,
    ecoScore: 75,
    manufacturer: 'Samsung',
    upgrades: {
      B: [
        {
          annualCost: 240,
          ecoScore: 89,
          deviceName: 'test_2_upgraded',
          energyEfficiencyClass: 'B',
          modelIdentifier: '7525.0110',
          index: 12,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Combisteel',
          powerConsumption: 150,
        },
        {
          annualCost: 263,
          ecoScore: 80,
          deviceName: 'test_2_upgraded',
          energyEfficiencyClass: 'B',
          modelIdentifier: '7525.0100',
          index: 13,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Combisteel',
          powerConsumption: 177,
        },
        {
          annualCost: 288,
          ecoScore: 78,
          deviceName: 'test_2_upgraded',
          energyEfficiencyClass: 'B',
          modelIdentifier: 'AR51N',
          index: 13,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Lyfco',
          powerConsumption: 189,
        },
      ],
      A: [
        {
          annualCost: 200,
          ecoScore: 90,
          deviceName: 'test_2_upgraded',
          energyEfficiencyClass: 'A',
          modelIdentifier: 'MD 30000',
          index: 1,
          category: 'refrigeratingappliances2019',
          manufacturer: 'MEDION',
          powerConsumption: 144,
        },
        {
          annualCost: 191,
          ecoScore: 95,
          deviceName: 'test_2_upgraded',
          energyEfficiencyClass: 'A',
          modelIdentifier: 'SKF 502 W',
          index: 1,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Scandomestic A/S ',
          powerConsumption: 122,
        },
        {
          annualCost: 182,
          ecoScore: 99,
          deviceName: 'test_2_upgraded',
          energyEfficiencyClass: 'A',
          modelIdentifier: 'SL-65',
          index: 7,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Buschbeck GmbH',
          powerConsumption: 111,
        },
      ],
    },
  },
  suggestedDevice: {
    annualCost: 477.7849,
    ecoScore: 60,
    deviceName: 'test_2_upgraded',
    energyEfficiencyClass: 'B',
    modelIdentifier: '7525.0110',
    category: 'refrigeratingappliances2019',
    manufacturer: 'Combisteel',
    powerConsumption: 100,
  },
}

enum ACTIONS {
  ADD = 'add',
  REMOVE = 'remove',
  UPGRADE = 'upgrade',
  CHANGE_ACTIVE_DEVICE = 'change',
  RESTORE = 'restore',
  UPDATE_SUGGESTED_DEVICE = 'update',
}

function devicesReducer(state: any, action: ACTION): STATE {
  const { type, payload } = action

  const findDevice = () => {}

  switch (type) {
    case ACTIONS.ADD:
      return {
        ...state,
        devices: [...state.devices, payload.device],
        activeDevice: payload.device,
      }

    case ACTIONS.REMOVE:
      const index: number = state.devices.findIndex(
        (device: DEVICE) => device.modelIdentifier === payload.modelIdentifier
      )

      const devices = [...state.devices]
      devices.splice(index, 1)

      let activeDevice = {}

      // we-we-welcome in the hell we-we-welcome in the hell
      // do optymalizaji
      if (index === 0) {
        if (devices.length > 1) {
          activeDevice = devices[index]
        } else if (devices.length === 1) {
          activeDevice = devices[0]
        }
      } else {
        activeDevice = devices[index - 1]
      }
      return {
        ...state,
        devices,
        activeDevice,
      }
    case ACTIONS.UPGRADE:
      const upgradedCategory = payload.category

      const findUpgradedDevice = state.activeDevice.upgrades[
        upgradedCategory
      ].find(
        (device: DEVICE) => device.modelIdentifier === payload.modelIdentifier
      )

      const findIndex: number = state.devices.findIndex((device: DEVICE) => {
        return state.activeDevice.modelIdentifier === device.modelIdentifier
      })

      const upgradedDevice = {
        ...findUpgradedDevice,
        upgrades: {},
        previousDevice: { ...state.activeDevice },
      }

      const devicesWithUpgrade = [...state.devices]
      devicesWithUpgrade[findIndex] = upgradedDevice

      return {
        ...state,
        activeDevice: upgradedDevice,
        devices: devicesWithUpgrade,
      }

    case ACTIONS.CHANGE_ACTIVE_DEVICE:
      const device = state.devices.find(
        (device: DEVICE) => device.modelIdentifier === payload.modelIdentifier
      )

      return {
        ...state,
        activeDevice: device,
      }

    case ACTIONS.RESTORE:
      const findIndexOfOriginDevice: number = state.devices.findIndex(
        (device: DEVICE) => {
          return state.activeDevice.modelIdentifier === device.modelIdentifier
        }
      )

      const devicesState = [...state.devices]
      devicesState[findIndexOfOriginDevice] = state.activeDevice.previousDevice

      return {
        ...state,
        devices: devicesState,
        activeDevice: state.activeDevice.previousDevice,
      }

    case ACTIONS.UPDATE_SUGGESTED_DEVICE:
      if (payload?.energyClass === undefined || payload?.index === undefined)
        return {
          ...state,
          suggestedDevice: undefined,
        }

      const newSuggestedDevice: DEVICE =
        state.activeDevice.upgrades[payload.energyClass][payload.index]

      return {
        ...state,
        suggestedDevice: newSuggestedDevice,
      }

    default:
      return state
  }
}

export default devicesReducer
