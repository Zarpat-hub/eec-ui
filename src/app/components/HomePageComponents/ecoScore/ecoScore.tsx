import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'
import Ecometer from '../ecometer/Ecometer'
import { useState, useEffect } from 'react'
import './ecoScore.scss'

export const EcoScore: React.FC = () => {
  const { devices } = useDevices()
  const [ecoScore, setEcoScore] = useState<number>(0)

  useEffect(() => {
    console.log(devices)
    if (devices.length === 0) {
      setEcoScore(0)
      return
    }
    const e = ecoScoreCalc(devices)
    setEcoScore(e)
  }, [devices])

  const ecoScoreCalc = (devices: DEVICE[]): number => {
    let ecoScoreDefault = 0

    for (const device of devices) {
      ecoScoreDefault += Number(device.ecoScore)
    }

    return Math.floor(ecoScoreDefault / devices.length)
  }

  return (
    <div className="eco-score">
      <div className="eco-score__labels">
        <h3>Your ECO score</h3>
        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
      </div>

      <div className="eco-score__container">
        <div className="eco-score-card">
          <div className="eco-score-card__header eco-score-card--border-bottom header">
            <div className="header__label eco-score-card--border-bottom label">
              <p className="label__text">
                Your ECO score is
                <span className="label__value">{` ${ecoScore} points`}</span>.
              </p>
            </div>
            <div className="header__savings savings">
              <div className="savings__money eco-score-card--border-right" />
              <div className="savings__energy" />
            </div>
          </div>

          <div className="eco-score-card__ecometer">
            <Ecometer />
          </div>
        </div>
      </div>
    </div>
  )
}
