import { createContext, useContext, useReducer, useState } from 'react'
import { DEVICE, STATE } from '../components/Shared/models/Device'
import devicesReducer, { initialState } from './devicesReducer'

const DevicesContext = createContext<any>(initialState)

type DevicesProviderProps = {
  children?: JSX.Element | JSX.Element[]
}

export function DevicesProvider({ children }: DevicesProviderProps) {
  const [state, dispatch] = useReducer(devicesReducer, initialState)

  const addDevice = (device: DEVICE) => {
    dispatch({ type: 'add', payload: { device } })
  }

  const removeDevice = (modelIdentifier: string) => {
    dispatch({ type: 'remove', payload: { modelIdentifier } })
  }

  const changeActiveDevice = (modelIdentifier: string) => {
    dispatch({ type: 'change', payload: { modelIdentifier } })
  }

  const upgradeDevice = (modelIdentifier: string, category: string) => {
    dispatch({ type: 'upgrade', payload: { modelIdentifier, category } })
  }

  const restoreDevice = (modelIdentifier: string) => {
    dispatch({ type: 'restore', payload: { modelIdentifier } })
  }

  const updateSuggestedDevice = (energyClass: string, index: number) => {
    dispatch({ type: 'update', payload: { energyClass, index } })
  }

  const value = {
    waterPrice: state.waterCost,
    energyPrice: state.energyCost,
    devices: state.devices,
    changeActiveDevice,
    addDevice,
    removeDevice,
    upgradeDevice,
    restoreDevice,
    updateSuggestedDevice,
    activeDevice: state.activeDevice,
    suggestedDevice: state.suggestedDevice,
  }

  return (
    <DevicesContext.Provider value={value}>{children}</DevicesContext.Provider>
  )
}

export function useDevices() {
  return useContext(DevicesContext)
}
