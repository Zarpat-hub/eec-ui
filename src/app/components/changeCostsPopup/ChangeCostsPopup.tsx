import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material'
import { Dispatch, SetStateAction, useState, useRef } from 'react'

import './ChangeCostsPopup.scss'
import CloseIcon from '@mui/icons-material/Close'
import { useDevices } from '../../context/DevicesContext'

type Props = {
  openPopup: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const ChangeCostsPopup = ({ openPopup, setOpen }: Props) => {
  const { waterPrice, energyPrice, changeCosts } = useDevices()

  const [newWaterPrice, setNewWaterPrice] = useState<string>('')
  const [newEnergyPrice, setNewEnergyPrice] = useState<string>('')
  const energyPriceRef = useRef<any>()
  const waterPriceRef = useRef<any>()

  const handleClose = () => {
    setOpen(false)
  }

  const handleSave = () => {
    if (Number(newEnergyPrice) <= 0) {
      energyPriceRef.current.focus()
      return
    }

    if (Number(newWaterPrice) <= 0) {
      waterPriceRef.current.focus()
      return
    }

    changeCosts(newEnergyPrice, newWaterPrice)

    handleClose()
  }

  return (
    <Dialog
      open={openPopup}
      onClose={handleClose}
      sx={{ '& > div > div': { borderRadius: '16px' } }}
      className="popup"
    >
      <div className="header-group">
        <span>
          <p className="header-group__label">Chage costs</p>
          <p className="header-group__text">
            Change costs proper to your household
          </p>
        </span>
        <CloseIcon
          sx={{
            width: '28px',
            height: '28px',
            borderRadius: '7px',
            cursor: 'pointer',
            backgroundColor: '#F0F0F0',
            transition: '200ms',
            '&:hover': { filter: 'brightness(.95)' },
          }}
          onClick={handleClose}
        />
      </div>
      <DialogContent sx={{ p: '1.5rem', py: 0 }}>
        <form className="form">
          <div className="input-group">
            <p className="input-group__label">Energy price</p>
            <p className="input-group__text">
              Enter the household energy price for 1kWh
            </p>
            <TextField
              sx={{ '& div input': { pl: '15px' } }}
              className="input-group__input"
              inputProps={{ inputMode: 'numeric', min: 0.01 }}
              type="number"
              inputRef={energyPriceRef}
              error={Boolean(newEnergyPrice) && Number(newEnergyPrice) <= 0}
              placeholder={String(energyPrice)}
              onChange={(e) => setNewEnergyPrice(e.target.value)}
            />
          </div>
          <div className="input-group">
            <p className="input-group__label">Water price</p>
            <p className="input-group__text">
              Enter the household water price for 1m<sup>3</sup>
            </p>
            <TextField
              sx={{ '& div input': { pl: '15px' } }}
              className="input-group__input"
              inputProps={{ inputMode: 'numeric', min: 0.01 }}
              type="number"
              inputRef={waterPriceRef}
              error={Boolean(newWaterPrice) && Number(newWaterPrice) <= 0}
              placeholder={String(waterPrice)}
              onChange={(e) => setNewWaterPrice(e.target.value)}
            />
          </div>
        </form>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" id="button_cancel" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" id="button_main" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
