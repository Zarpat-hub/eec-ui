import {
  Button,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import { SuggestionsStepper } from '../suggestionsStepper/SuggestionsStepper'
import './improvement.scss'
import { useDevices } from '../../../context/DevicesContext'
import { useEffect, useState } from 'react'
import ApplianceInfo from '../applianceInfo/ApplianceInfo'
import { EnergyClass } from '../../Shared/EnergyClass/EnergyClass'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import NoBetterDeviceImg from '../../../../assets/no_better_device.png'
import NoDeviceSelected from '../../../../assets/no_device_selected.png'

export const Improvement: React.FC = () => {
  const {
    activeDevice,
    removeDevice,
    upgradeDevice,
    restoreDevice,
    updateSuggestedDevice,
    suggestedDevice,
  } = useDevices()
  const [upgradeIndex, setUpgradeIndex] = useState<number>(0)

  const [energyClass, setEnergyClass] = useState<string>('')

  const categoriesList: any =
    Object.keys(activeDevice).length > 0
      ? Object.keys(activeDevice.upgrades).map((category: string) => {
          return (
            <MenuItem value={category} key={category}>
              <EnergyClass energyClassName={category} />
            </MenuItem>
          )
        })
      : null

  useEffect(() => {
    if (Object.keys(activeDevice).length > 0) {
      if (Object.keys(activeDevice.upgrades).length > 0) {
        const newEnergyClass = Object.keys(activeDevice.upgrades)[0]
        setEnergyClass(newEnergyClass)
        updateSuggestedDevice(newEnergyClass, 0)
      } else {
        setEnergyClass('')
        updateSuggestedDevice(undefined, undefined)
      }

      setUpgradeIndex(0)
    }
  }, [activeDevice])

  useEffect(() => {
    if (energyClass !== '') updateSuggestedDevice(energyClass, upgradeIndex)
  }, [upgradeIndex, energyClass])

  const handleRemove = () => {
    removeDevice(activeDevice.modelIdentifier)
    setEnergyClass('')
    handleClose()
  }

  const handleUpgrade = (modelIdentifier: string) => {
    upgradeDevice(modelIdentifier)
  }

  const upgradeHandler = () => {
    upgradeDevice(
      activeDevice.upgrades[energyClass][upgradeIndex].modelIdentifier,
      energyClass
    )
  }

  const handleChange = (event: SelectChangeEvent) => {
    setEnergyClass(event.target.value)
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleRestore = () => {
    restoreDevice(activeDevice.modelIdentifier)
    handleClose()
  }

  return (
    <div className="improvement">
      <div className="improvement__labels">
        <h2>Welcome Back, *Username* 👋</h2>
        <h4>Suggested Changes</h4>
      </div>
      {Object.keys(activeDevice).length > 0 ? (
        <div className="improvement__container">
          <div className="improvement-card">
            <div className="improvement-card__header improvement-card__header--left improvement-card--border-right improvement-card--border-bottom">
              <p>Selected device</p>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleRemove}>Remove</MenuItem>
                {activeDevice.previousDevice ? (
                  <MenuItem onClick={handleRestore}>Restore</MenuItem>
                ) : null}
              </Menu>
            </div>
            <div className="improvement-card__main improvement-card--border-right improvement-card--border-bottom appliance">
              <div className="appliance__card improvement-card--border-bottom appliance__card--selected">
                {activeDevice.modelIdentifier ? (
                  <ConfigurationItem deviceParams={activeDevice} />
                ) : null}
              </div>
              <div className="appliance__info">
                {activeDevice?.modelIdentifier ? (
                  <ApplianceInfo deviceParams={activeDevice} />
                ) : (
                  <ApplianceInfo deviceParams={null} />
                )}
              </div>
            </div>
          </div>

          <div className="improvement-card">
            <div className="improvement-card__header improvement-card__header--right improvement-card--border-bottom">
              <p>Suggested device</p>

              {categoriesList.length > 0 ? (
                <FormControl sx={{ m: 1 }} variant="standard">
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={energyClass}
                    onChange={handleChange}
                    className="categorySelect"
                  >
                    {categoriesList}
                  </Select>
                </FormControl>
              ) : null}
            </div>
            <div className="improvement-card__main improvement-card--border-bottom appliance">
              {activeDevice?.upgrades[energyClass] ? (
                <>
                  <div className="appliance__card improvement-card--border-bottom">
                    <SuggestionsStepper
                      setUpgradeIndex={setUpgradeIndex}
                      setCategory={setEnergyClass}
                      category={energyClass}
                    />
                  </div>
                  <div className="appliance__info">
                    <ApplianceInfo
                      deviceParams={
                        activeDevice.upgrades[energyClass][upgradeIndex]
                      }
                    />
                  </div>
                </>
              ) : (
                <div className="noBetterDevice">
                  <img src={NoBetterDeviceImg} />
                  <div className="noBetterDevice__text">
                    <h3>Congratulations</h3>
                    <p>You cannot do any better than this!</p>
                    <p>No better devices has been found</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="improvement__footer footer-container">
            <p className="footer-container__label">
              Do you want to upgrade your device?
            </p>
            <div className="footer-container__button">
              <Button
                onClick={upgradeHandler}
                variant="contained"
                color="secondary"
                sx={{ borderRadius: '38px' }}
                disabled={Object.keys(activeDevice.upgrades).length === 0}
              >
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="d">
          <div className="noDeviceSelected">
            <img src={NoDeviceSelected} />
            <div className="noDeviceSelected__text">
              <h3>No device selected</h3>
              <p>Select device configuration to get improvements suggestions</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
