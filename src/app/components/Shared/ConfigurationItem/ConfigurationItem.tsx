import { useDevices } from '../../../context/DevicesContext'
import { EnergyClass } from '../EnergyClass/EnergyClass'
import { DEVICE } from '../models/Device'
import './ConfigurationItem.scss'

type ConfigurationItemProps = {
  deviceParams: DEVICE
}

export const ConfigurationItem = ({ deviceParams }: ConfigurationItemProps) => {
  const { activeDevice } = useDevices()

  return (
    <div
      className={
        deviceParams.modelIdentifier !== activeDevice.modelIdentifier
          ? 'configurationCard'
          : 'configurationCardActive'
      }
    >
      <div className="configurationCard__header">
        <div className="configurationCard__header--price">
          {deviceParams.annualCost},-
        </div>
        <div className="icon_position">
          <EnergyClass energyClassName={deviceParams.energyEfficencyClass} />
        </div>
      </div>
      <div className="configurationCard__content">
        <div className="configurationCard__content--deviceImg">
          <img src={`/src/assets/CategoriesImg/${deviceParams.category}.png`} />
        </div>
        <div className="configurationCard__content--deviceName">
          <p>{deviceParams.deviceName}</p>
        </div>
      </div>
    </div>
  )
}
