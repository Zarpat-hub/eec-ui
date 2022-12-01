import { Button } from '@mui/material'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import { SuggestionsStepper } from '../suggestionsStepper/SuggestionsStepper'
import './improvement.scss'

export const Improvement: React.FC = () => {
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
              <ConfigurationItem
                category="Fridge"
                energyClassName="D"
                cost={270}
              />
            </div>
            <div className="appliance__info">
              <div className="info">
                <p className="info__label">
                  Manufacturer:{' '}
                  <span
                    className="info__value"
                    id="info__manufacturer--selected"
                  >
                    Yamaha
                  </span>
                </p>
              </div>
              <div className="info">
                <p className="info__label">
                  Annual cost:{' '}
                  <span
                    className="info__value"
                    id="info__annual-cost--selected"
                  >
                    390,-
                  </span>
                </p>
              </div>
              <div className="info">
                <p className="info__label">
                  Serial number:{' '}
                  <span
                    className="info__value"
                    id="info__model-identifier--selected"
                  >
                    R3JX3PDAXC31
                  </span>
                </p>
              </div>
              <div className="info">
                <p className="info__label">
                  Power Consumption:{' '}
                  <span
                    className="info__value"
                    id="info__power-consumtpion--selected"
                  >
                    124kWh
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="improvement-card">
          <div className="improvement-card__header improvement-card__header--right improvement-card--border-bottom">
            <p>Suggested device</p>
          </div>
          <div className="improvement-card__main improvement-card--border-bottom appliance">
            <div className="appliance__card improvement-card--border-bottom">
              {/* <ConfigurationItem category='Fridge' energyClassName='A' cost={220} /> */}
              <SuggestionsStepper
                suggestions={[
                  { category: 'Fridge', energyClassName: 'B', cost: 220 },
                  { category: 'Fridge', energyClassName: 'A', cost: 210 },
                  { category: 'Fridge', energyClassName: 'A', cost: 215 },
                ]}
              />
            </div>
            <div className="appliance__info">
              <div className="info">
                <p className="info__label">
                  Manufacturer:{' '}
                  <span
                    className="info__value"
                    id="info__manufacturer--suggested"
                  >
                    Bosch
                  </span>
                </p>
              </div>
              <div className="info">
                <p className="info__label">
                  Annual cost:{' '}
                  <span
                    className="info__value"
                    id="info__annual-cost--suggested"
                  >
                    280,-
                  </span>
                </p>
              </div>
              <div className="info">
                <p className="info__label">
                  Serial number:{' '}
                  <span
                    className="info__value"
                    id="info__model-identifier--suggested"
                  >
                    B2JF3PDAFCD
                  </span>
                </p>
              </div>
              <div className="info">
                <p className="info__label">
                  Power Consumption:{' '}
                  <span
                    className="info__value"
                    id="info__power-consumtpion--suggested"
                  >
                    114kWh
                  </span>
                </p>
              </div>
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
