import { useDevices } from '../../../context/DevicesContext'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import { DEVICE } from '../../Shared/models/Device'
import { NewItem } from '../../Shared/NewItem/NewItem'
import './ConfigurationSection.scss'

export const ConfigurationSection = () => {
  const { devices } = useDevices()

  const DEVICES: JSX.Element[] = devices.map((device: DEVICE) => {
    return (
      <ConfigurationItem key={device.modelIdentifier} deviceParams={device} />
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

      <div className="configuration__appliances">
        {DEVICES}
        <NewItem />
      </div>
    </div>
  )
}
