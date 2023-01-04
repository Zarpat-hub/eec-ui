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
  const { waterPrice, energyPrice, devices, suggestedDevice, activeDevice } =
    useDevices()
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

    setPreviousMoney([spendings, moneySavings, moneyPercentages])
    setPreviousEnergy([energyUsed, energyReduced, energyPercentages])
    // suggestion()
    const [x1, x2, x3, x4] = spendingsAndEnergyCalc(devices)

    setSpendings(x1)
    setMoneySavings(x2)
    setMoneyPercentages(Number((((x1 - x2) / x1) * 100).toFixed(2)))
    setEnergyUsed(x3)
    setEnergyReduced(x4)
    setEnergyPercentages(Number((((x3 - x4) / x3) * 100).toFixed(2)))

    if (!suggestedDevice?.modelIdentifier) {
      noSuggestion()
    } else {
      suggestion()
    }
  }, [suggestedDevice])

  useEffect(() => {
    if (devices.length === 0) return

    setPreviousMoney([spendings, moneySavings, moneyPercentages])
    setPreviousEnergy([energyUsed, energyReduced, energyPercentages])
    noSuggestion()
    const [x1, x2, x3, x4] = spendingsAndEnergyCalc(devices)

    setSpendings(x1)
    setMoneySavings(x2)
    setMoneyPercentages(Number((((x1 - x2) / x1) * 100).toFixed(2)))
    setEnergyUsed(x3)
    setEnergyReduced(x4)
    setEnergyPercentages(Number((((x3 - x4) / x3) * 100).toFixed(2)))
  }, [waterPrice, energyPrice])

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
        device.uuid === activeDevice.uuid &&
        suggestedDevice?.modelIdentifier
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
      Math.floor(spendings),
      Math.floor(savings),
      Math.floor(energyUsed),
      Math.floor(energyReduced),
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
      [{ transform: 'translateX(70%)', fontSize: '20px' }],
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
                          style={{ fontSize: 20 }}
                        />
                        ,-
                      </span>
                      <span
                        className="money-savings__percentages"
                        ref={moneyPercentagesRef}
                      >
                        +
                        <CountUp
                          start={previousMoney[2]}
                          end={moneyPercentages}
                          duration={1}
                          decimals={2}
                        />
                        %
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
                      kWh
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
                          style={{ fontSize: 20 }}
                        />
                        kWh
                      </span>
                      <span
                        className="energy-savings__percentages"
                        ref={energyPercentagesRef}
                      >
                        +
                        <CountUp
                          start={previousEnergy[2]}
                          end={energyPercentages}
                          duration={1}
                          decimals={2}
                        />
                        %
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
          <SectionHeader
            main="Your ECO score 🍃"
            sub="Calculate your housheold energy efficiency"
            secondary
          />
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
