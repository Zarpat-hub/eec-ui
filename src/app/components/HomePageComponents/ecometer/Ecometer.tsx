import './Ecometer.scss'
import ecometerGraphic from '../../../../assets/ecometer.png'
import upgradeArrow from '../../../../assets/upgrade_arrow.png'
import CountUp from 'react-countup'
import { useEffect, useRef, useState } from 'react'
import { useDevices } from '../../../context/DevicesContext'
import { DEVICE } from '../../Shared/models/Device'

const Ecometer: React.FC = () => {
  const [currentEcoScore, setCurrentEcoScore] = useState<number | null>(null)
  const [upgradedEcoScore, setUpgradedEcoScore] = useState<number | null>(null)
  const [previousCurrentEcoScore, setPreviousCurrentEcoScore] = useState<
    number | null
  >(0)
  const [previousUpgradedEcoScore, setPreviousUpgradedEcoScore] = useState<
    number | null
  >(0)
  const { devices, upgradeDevice } = useDevices()
  const currentRef = useRef<any>()
  const labelsRef = useRef<any>()
  const upgradedRef = useRef<any>()
  const arrowRef = useRef<any>()
  const indicatorRef = useRef<any>()
  const indicatorDotRef = useRef<any>()
  const [d, setD] = useState<number>(0)

  // useEffect(() => {
  //   const ecoScore = ecoScoreCalc(devices);
  //   setCurrentEcoScore(ecoScore)
  // }, [])

  useEffect(() => {
    setPreviousCurrentEcoScore(currentEcoScore)
    setPreviousUpgradedEcoScore(upgradedEcoScore)
    const [e1, e2] = ecoScoreCalc(devices)
    console.log(e1, e2)
    console.log(d === devices.length)
    console.log(devices)

    if (d === devices.length) {
      test(e2)
    } else {
      setCurrentEcoScore(e1)
      const isUpgrade = Boolean(
        devices.find((device: DEVICE) => device.upgradedIndex !== undefined)
      )
      if (isUpgrade) {
        test(e2)
      }
    }
    // test(ecoScore);
    setD(devices.length)
  }, [devices])

  const ecoScoreCalc = (devices: DEVICE[]): number[] => {
    let ecoScoreDefault = 0
    let ecoScoreUpgraded = 0

    for (const device of devices) {
      // console.log(`${device.modelIdentifier} -> ${device.ecoScore}`)

      if (device.upgradedIndex && device.upgrade) {
        ecoScoreUpgraded += Number(
          device.upgrade[device.upgradedIndex].ecoScore
        )
        ecoScoreDefault += Number(device.ecoScore)
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

  const test = (ecoScore: number) => {
    indicatorDotRef.current.style.display = 'block'
    indicatorRef.current.animate(
      {
        transform: `rotate(${ecoScore * 1.8}deg)`,
        top: `${85 + Math.abs(ecoScore * 0.015)}%`,
      },
      { duration: 1000, fill: 'forwards', easing: 'ease-in-out' }
    )
    setUpgradedEcoScore(ecoScore)

    currentRef.current.classList.remove('labels__current--upgradeless')
    upgradedRef.current.classList.add('labels__upgraded--upgraded')
    arrowRef.current.classList.add('labels__arrow--upgraded')
    labelsRef.current.classList.remove('ecometer__labels--upgradeless')
  }

  const hide = () => {
    currentRef.current.classList.add('labels__current--upgradeless')
    upgradedRef.current.classList.remove('labels__upgraded--upgraded')
    arrowRef.current.classList.remove('labels__arrow--upgraded')
    labelsRef.current.classList.add('ecometer__labels--upgradeless')
  }

  return (
    <div className="ecometer-container">
      {/* <div className="ecometer">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div> */}
      <div className="ecometer">
        <img src={ecometerGraphic} className="ecometer__graphic" />
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
              start={Number(previousCurrentEcoScore)}
              end={Number(currentEcoScore)}
              duration={1}
            />
          </p>
        </div>
      </div>
      {/* <button style={{ position: 'absolute', top: '0px' }} onClick={() => test(0)}>
        test
      </button>
      <button style={{ position: 'absolute', top: '20px' }} onClick={hide}>
        hide
      </button> */}
    </div>
  )
}

export default Ecometer
