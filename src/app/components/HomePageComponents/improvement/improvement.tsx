import { Button } from '@mui/material'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import { SuggestionsStepper } from '../suggestionsStepper/SuggestionsStepper'
import './improvement.scss'
import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'
import { useState } from 'react'
import ApplianceInfo from '../applianceInfo/ApplianceInfo'

export const Improvement: React.FC = () => {
  const { activeDevice, removeDevice, upgradeDevice } = useDevices()
  const [upgradeIndex, setUpgradeIndex] = useState<number>(0)

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
        <div className="improvement-card">
          <div className="improvement-card__header improvement-card__header--left improvement-card--border-right improvement-card--border-bottom">
            <p>Selected device</p>
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
          </div>
          <div className="improvement-card__main improvement-card--border-bottom appliance">
            <div className="appliance__card improvement-card--border-bottom">
              {activeDevice.upgrade ? (
                <SuggestionsStepper setUpgradeIndex={setUpgradeIndex} />
              ) : null}
            </div>
            <div className="appliance__info">
              {activeDevice.upgrade ? (
                <ApplianceInfo
                  deviceParams={activeDevice.upgrade[upgradeIndex]}
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
