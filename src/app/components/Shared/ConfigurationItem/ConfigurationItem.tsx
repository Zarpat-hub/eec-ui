import { useDevices } from '../../../context/DevicesContext'
import { EnergyClass } from '../EnergyClass/EnergyClass'
import { DEVICE } from '../models/Device'
import './ConfigurationItem.scss'

type ConfigurationItemProps = {
  deviceParams: DEVICE
  configSection?: boolean
}

export const ConfigurationItem = ({
  deviceParams,
  configSection,
}: ConfigurationItemProps) => {
  const { activeDevice } = useDevices()

  const imgUrl = new URL(
    `../../../../assets/CategoriesImg/${deviceParams.category}.png`,
    import.meta.url
  ).href

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
          <EnergyClass energyClassName={deviceParams.energyEfficiencyClass} />
        </div>
      </div>
      <div className="configurationCard__content">
        <div className="configurationCard__content--deviceImg">
          <img src={imgUrl} />
        </div>
        <div className="configurationCard__content--deviceName">
        <div className={deviceParams.previousDevice && configSection ? 'configurationCard__tag_upgraded' : ""}>
            {deviceParams.previousDevice && configSection ? 'NEW' : null}
          </div>
          <p>{deviceParams.deviceName}</p>
        </div>
      </div>
    </div>
  )
}
