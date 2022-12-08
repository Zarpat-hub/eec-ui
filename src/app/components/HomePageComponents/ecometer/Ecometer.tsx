import './Ecometer.scss'
import ecometerGraphic from '../../../../assets/ecometer.png'
import upgradeArrow from '../../../../assets/upgrade_arrow.png'
import CountUp from 'react-countup'
import { useEffect, useRef, useState } from 'react'
import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'

const Ecometer: React.FC = () => {
  const [defaultEcoScore, setDefaultEcoScore] = useState<number | null>(null)
  const [upgradedEcoScore, setUpgradedEcoScore] = useState<number | null>(null)
  const [previousDefaultEcoScore, setPreviousDefaultEcoScore] = useState<
    number | null
  >(0)
  const { devices } = useDevices()
  const currentRef = useRef<any>()
  const labelsRef = useRef<any>()
  const upgradedRef = useRef<any>()
  const arrowRef = useRef<any>()
  const indicatorPreviousRef = useRef<any>()
  const indicatorPreviousDotRef = useRef<any>()
  const indicatorRef = useRef<any>()
  const indicatorDotRef = useRef<any>()
  const [d, setD] = useState<number>(0)

  useEffect(() => {
    setPreviousDefaultEcoScore(defaultEcoScore)
    const [e1, e2] = ecoScoreCalc(devices)

    if (d === devices.length) {
      updateUpgradedEcoScore(e2)
    } else {
      updateDefaultEcoScore(e1)
      const isUpgrade = Boolean(
        devices.find((device: DEVICE) => device.previousDevice !== undefined)
      )
      if (isUpgrade) {
        updateUpgradedEcoScore(e2)
      }
    }

    setD(devices.length)
  }, [devices])

  const ecoScoreCalc = (devices: DEVICE[]): number[] => {
    let ecoScoreDefault = 0
    let ecoScoreUpgraded = 0

    for (const device of devices) {
      if (device.previousDevice !== undefined) {
        ecoScoreUpgraded += Number(device.ecoScore)
        ecoScoreDefault += Number(device.previousDevice.ecoScore)
      } else {
        ecoScoreUpgraded += Number(device.ecoScore)
        ecoScoreDefault += Number(device.ecoScore)
      }
    }

    return [
      Math.floor(ecoScoreDefault / devices.length),
      Math.floor(ecoScoreUpgraded / devices.length),
    ]
  }

  const updateUpgradedEcoScore = (ecoScore: number) => {
    indicatorDotRef.current.style.display = 'block'
    indicatorRef.current.style.transform = `rotate(${
      Number(defaultEcoScore) * 1.8
    }deg`
    indicatorRef.current.style.top = `${
      83 + Math.abs(Number(defaultEcoScore) * 0.015)
    }%`
    indicatorRef.current.animate(
      {
        transform: `rotate(${ecoScore * 1.8}deg)`,
        top: `${83 + Math.abs(ecoScore * 0.015)}%`,
      },
      { duration: 1000, fill: 'forwards', easing: 'ease-in-out' }
    )
    setUpgradedEcoScore(ecoScore)

    currentRef.current.classList.remove('labels__current--upgradeless')
    upgradedRef.current.classList.add('labels__upgraded--upgraded')
    arrowRef.current.classList.add('labels__arrow--upgraded')
    labelsRef.current.classList.remove('ecometer__labels--upgradeless')
  }

  const updateDefaultEcoScore = (ecoScore: number) => {
    indicatorPreviousDotRef.current.style.display = 'block'
    indicatorPreviousRef.current.animate(
      {
        transform: `rotate(${ecoScore * 1.8}deg)`,
        top: `${83 + Math.abs(ecoScore * 0.015)}%`,
      },
      { duration: 1000, fill: 'forwards', easing: 'ease-in-out' }
    )
    setDefaultEcoScore(ecoScore)
  }

  const hide = () => {
    currentRef.current.classList.add('labels__current--upgradeless')
    upgradedRef.current.classList.remove('labels__upgraded--upgraded')
    arrowRef.current.classList.remove('labels__arrow--upgraded')
    labelsRef.current.classList.add('ecometer__labels--upgradeless')
  }

  return (
    <div className="ecometer-container">
      <div className="ecometer">
        <img src={ecometerGraphic} className="ecometer__graphic" />
        <div
          className="ecometer__indicator-previous"
          ref={indicatorPreviousRef}
        >
          <div
            className="ecometer__indicator-previous--dot"
            ref={indicatorPreviousDotRef}
          />
        </div>
        <div className="ecometer__indicator" ref={indicatorRef}>
          <div className="ecometer__indicator--dot" ref={indicatorDotRef} />
        </div>
        <div
          className="ecometer__labels ecometer__labels--upgradeless labels"
          ref={labelsRef}
        >
          <p className="labels__upgraded" ref={upgradedRef}>
            <CountUp
              start={Number(defaultEcoScore)}
              end={Number(upgradedEcoScore)}
              duration={1}
            />
          </p>
          <img src={upgradeArrow} className="labels__arrow" ref={arrowRef} />
          <p
            className="labels__current labels__current--upgradeless"
            ref={currentRef}
          >
            <CountUp
              start={Number(previousDefaultEcoScore)}
              end={Number(defaultEcoScore)}
              duration={1}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ecometer
