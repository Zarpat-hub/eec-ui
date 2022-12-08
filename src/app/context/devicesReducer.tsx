import { ACTION, DEVICE, STATE } from '../components/Shared/models/Device'

export const initialState: STATE = {
  energyCost: 1,
  waterCost: 0.44,
  devices: [
    {
      modelIdentifier: '1',
      deviceName: 'test_1',
      annualCost: 200,
      energyEfficencyClass: 'A',
      ecoScore: 40,
      category: 'Fridge',
      powerConsumption: 1234,
      manufacturer: 'Bosh',
    },
    {
      modelIdentifier: '2',
      deviceName: 'test_2',
      annualCost: 134,
      energyEfficencyClass: 'B',
      ecoScore: 50,
      category: 'Fridge',
      powerConsumption: 2234,
      manufacturer: 'Samsung',
      upgrade: [
        {
          modelIdentifier: '3',
          deviceName: 'test_4343',
          annualCost: 111,
          energyEfficencyClass: 'A',
          ecoScore: 60,
          category: 'Fridge',
          powerConsumption: 1234,
          manufacturer: 'BSH',
        },
        {
          modelIdentifier: '4',
          deviceName: 'test_33343',
          annualCost: 121,
          energyEfficencyClass: 'A',
          ecoScore: 80,
          category: 'Fridge',
          powerConsumption: 1234,
          manufacturer: 'BSH1',
        },
      ],
    },
  ],
  activeDevice: {
    modelIdentifier: '2',
    deviceName: 'test_2',
    annualCost: 134,
    energyEfficencyClass: 'B',
    category: 'Fridge',
    powerConsumption: 2234,
    ecoScore: 50,
    manufacturer: 'Samsung',
    upgrade: [
      {
        modelIdentifier: '3',
        deviceName: 'test_4343',
        annualCost: 111,
        energyEfficencyClass: 'A',
        category: 'Fridge',
        ecoScore: 60,
        powerConsumption: 2234,
        manufacturer: 'Samsung1',
      },
      {
        modelIdentifier: '4',
        deviceName: 'test_33343',
        annualCost: 121,
        energyEfficencyClass: 'A',
        category: 'Fridge',
        ecoScore: 80,
        powerConsumption: 2234,
        manufacturer: 'Samsung2',
      },
    ],
  },
}

enum ACTIONS {
  ADD = 'add',
  REMOVE = 'remove',
  UPGRADE = 'upgrade',
  CHANGE_ACTIVE_DEVICE = 'change',
}

function devicesReducer(state: any, action: ACTION): STATE {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.ADD:
      const rand = Math.round(Math.random() * 100)

      const newDevice: DEVICE = {
        deviceName: `test_${rand}`,
        modelIdentifier: rand.toString(),
        annualCost: 144,
        energyEfficencyClass: 'B',
        category: 'Fridge',
        ecoScore: Math.random() * 100,
        powerConsumption: 2234,
        manufacturer: 'Samsung2',
      }

      return {
        ...state,
        devices: [...state.devices, newDevice],
        activeDevice: newDevice,
      }

    case ACTIONS.REMOVE:
      const index: number = state.devices.findIndex(
        (device: DEVICE) => device.modelIdentifier === payload.modelIdentifier
      )

      const devices = [...state.devices]
      devices.splice(index, 1)

      let activeDevice = null

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
      // const findUpgradedDevice = state.activeDevice.upgrade.find(
      //   (device: DEVICE) => device.modelIdentifier === payload.modelIdentifier
      // )

      // const findIndex: number = state.devices.findIndex(
      //   (device: DEVICE) =>
      //     state.activeDevice.modelIdentifier === device.modelIdentifier
      // )

      // const devicesWithUpgrade = [...state.devices]

      // devicesWithUpgrade.splice(findIndex, 1)
      // devicesWithUpgrade.push(findUpgradedDevice)

      // return {
      //   ...state,
      //   activeDevice: findUpgradedDevice,
      //   devices: devicesWithUpgrade,
      // }
      const findUpgradedDevice = state.activeDevice.upgrade.find(
        (device: DEVICE) => device.modelIdentifier === payload.modelIdentifier
      )

      const findIndex: number = state.devices.findIndex(
        (device: DEVICE) =>
          state.activeDevice.modelIdentifier === device.modelIdentifier
      )

      const upgradedDevice = {
        ...findUpgradedDevice,
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

    default:
      return state
  }
}

export default devicesReducer
