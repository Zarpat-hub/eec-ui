import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { SyntheticEvent, Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import img from '../../../assets/appliance_serial_number.png'
import infoIcon from '../../../assets/info_icon.png'
import CloseIcon from '@mui/icons-material/Close'
import variables from '../../../variables.module.scss'
import { InputGroupLabel } from './InputGroupLabel'
import './AddAppliancePopup.scss'

type Inputs = {
  category: string
  supplierOrTrademark: string
  deviceName: string
  modelIdentifier: string
}

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const categoriesDummy = [
  // DUMMY
  'Dishwashers',
  'Ovens',
  'Washing machines',
  'Refrigerators',
  'Air conditioners',
]

let manufacturersDummy = [
  // DUMMY
  'tesla',
  'blachotrapez',
  'januszex',
  'w goracej wodzie company',
]

const serialNumbersDummy = [
  // DUMMY
  'aa123bcd',
  'cddsf21312',
  '324f32f32f32',
  'sdfsd214312',
]

export const AddAppliancePopup: React.FC<Props> = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const [category, setCategory] = useState<string | null>(null)
  const [manufacturer, setManufacturer] = useState<string | null>(null)
  const [serialNumber, setSerialNumber] = useState<string | null>(null)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('mobile'))

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data)
  }

  const handleCategoryChange = (
    e: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setCategory(value)
    setManufacturer(null)
    setSerialNumber(null)

    reset({
      supplierOrTrademark: '',
      modelIdentifier: '',
      deviceName: '',
    })

    if (value === 'Air conditioners') {
      // TO DELETE
      manufacturersDummy = ['test1', 'test2']
    }

    if (categoriesDummy.includes(String(value))) {
      clearErrors(['category', 'supplierOrTrademark'])
      return
    }

    setError('category', {
      type: 'NO_CATEGORY',
      message: 'You must choose category first.',
    })
  }

  const handleManufacturerChange = (
    e: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setManufacturer(value)
    setSerialNumber(null)
    reset({
      modelIdentifier: '',
      deviceName: '',
    })

    if (manufacturersDummy.includes(String(value))) {
      clearErrors('supplierOrTrademark')
      return
    }

    setError('supplierOrTrademark', {
      type: 'NO_MANUFACTURER',
      message: 'You must choose manufacturer first.',
    })
  }

  const handleSerialNumberChange = (
    e: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setSerialNumber(value)
    reset({
      deviceName: '',
    })

    if (serialNumbersDummy.includes(String(value))) {
      clearErrors('modelIdentifier')
      return
    }

    setError('modelIdentifier', {
      type: 'NO_SERIAL_NUMBER',
      message: 'You must type in serial number of your device first.',
    })
  }

  const handleClose = () => {
    clearErrors('category')
    setCategory(null)
    setManufacturer(null)
    setSerialNumber(null)
    props.setOpen(false)
  }

  return (
    <Dialog
      className="popup"
      open={props.open}
      fullScreen={fullScreen}
      sx={{ '& > div > div': { borderRadius: '16px' } }}
    >
      <div className="header-group">
        <span>
          <p className="header-group__label">Add Device</p>
          <p className="header-group__text">
            Add devices to your home configuration to calculate your eco score.
          </p>
        </span>
        <CloseIcon
          sx={{
            cursor: 'pointer',
            backgroundColor: '#F0F0F0',
            transition: '200ms',
            '&:hover': { filter: 'brightness(.95)' },
          }}
          onClick={handleClose}
        />
      </div>

      <DialogContent sx={{ p: '1.5rem', py: 0 }}>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input-group">
            <p className="input-group__label">Select category</p>
            <p className="input-group__text">
              Enter the device&apos;s category.
            </p>
            <Autocomplete
              id="categories-input"
              options={categoriesDummy}
              onChange={handleCategoryChange}
              value={category ?? null}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...register('category', {
                    required: true,
                  })}
                  error={!(errors.category == null)}
                />
              )}
            />
          </div>

          <div className="input-group">
            {/* <p className={`input-group__label ${!!errors.category || !category ? "input-group__label--disabled" : ""}`}>Select manufacturer</p> */}
            <InputGroupLabel
              disabled={!(errors.category == null) || category == null}
            >
              Select manufacturer
            </InputGroupLabel>
            <p className="input-group__text">Find producent of your device.</p>
            <Autocomplete
              sx={{ '.MuiAutocomplete-endAdornment': { display: 'none' } }}
              id="manufacturer-input"
              options={manufacturersDummy}
              disabled={!(errors.category == null) || category == null}
              onChange={handleManufacturerChange}
              value={manufacturer ?? null}
              renderInput={(params) => (
                <TextField
                  {...register('supplierOrTrademark', {
                    required: true,
                  })}
                  {...params}
                  error={
                    errors.category == null &&
                    !(errors.supplierOrTrademark == null)
                  }
                />
              )}
            />
          </div>

          <div className="input-group">
            {/* <p className="input-group__label">Serial number</p> */}
            <InputGroupLabel
              disabled={
                !(errors.category == null) ||
                category == null ||
                manufacturer == null
              }
            >
              Serial number
            </InputGroupLabel>
            <p className="input-group__text">
              Enter your device serial number to identify it.
            </p>
            <Autocomplete
              sx={{ '.MuiAutocomplete-endAdornment': { display: 'none' } }}
              id="serial-number-input"
              options={serialNumbersDummy}
              disabled={
                !(errors.category == null) ||
                category == null ||
                manufacturer == null
              }
              onChange={handleSerialNumberChange}
              value={serialNumber ?? null}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...register('modelIdentifier', {
                    required: true,
                  })}
                  error={
                    errors.category == null &&
                    errors.supplierOrTrademark == null &&
                    !(errors.modelIdentifier == null)
                  }
                />
              )}
            />
          </div>

          <div className="input-group">
            {/* <p className="input-group__label">Device name</p> */}
            <InputGroupLabel
              disabled={
                !(errors.category == null) ||
                category == null ||
                manufacturer == null ||
                serialNumber == null
              }
            >
              Device name
            </InputGroupLabel>
            <p className="input-group__text">
              Name your device to easily identify certain devices.
            </p>
            <TextField
              sx={{ '& div input': { pl: '15px' } }}
              className="input-group__input"
              disabled={
                !(errors.category == null) ||
                category == null ||
                manufacturer == null ||
                serialNumber == null
              }
              {...register('deviceName')}
            />
          </div>

          <div className="hint-group">
            <img className="hint-group__img" src={img} />
            <div className="hint-group__instructions instructions-group">
              <img className="instructions-group__img" src={infoIcon} />
              <p className="instructions-group__label">
                How to find device serial number?
              </p>
              <p className="instructions-group__text">
                Refrigerator serial number can often be find on the side of the
                sides of the door or fridge itself.
              </p>
              <a href="" className="instructions-group__link">
                Can’t find serial number?
              </a>
            </div>
          </div>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.5rem' }}>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
