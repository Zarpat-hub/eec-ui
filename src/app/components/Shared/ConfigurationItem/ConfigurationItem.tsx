import { EnergyClass } from '../EnergyClass/EnergyClass'
import './ConfigurationItem.scss'

interface ConfigurationItemProps {
  energyClassName: string
  cost: number
  category: string
}

export const ConfigurationItem = ({
  energyClassName,
  cost,
  category,
}: ConfigurationItemProps) => {
  return (
    <div className="configurationCard">
      <div className="configurationCard__header">
        <div className="configurationCard__header--price">{cost},-</div>
        <div className="test">
          <EnergyClass energyClassName={energyClassName} />
        </div>
      </div>
      <div className="configurationCard__content">
        <div className="configurationCard__content--deviceImg">
          <img src={`/src/assets/CategoriesImg/${category}.png`} />
        </div>
        <div className="configurationCard__content--deviceName">
          <p>{category}</p>
        </div>
      </div>
    </div>
  )
}
