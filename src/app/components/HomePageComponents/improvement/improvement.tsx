import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputBase,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from '@mui/material'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import { SuggestionsStepper } from '../suggestionsStepper/SuggestionsStepper'
import './improvement.scss'
import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'
import { useEffect, useState } from 'react'
import ApplianceInfo from '../applianceInfo/ApplianceInfo'
import { EcoScore } from '../ecoScore/ecoScore'
import { EnergyClass } from '../../Shared/EnergyClass/EnergyClass'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export const Improvement: React.FC = () => {
  const { activeDevice, removeDevice, upgradeDevice } = useDevices()
  const [upgradeIndex, setUpgradeIndex] = useState<number>(0)

  const [energyClass, setEnergyClass] = useState<string>('')

  const categoriesList: any =
    activeDevice.upgrades !== undefined
      ? Object.keys(activeDevice.upgrades).map((category: string) => {
          return (
            <MenuItem value={category} key={category}>
              <EnergyClass energyClassName={category} />
            </MenuItem>
          )
        })
      : null

  useEffect(() => {
    if (Object.keys(activeDevice.upgrades).length > 0) {
      setEnergyClass(Object.keys(activeDevice.upgrades)[0])
    }
  }, [activeDevice])

  const handleRemove = () => {
    removeDevice(activeDevice.modelIdentifier)
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

  return (
    <div className="improvement">
      <div className="improvement__labels">
        <h2>Welcome Back, *Username* 👋</h2>
        <h4>Suggested Changes</h4>
      </div>
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
              <MenuItem onClick={handleClose}>Restore</MenuItem>
            </Menu>
          </div>
          <div className="improvement-card__main improvement-card--border-right improvement-card--border-bottom appliance">
            <div className="appliance__card improvement-card--border-bottom appliance__card--selected">
              {activeDevice ? (
                <ConfigurationItem deviceParams={activeDevice} />
              ) : null}
            </div>
            <div className="appliance__info">
              {activeDevice ? (
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

            {categoriesList ? (
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
            <div className="appliance__card improvement-card--border-bottom">
              {activeDevice?.upgrades[energyClass] ? (
                <SuggestionsStepper
                  setUpgradeIndex={setUpgradeIndex}
                  setCategory={setEnergyClass}
                  category={energyClass}
                />
              ) : null}
            </div>
            <div className="appliance__info">
              {activeDevice?.upgrades[energyClass] ? (
                <ApplianceInfo
                  deviceParams={
                    activeDevice.upgrades[energyClass][upgradeIndex]
                  }
                />
              ) : (
                <ApplianceInfo deviceParams={null} />
              )}
            </div>
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
            >
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
