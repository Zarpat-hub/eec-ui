import { useDevices } from '../../../context/DevicesContext'
import { AddAppliancePopup } from '../../addAppliancePopup/AddAppliancePopup'
import { useState } from 'react'
import './NewItem.scss'

export const NewItem = () => {
  const { addDevice } = useDevices()
  const [openPopup, setOpenPopup] = useState<boolean>(false)

  const handleClick = () => {
    setOpenPopup(true)
  }

  return (
    <>
      <AddAppliancePopup open={openPopup} setOpen={setOpenPopup} />

      <div className="newItem" onClick={handleClick}>
        <span className="newItem__sign">
          <span>+</span>
        </span>
      </div>
    </>
  )
}
