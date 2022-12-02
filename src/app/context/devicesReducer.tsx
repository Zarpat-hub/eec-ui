import { ACTION, DEVICE, STATE } from '../components/Shared/models/Device'

export const initialState: STATE = {
  energyCost: 1,
  waterCost: 0.44,
  devices: [
    {
      modelIdentifier: '1',
      deviceName: 'test_1',
      annualCost: 134,
      energyEfficencyClass: 'A',
      category: 'Fridge',
    },
    {
      modelIdentifier: '2',
      deviceName: 'test_2',
      annualCost: 134,
      energyEfficencyClass: 'B',
      category: 'Fridge',
      upgrade: [
        {
          modelIdentifier: '3',
          deviceName: 'test_4343',
          annualCost: 111,
          energyEfficencyClass: 'A',
          category: 'Fridge',
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
    upgrade: [
      {
        modelIdentifier: '3',
        deviceName: 'test_4343',
        annualCost: 111,
        energyEfficencyClass: 'A',
        category: 'Fridge',
      },
      {
        modelIdentifier: '4',
        deviceName: 'test_33343',
        annualCost: 121,
        energyEfficencyClass: 'A',
        category: 'Fridge',
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

      // we-we-welcome in the hell we-we-welcome in the thel
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
      return state

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
