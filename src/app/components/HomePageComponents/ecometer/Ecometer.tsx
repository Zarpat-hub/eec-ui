import './Ecometer.scss'
import ecometerGraphic from '../../../../assets/ecometer.png'
import upgradeArrow from '../../../../assets/upgrade_arrow.png'
import CountUp from 'react-countup'
import { useEffect, useRef, useState } from 'react'
import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'

const Ecometer: React.FC = () => {
  const [defaultEcoScore, setDefaultEcoScore] = useState<number>(0)
  const [upgradedEcoScore, setUpgradedEcoScore] = useState<number>(0)
  const [previousDefaultEcoScore, setPreviousDefaultEcoScore] =
    useState<number>(0)
  const [previousUpgradedEcoScore, setPreviousUpgradedEcoScore] =
    useState<number>(0)
  const { devices } = useDevices()
  const currentRef = useRef<any>()
  const labelsRef = useRef<any>()
  const upgradedRef = useRef<any>()
  const arrowRef = useRef<any>()
  const indicatorPreviousRef = useRef<any>()
  const indicatorPreviousDotRef = useRef<any>()
  const indicatorRef = useRef<any>()
  const indicatorDotRef = useRef<any>()

  useEffect(() => {
    // if (devices.length === 0) {
    //   setPreviousDefaultEcoScore(0);
    //   setPreviousUpgradedEcoScore(0);
    //   setDefaultEcoScore(0);
    //   setUpgradedEcoScore(0);
    //   hideUpgradeDot();
    //   return;
    // }

    setPreviousDefaultEcoScore(defaultEcoScore)
    setPreviousUpgradedEcoScore(upgradedEcoScore)
    const [e1, e2] = ecoScoreCalc(devices)

    const includeUpgrade = Boolean(
      devices.find((device: DEVICE) => device.previousDevice !== undefined)
    )
    setDefaultEcoScore((prev) => {
      updateDefaultEcoScore(prev, e1)
      return e1
    })

    setUpgradedEcoScore((prev) => {
      if (includeUpgrade) {
        updateUpgradedEcoScore(prev, e2)
      } else {
        hideUpgradeDot()
      }
      return e2
    })
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

  const updateUpgradedEcoScore = (prevEcoScore: number, ecoScore: number) => {
    indicatorDotRef.current.style.visibility = 'visible'
    indicatorRef.current.animate(
      [
        {
          transform: `rotate(${prevEcoScore * 1.8}deg)`,
          top: `${83 + Math.abs(prevEcoScore * 0.015)}%`,
        },
        {
          transform: `rotate(${ecoScore * 1.8}deg)`,
          top: `${83 + Math.abs(ecoScore * 0.015)}%`,
        },
      ],
      { duration: 1000, fill: 'forwards', easing: 'ease-in-out' }
    )

    currentRef.current.classList.remove('labels__current--upgradeless')
    upgradedRef.current.classList.add('labels__upgraded--upgraded')
    arrowRef.current.classList.add('labels__arrow--upgraded')
    labelsRef.current.classList.remove('ecometer__labels--upgradeless')
  }

  const updateDefaultEcoScore = (prevEcoScore: number, ecoScore: number) => {
    indicatorPreviousDotRef.current.style.visibility = 'visible'
    indicatorPreviousRef.current.animate(
      [
        {
          transform: `rotate(${prevEcoScore * 1.8}deg)`,
          top: `${83 + Math.abs(prevEcoScore * 0.015)}%`,
        },
        {
          transform: `rotate(${ecoScore * 1.8}deg)`,
          top: `${83 + Math.abs(ecoScore * 0.015)}%`,
        },
      ],
      { duration: 1000, fill: 'forwards', easing: 'ease-in-out' }
    )
  }

  const hideUpgradeDot = () => {
    indicatorDotRef.current.style.visibility = 'hidden'
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
              start={Number(previousUpgradedEcoScore)}
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
