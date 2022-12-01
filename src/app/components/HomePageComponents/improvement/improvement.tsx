import { Button } from '@mui/material'
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
            <div className="appliance__card improvement-card--border-bottom">
              <div
                style={{
                  height: '109px',
                  width: '174px',
                  backgroundColor: 'black',
                }}
              ></div>
            </div>
            <div className="appliance__info">
              <div>
                <p>
                  Manufacturer: <b>Yamaha</b>
                </p>
              </div>
              <div>
                <p>
                  Annual cost: <b>390,-</b>
                </p>
              </div>
              <div>
                <p>
                  Serial number: <b>R3JX3PDAXC31</b>
                </p>
              </div>
              <div>
                <p>
                  Power Consumption: <b>124kWh</b>
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
              <div
                style={{
                  height: '109px',
                  width: '174px',
                  backgroundColor: 'black',
                }}
              ></div>
            </div>
            <div className="appliance__info">
              <div>
                <p>
                  Manufacturer: <b>Bosch</b>
                </p>
              </div>
              <div>
                <p>
                  Annual cost: <b>280,-</b>
                </p>
              </div>
              <div>
                <p>
                  Serial number: <b>B2JF3PDAFCD</b>
                </p>
              </div>
              <div>
                <p>
                  Power Consumption: <b>114kWh</b>
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
