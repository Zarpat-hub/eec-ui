import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'
import Ecometer from '../ecometer/Ecometer'
import { useState, useEffect, useRef } from 'react'
import './ecoScore.scss'
import NoEnoughData from '../../../../assets/not_enough_data.png'
import upgradeArrow from '../../../../assets/upgrade_arrow.png'
import CountUp from 'react-countup'
import { SectionHeader } from '../../Shared/SectionHeader/SectionHeader'

export const EcoScore: React.FC = () => {
  const { devices, suggestedDevice, activeDevice } = useDevices()
  const [ecoScore, setEcoScore] = useState<number>(0)
  const [spendings, setSpendings] = useState<number>(0)
  const [moneySavings, setMoneySavings] = useState<number>(0)
  const [moneyPercentages, setMoneyPercentages] = useState<number>(0)
  const [energyUsed, setEnergyUsed] = useState<number>(0)
  const [energyReduced, setEnergyReduced] = useState<number>(0)
  const [energyPercentages, setEnergyPercentages] = useState<number>(0)
  const [previousMoney, setPreviousMoney] = useState<number[]>([0, 0, 0])
  const [previousEnergy, setPreviousEnergy] = useState<number[]>([0, 0, 0])
  const moneySavingsRef = useRef<any>()
  const moneyPercentagesRef = useRef<any>()
  const spendingsArrowRef = useRef<any>()
  const spendingsRef = useRef<any>()
  const energyUsedRef = useRef<any>()
  const energyUsedArrowRef = useRef<any>()
  const energyReducedRef = useRef<any>()
  const energyPercentagesRef = useRef<any>()

  useEffect(() => {
    if (devices.length === 0) return

    if (suggestedDevice === undefined) {
      noSuggestion()
      return
    }
    setPreviousMoney([spendings, moneySavings, moneyPercentages])
    setPreviousEnergy([energyUsed, energyReduced, energyPercentages])
    suggestion()
    const [x1, x2, x3, x4] = spendingsAndEnergyCalc(devices)

    setSpendings(x1)
    setMoneySavings(x2)
    setMoneyPercentages(Number(((x1 - x2) / x1).toFixed(2)))
    setEnergyUsed(x3)
    setEnergyReduced(x4)
    setEnergyPercentages(Number(((x3 - x4) / x3).toFixed(2)))
  }, [suggestedDevice, devices])

  useEffect(() => {
    if (devices.length === 0) {
      setEcoScore(0)
      return
    }
    const e = ecoScoreCalc(devices)
    setEcoScore(e)
  }, [devices])

  const spendingsAndEnergyCalc = (devices: DEVICE[]): number[] => {
    if (devices.length === 0) return [0, 0]
    let spendings = 0
    let savings = 0
    let energyUsed = 0
    let energyReduced = 0

    for (const device of devices) {
      if (
        device.modelIdentifier === activeDevice.modelIdentifier &&
        suggestedDevice !== undefined
      ) {
        savings += Number(suggestedDevice.annualCost)
        spendings += Number(activeDevice.annualCost)
        energyReduced += Number(suggestedDevice.powerConsumption)
        energyUsed += Number(activeDevice.powerConsumption)
      } else {
        savings += Number(device.annualCost)
        spendings += Number(device.annualCost)
        energyReduced += Number(device.powerConsumption)
        energyUsed += Number(device.powerConsumption)
      }
    }

    return [
      Math.floor(spendings / devices.length),
      Math.floor(savings / devices.length),
      Math.floor(energyUsed / devices.length),
      Math.floor(energyReduced / devices.length),
    ]
  }

  const ecoScoreCalc = (devices: DEVICE[]): number => {
    let ecoScoreDefault = 0

    for (const device of devices) {
      ecoScoreDefault += Number(device.ecoScore)
    }

    return Math.floor(ecoScoreDefault / devices.length)
  }

  const noSuggestion = () => {
    moneySavingsRef.current.animate(
      [{ transform: 'translateY(33%) translateX(-50%)', opacity: 0 }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    moneyPercentagesRef.current.animate(
      [{ transform: 'translateY(-33%) translateX(-50%)', opacity: 0 }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    spendingsArrowRef.current.animate([{ opacity: 0 }], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in-out',
    })
    spendingsRef.current.animate(
      [{ transform: 'translateX(100%)', fontSize: '20px' }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    energyReducedRef.current.animate(
      [{ transform: 'translateY(33%) translateX(-50%)', opacity: 0 }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    energyPercentagesRef.current.animate(
      [{ transform: 'translateY(-33%) translateX(-50%)', opacity: 0 }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    energyUsedArrowRef.current.animate([{ opacity: 0 }], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in-out',
    })
    energyUsedRef.current.animate(
      [{ transform: 'translateX(100%)', fontSize: '20px' }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
  }

  const suggestion = () => {
    moneySavingsRef.current.animate(
      [{ transform: 'translateY(0)', opacity: 1 }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    moneyPercentagesRef.current.animate(
      [{ transform: 'translateY(0)', opacity: 1 }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    spendingsArrowRef.current.animate([{ opacity: 1 }], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in-out',
    })
    spendingsRef.current.animate(
      [{ transform: 'translateX(0)', fontSize: '16px' }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    energyReducedRef.current.animate(
      [{ transform: 'translateY(0)', opacity: 1 }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    energyPercentagesRef.current.animate(
      [{ transform: 'translateY(0)', opacity: 1 }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
    energyUsedArrowRef.current.animate([{ opacity: 1 }], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in-out',
    })
    energyUsedRef.current.animate(
      [{ transform: 'translateX(0)', fontSize: '16px' }],
      { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    )
  }

  // console.log(devices.length)
  return (
    <div className="eco-score">
      {devices.length > 0 ? (
        <>
          <SectionHeader
            main="Your ECO score 🍃"
            sub="Calculate your housheold energy efficiency"
            secondary
          />
          <div className="eco-score__container">
            <div className="eco-score-card">
              <div className="eco-score-card__header eco-score-card--border-bottom header">
                <div className="header__label eco-score-card--border-bottom label">
                  <p className="label__text">
                    Your ECO score is
                    <span className="label__value">{` ${ecoScore} points`}</span>
                    .
                  </p>
                </div>
                <div className="header__savings savings">
                  <div className="savings__money money eco-score-card--border-right">
                    <span className="money__current" ref={spendingsRef}>
                      <CountUp
                        start={previousMoney[0]}
                        end={spendings}
                        duration={1}
                        style={{ fontSize: 24 }}
                      />
                      ,-
                    </span>
                    <img
                      className="money__img"
                      src={upgradeArrow}
                      ref={spendingsArrowRef}
                    />
                    <div className="money-savings">
                      <span
                        className="money-savings__savings"
                        ref={moneySavingsRef}
                      >
                        <CountUp
                          start={previousMoney[1]}
                          end={moneySavings}
                          duration={1}
                        />
                        ,-
                      </span>
                      <span
                        className="money-savings__percentages"
                        ref={moneyPercentagesRef}
                      >
                        +{moneyPercentages}%
                      </span>
                    </div>
                  </div>
                  <div className="savings__energy energy">
                    <span className="energy__current" ref={energyUsedRef}>
                      <CountUp
                        start={previousEnergy[0]}
                        end={energyUsed}
                        duration={1}
                        style={{ fontSize: 24 }}
                      />
                      ,-
                    </span>
                    <img
                      className="energy__img"
                      src={upgradeArrow}
                      ref={energyUsedArrowRef}
                    />
                    <div className="energy-savings">
                      <span
                        className="energy-savings__savings"
                        ref={energyReducedRef}
                      >
                        <CountUp
                          start={previousEnergy[1]}
                          end={energyReduced}
                          duration={1}
                        />
                        ,-
                      </span>
                      <span
                        className="energy-savings__percentages"
                        ref={energyPercentagesRef}
                      >
                        +{energyPercentages}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="eco-score-card__ecometer">
                <Ecometer />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="eco-score">
          <div className="eco-score__labels">
            <h3>Your ECO score</h3>
            <h5>Lorem ipsum dolor sit amet consectetur.</h5>
          </div>
          <div className="eco-score__container">
            <div className="eco-score-card">
              <div className="noEnoughData">
                <img src={NoEnoughData} />
                <div className="noEnoughData__text">
                  <h3>Not enough data</h3>
                  <p>
                    Add at least one device to your configuration to calculate
                    your ECO score.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
