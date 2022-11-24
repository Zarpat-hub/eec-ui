import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
  useMediaQuery,
} from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import img from '../../../assets/appliance_serial_number.png'
import info from '../../../assets/info.png'

import './AddAppliancePopup.scss'

export const AddAppliancePopup: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [open, setOpen] = useState(true)
  const fullScreen = useMediaQuery('(max-width:768px)')
  const onSubmit = (data: any) => console.log(data);

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      className="popup"
      open={open}
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
        <p>X</p>
      </div>

      <DialogContent sx={{ p: '1.5rem', py: 0 }}>
        {/* <form onSubmit={handleSubmit(onSubmit)} className="form"> */}
        <form className="form">
          <div className="input-group">
            <p className="input-group__label">Select manufacturer</p>
            <p className="input-group__text">Find producent of your device .</p>
            <input className="input-group__input" />
          </div>

          <div className="input-group">
            <p className="input-group__label">Device name</p>
            <p className="input-group__text">
              Name your device to easily identify certain devices.
            </p>
            <input className="input-group__input" />
          </div>

          <div className="input-group">
            <p className="input-group__label">Serial number</p>
            <p className="input-group__text">
              Enter your device serial number to identify it.
            </p>
            <input className="input-group__input" />
          </div>

          <div className="hint-group">
            <img className="hint-group__img" src={img} />
            <div className="hint-group__instructions instructions-group">
              <img className="instructions-group__img" src={info} />
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
          {/* <OutlinedInput
                            id='serial-number'
                            sx={{ '& input': {py: '.5rem'} }}
                        />
                        
                        <OutlinedInput 
                            sx={{ '& input': {py: '.5rem'} }}
                        /> */}
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.5rem' }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
