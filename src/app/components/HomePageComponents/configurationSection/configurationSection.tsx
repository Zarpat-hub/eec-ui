import { useDevices } from '../../../context/DevicesContext'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import { DEVICE } from '../../Shared/models/Device'
import { NewItem } from '../../Shared/NewItem/NewItem'
import './configurationSection.scss'

export const ConfigurationSection = () => {
  const { devices, changeActiveDevice } = useDevices()

  const handleClick = (modelIdentifier: string) => {
    changeActiveDevice(modelIdentifier)
  }

  const DEVICES: JSX.Element[] = devices.map((device: DEVICE) => {
    return (
      <div
        key={device.modelIdentifier}
        onClick={() => handleClick(device.modelIdentifier)}
      >
        <ConfigurationItem deviceParams={device} configSection={true} />
      </div>
    )
  })

  return (
    <div className="configuration">
      <div className="configuration__headers">
        <h2>Start optimizing your home</h2>
        <h5>Select your configuration</h5>
      </div>

      <div className="configuration__navbar">
        {/* placeholder */}

        <div
          style={{
            height: '64px',
            width: '128px',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          Button
        </div>
        <div
          style={{
            height: '64px',
            width: '128px',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          Button
        </div>
        <div
          style={{
            height: '64px',
            width: '128px',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          Button
        </div>
        {/* placeholder */}
      </div>

      {DEVICES.length ? (
        <div className="configuration__appliances">
          {DEVICES}
          <NewItem text={'Add Device'} first={false} />
        </div>
      ) : (
        <div className="configuration__noDevices">
          <div className="configuration__noDevices--text">
            <h3>No devices has beed added</h3>
            <p>
              Add devices to your configuration your ECO score and get
              improvments suggestions
            </p>
          </div>
          <NewItem text={'Add First Device'} first={true} />
        </div>
      )}
    </div>
  )
}
