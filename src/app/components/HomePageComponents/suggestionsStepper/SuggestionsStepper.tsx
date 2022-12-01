import { Button, MobileStepper, Box } from '@mui/material'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import { useRef, useState } from 'react'
import { ConfigurationItem } from '../../Shared/ConfigurationItem/ConfigurationItem'
import variables from '../../../../variables.module.scss'
import './SuggestionsStepper.scss'

interface Props {
  suggestions: any[]
}

export const SuggestionsStepper: React.FC<Props> = ({ suggestions }: Props) => {
  const [activeStep, setActiveStep] = useState(0)
  const [delayedStep, setDelayedStep] = useState(0)
  const [lock, setLock] = useState(false)
  const animatingBox = useRef<any>()
  const maxSteps = suggestions.length

  const handleNext = () => {
    if (!lock) {
      setTimeout(() => {
        setDelayedStep((prev) => prev + 1)
      }, 375)
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      animatingBox.current.classList.add('animate--right')
    }
  }

  const handleBack = () => {
    if (!lock) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
      setTimeout(() => {
        setDelayedStep((prev) => prev - 1)
      }, 375)
      animatingBox.current.classList.add('animate--left')
    }
  }

  const animationEndHandler = () => {
    animatingBox.current.classList.remove('animate--left')
    animatingBox.current.classList.remove('animate--right')
    setLock(false)
  }

  const animationStartHandler = () => {
    setLock(true)
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{ height: '100%' }}
      >
        <KeyboardArrowLeft sx={{ fontSize: '32px' }} />
      </Button>

      <Box
        sx={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <div
          className="animating-box"
          ref={animatingBox}
          onAnimationEnd={animationEndHandler}
          onAnimationStart={animationStartHandler}
        >
          <ConfigurationItem
            category={suggestions[delayedStep].category}
            cost={suggestions[delayedStep].cost}
            energyClassName={suggestions[delayedStep].energyClassName}
          />
        </div>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          backButton={null}
          nextButton={null}
          sx={{
            padding: '5px',
            '.MuiMobileStepper-dot': {
              margin: '0 12px',
              backgroundColor: '#E5E5E5',
              width: '10px',
              height: '10px',
            },
            '.MuiMobileStepper-dotActive': {
              border: `2px solid ${variables.accentVibrantBlue}`,
            },
          }}
        />
      </Box>

      <Button
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        sx={{ height: '100%' }}
      >
        <KeyboardArrowRight sx={{ fontSize: '32px' }} />
      </Button>
    </div>
  )
}
