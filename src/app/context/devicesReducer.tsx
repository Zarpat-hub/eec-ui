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
      upgrades: {
        B: [
          {
            annualCost: 477.7849,
            ecoScore: 100,
            class: 'B',
            modelIdentifier: '7525.0110',
            index: 12,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
          },
          {
            annualCost: 384.99999,
            ecoScore: 100,
            class: 'B',
            modelIdentifier: '7525.0100',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
          },
          {
            annualCost: 160.15999,
            ecoScore: 100,
            class: 'B',
            modelIdentifier: 'AR51N',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Lyfco',
          },
        ],
      },
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
      upgrades: {
        B: [
          {
            annualCost: 477.7849,
            ecoScore: 100,
            class: 'B',
            modelIdentifier: '7525.0110',
            index: 12,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
          },
          {
            annualCost: 384.99999,
            ecoScore: 100,
            class: 'B',
            modelIdentifier: '7525.0100',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
          },
          {
            annualCost: 160.15999,
            ecoScore: 100,
            class: 'B',
            modelIdentifier: 'AR51N',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Lyfco',
          },
        ],
        A: [
          {
            annualCost: 0.7699999,
            ecoScore: 100,
            class: 'A',
            modelIdentifier: 'MD 30000',
            index: 1,
            category: 'refrigeratingappliances2019',
            manufacturer: 'MEDION',
          },
          {
            annualCost: 0.76999998,
            ecoScore: 100,
            class: 'A',
            modelIdentifier: 'SKF 502 W',
            index: 1,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Scandomestic A/S ',
          },
          {
            annualCost: 147.8399963,
            ecoScore: 100,
            class: 'A',
            modelIdentifier: 'SL-65',
            index: 7,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Buschbeck GmbH',
          },
        ],
      },

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
    upgrades: {
      B: [
        {
          annualCost: 477.7849,
          ecoScore: 100,
          class: 'B',
          modelIdentifier: '7525.0110',
          index: 12,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Combisteel',
        },
        {
          annualCost: 384.99999,
          ecoScore: 100,
          class: 'B',
          modelIdentifier: '7525.0100',
          index: 13,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Combisteel',
        },
        {
          annualCost: 160.15999,
          ecoScore: 100,
          class: 'B',
          modelIdentifier: 'AR51N',
          index: 13,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Lyfco',
        },
      ],
      A: [
        {
          annualCost: 0.7699999,
          ecoScore: 100,
          class: 'A',
          modelIdentifier: 'MD 30000',
          index: 1,
          category: 'refrigeratingappliances2019',
          manufacturer: 'MEDION',
        },
        {
          annualCost: 0.76999998,
          ecoScore: 100,
          class: 'A',
          modelIdentifier: 'SKF 502 W',
          index: 1,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Scandomestic A/S ',
        },
        {
          annualCost: 147.8399963,
          ecoScore: 100,
          class: 'A',
          modelIdentifier: 'SL-65',
          index: 7,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Buschbeck GmbH',
        },
      ],
    },
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
        upgrades: {},
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
        activeDevice: {
          ...activeDevice,
          upgrades: {},
        },
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
      // console.log(payload.category)
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

    default:
      return state
  }
}

export default devicesReducer
