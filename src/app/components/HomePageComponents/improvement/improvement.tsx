import './Improvement.scss'

import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'

export const Improvement: React.FC = () => {
  const { activeDevice, removeDevice, upgradeDevice } = useDevices()

  const handleRemove = () => {
    removeDevice(activeDevice.modelIdentifier)
  }

  const handleUpgrade = (modelIdentifier: string) => {
    upgradeDevice(modelIdentifier)
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
            <div onClick={handleRemove}>
              <ConfigurationItem deviceParams={activeDevice} />
            </div>
            {activeDevice.upgrade !== undefined ? (
              activeDevice.upgrade.map((device: DEVICE) => {
                // console.log(device)
                return (
                  <div
                    key={device.modelIdentifier}
                    onClick={() => handleUpgrade(device.modelIdentifier)}
                  >
                    <div>Ugrade</div>
                    <ConfigurationItem deviceParams={device} />
                  </div>
                )
              })
            ) : (
              <p>Brak dostępnych ugradów</p>
            )}
          </div>
        ) : (
          <p>Brak</p>
        )}
      </div>
    </div>
  )
}
