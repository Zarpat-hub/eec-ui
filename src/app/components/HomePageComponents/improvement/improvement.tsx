import './Improvement.scss'

import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'

export const Improvement: React.FC = () => {
  const { activeDevice, removeDevice } = useDevices()

  const handleClick = () => {
    removeDevice(activeDevice.modelIdentifier)
  }

  const handleUpgrade = (modelIdentifier: string) => {
    // console.log(modelIdentifier)
  }

  return (
    <div className="improvement">
      <div className="improvement__labels">
        <h2>Welcome Back, *Username* 👋</h2>
        <h4>Suggested Changes</h4>
      </div>
      <div className="improvement__container">
        {activeDevice !== null ? (
          <div>
            <p onClick={handleClick}>{activeDevice.deviceName}</p>
            <h3>Upgrade</h3>
            {activeDevice.upgrade.map((device: DEVICE) => {
              return (
                <div
                  key={device.modelIdentifier}
                  onClick={() => handleUpgrade(device.modelIdentifier)}
                >
                  <h1>{device.modelIdentifier}</h1>
                  <p>{device.deviceName}</p>
                </div>
              )
            })}
          </div>
        ) : (
          <p>Brak</p>
        )}
      </div>
    </div>
  )
}
