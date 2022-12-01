import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import { NewItem } from '../../Shared/NewItem/NewItem'
import './configurationSection.scss'

export const ConfigurationSection: React.FC = () => {
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
        {/* placeholder */}
        <ConfigurationItem energyClassName="A" cost={250} category="Fridge" />
        <ConfigurationItem energyClassName="B" cost={230} category="Fridge" />

        <ConfigurationItem energyClassName="D" cost={270} category="Fridge" />
        <ConfigurationItem energyClassName="F" cost={210} category="Fridge" />

        <NewItem />

        {/* placeholder */}
      </div>
    </div>
  )
}
