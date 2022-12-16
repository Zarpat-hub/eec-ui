import { ACTION, DEVICE, STATE } from '../components/Shared/models/Device'

export const initialState: STATE = {
  energyCost: 1,
  waterCost: 0.44,
  devices: [
    {
      modelIdentifier: '1',
      deviceName: 'test_1',
      annualCost: 200,
      energyEfficiencyClass: 'A',
      ecoScore: 40,
      category: 'Fridge',
      powerConsumption: 1234,
      manufacturer: 'Bosh',
      upgrades: {
        B: [
          {
            annualCost: 477.7849,
            ecoScore: 100,
            energyEfficiencyClass: 'B',
            modelIdentifier: '7525.0110',
            index: 12,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
            powerConsumption: 100,
          },
          {
            annualCost: 384.99999,
            ecoScore: 100,
            energyEfficiencyClass: 'B',
            modelIdentifier: '7525.0100',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
            powerConsumption: 100,
          },
          {
            annualCost: 160.15999,
            ecoScore: 100,
            energyEfficiencyClass: 'B',
            modelIdentifier: 'AR51N',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Lyfco',
            powerConsumption: 100,
          },
        ],
      },
    },
    {
      modelIdentifier: '2',
      deviceName: 'test_2',
      annualCost: 134,
      energyEfficiencyClass: 'B',
      ecoScore: 50,
      category: 'Fridge',
      powerConsumption: 2234,
      manufacturer: 'Samsung',
      upgrades: {
        B: [
          {
            annualCost: 477.7849,
            ecoScore: 100,
            energyEfficiencyClass: 'B',
            modelIdentifier: '7525.0110',
            index: 12,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
            powerConsumption: 100,
          },
          {
            annualCost: 384.99999,
            ecoScore: 100,
            energyEfficiencyClass: 'B',
            modelIdentifier: '7525.0100',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Combisteel',
            powerConsumption: 100,
          },
          {
            annualCost: 160.15999,
            ecoScore: 100,
            energyEfficiencyClass: 'B',
            modelIdentifier: 'AR51N',
            index: 13,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Lyfco',
            powerConsumption: 100,
          },
        ],
        A: [
          {
            annualCost: 0.7699999,
            ecoScore: 100,
            energyEfficiencyClass: 'A',
            modelIdentifier: 'MD 30000',
            index: 1,
            category: 'refrigeratingappliances2019',
            manufacturer: 'MEDION',
            powerConsumption: 100,
          },
          {
            annualCost: 0.76999998,
            ecoScore: 100,
            energyEfficiencyClass: 'A',
            modelIdentifier: 'SKF 502 W',
            index: 1,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Scandomestic A/S ',
            powerConsumption: 100,
          },
          {
            annualCost: 147.8399963,
            ecoScore: 100,
            energyEfficiencyClass: 'A',
            modelIdentifier: 'SL-65',
            index: 7,
            category: 'refrigeratingappliances2019',
            manufacturer: 'Buschbeck GmbH',
            powerConsumption: 100,
          },
        ],
      },
    },
  ],
  activeDevice: {
    modelIdentifier: '2',
    deviceName: 'test_2',
    annualCost: 134,
    energyEfficiencyClass: 'B',
    category: 'Fridge',
    powerConsumption: 2234,
    ecoScore: 50,
    manufacturer: 'Samsung',
    upgrades: {
      B: [
        {
          annualCost: 477.7849,
          ecoScore: 100,
          energyEfficiencyClass: 'B',
          modelIdentifier: '7525.0110',
          index: 12,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Combisteel',
          powerConsumption: 100,
        },
        {
          annualCost: 384.99999,
          ecoScore: 100,
          energyEfficiencyClass: 'B',
          modelIdentifier: '7525.0100',
          index: 13,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Combisteel',
          powerConsumption: 100,
        },
        {
          annualCost: 160.15999,
          ecoScore: 100,
          energyEfficiencyClass: 'B',
          modelIdentifier: 'AR51N',
          index: 13,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Lyfco',
          powerConsumption: 100,
        },
      ],
      A: [
        {
          annualCost: 0.7699999,
          ecoScore: 100,
          energyEfficiencyClass: 'A',
          modelIdentifier: 'MD 30000',
          index: 1,
          category: 'refrigeratingappliances2019',
          manufacturer: 'MEDION',
          powerConsumption: 100,
        },
        {
          annualCost: 0.76999998,
          ecoScore: 100,
          energyEfficiencyClass: 'A',
          modelIdentifier: 'SKF 502 W',
          index: 1,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Scandomestic A/S ',
          powerConsumption: 100,
        },
        {
          annualCost: 147.8399963,
          ecoScore: 100,
          energyEfficiencyClass: 'A',
          modelIdentifier: 'SL-65',
          index: 7,
          category: 'refrigeratingappliances2019',
          manufacturer: 'Buschbeck GmbH',
          powerConsumption: 100,
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
      console.log(payload.device)
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
