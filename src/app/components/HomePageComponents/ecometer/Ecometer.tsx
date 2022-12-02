import './Ecometer.scss'
import ecometerGraphic from '../../../../assets/ecometer.png'
import upgradeArrow from '../../../../assets/upgrade_arrow.png'
import { useEffect, useRef, useState } from 'react'

const Ecometer: React.FC = () => {
  const [currentEcoScore, setCurrentEcoScore] = useState<number | null>(null)
  const [upgradedEcoScore, setUpgradedEcoScore] = useState<number | null>(null)
  const currentRef = useRef<any>()
  const labelsRef = useRef<any>()
  const upgradedRef = useRef<any>()
  const arrowRef = useRef<any>()
  const indicatorRef = useRef<any>()
  const indicatorDotRef = useRef<any>()

  useEffect(() => {
    setCurrentEcoScore(24)
    setUpgradedEcoScore(24)
  }, [])

  const setDot = (i: number) => {
    indicatorDotRef.current.style.display = 'block'
    indicatorRef.current.style.transform = `rotate(${i * 1.8}deg)`
    indicatorRef.current.style.top = `${85 + Math.abs(i * 0.025)}%`
  }

  const test = () => {
    const nextValue = Math.floor(Math.random() * 100) + 1
    const prevValue = Number(upgradedEcoScore)

    if (prevValue < nextValue) {
      for (let i = prevValue; i <= nextValue; i++) {
        setTimeout(() => {
          setUpgradedEcoScore(i)
          setDot(i)
        }, (i - prevValue) * 30)
      }
    } else {
      for (let i = prevValue; i >= nextValue; i--) {
        setTimeout(() => {
          setUpgradedEcoScore(i)
          setDot(i)
        }, (prevValue - i) * 30)
      }
    }

    console.log(Math.random)
    currentRef.current.classList.remove('labels__current--upgradeless')
    upgradedRef.current.classList.add('labels__upgraded--upgraded')
    arrowRef.current.classList.add('labels__arrow--upgraded')
    labelsRef.current.classList.remove('ecometer__labels--upgradeless')
    console.log(upgradedRef.current)
  }

  const hide = () => {
    currentRef.current.classList.add('labels__current--upgradeless')
    upgradedRef.current.classList.remove('labels__upgraded--upgraded')
    arrowRef.current.classList.remove('labels__arrow--upgraded')
    labelsRef.current.classList.add('ecometer__labels--upgradeless')
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* <div className="ecometer">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div> */}
      <div className="ecometer">
        <img src={ecometerGraphic} className="ecometer__graphic" />
        <div className="ecometer__indicator" ref={indicatorRef}>
          <div className="ecometer__indicator--dot" ref={indicatorDotRef}></div>
        </div>
        <div
          className="ecometer__labels ecometer__labels--upgradeless labels"
          ref={labelsRef}
        >
          <p className="labels__upgraded" ref={upgradedRef}>
            {upgradedEcoScore}
          </p>
          <img src={upgradeArrow} className="labels__arrow" ref={arrowRef} />
          <p
            className="labels__current labels__current--upgradeless"
            ref={currentRef}
          >
            {currentEcoScore}
          </p>
        </div>
      </div>
      <button onClick={test}>test</button>
      <button onClick={hide}>hide</button>
    </div>
  )
}

export default Ecometer
