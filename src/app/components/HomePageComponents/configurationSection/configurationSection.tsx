import { useDevices } from '../../../context/DevicesContext'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import { DEVICE } from '../../Shared/models/Device'
import { NewItem } from '../../Shared/NewItem/NewItem'
import { SectionHeader } from '../../Shared/SectionHeader/SectionHeader'
import placeholder from '../../../../assets/placeholder.png'
import './configurationSection.scss'
import { Button, ButtonGroup } from '@mui/material'

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
      <SectionHeader
        main="Start optimizing your home"
        sub="Select your configuration"
        secondary
      />
      <div className="configuration__navbar navbar">
        <ButtonGroup>
          <Button
            variant="contained"
            sx={{
              boxShadow: "none",
              textTransform:"none",
              fontWeight: 700,
              backgroundColor: '#3F3F3F',
              '&:hover': { backgroundColor: '#3F3F3F' },
            }}
          >
            Home 1
          </Button>
          <Button
            sx={{
              textTransform:"none",
              fontWeight: 700,
              borderColor: '#E5E5E5',
              borderWidth: '2px',
              color: '#3F3F3F',
              '&:hover': { borderColor: '#E5E5E5', borderWidth: '2px' },
            }}
          >
            Home 2
          </Button>
        </ButtonGroup>

        <div className="navbar__scrollbar">
          <div className="navbar__rooms">
            <div className="navbar__button navbar__button--selected">All</div>
            <div className="navbar__button">Kitchen</div>
            <div className="navbar__button">Dining Room</div>
            <div className="navbar__button">Sleeping room</div>
            <div className="navbar__button">Living Room</div>
            <div className="navbar__button">Garage</div>
            <div className="navbar__button">Laundry Room</div>
            <div className="navbar__button">Bathroom</div>
          </div>
          <div className="navbar__new">
            <div className="newRoom">
              <span className="newRoom__sign">
                <span>+</span>
              </span>
              <span>Add room</span>
            </div>
          </div>
        </div>
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
