import { useDevices } from '../../../context/DevicesContext'
import { AddAppliancePopup } from '../../addAppliancePopup/AddAppliancePopup'
import { useState } from 'react'
import './NewItem.scss'

type newItemProps = {
  text: string
  first: boolean
}

export const NewItem = ({ text, first }: newItemProps) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false)

  const handleClick = () => {
    setOpenPopup(true)
  }

  return (
    <>
      <AddAppliancePopup open={openPopup} setOpen={setOpenPopup} />

      {!first ? (
        <div className="newItem" onClick={handleClick}>
          <span className="newItem__sign">
            <span>+</span>
          </span>
          <span>{text}</span>
        </div>
      ) : (
        <div className="newItemFirst" onClick={handleClick}>
          <span className="newItemFirst__sign">
            <span>+</span>
          </span>
          <span>{text}</span>
        </div>
      )}
    </>
  )
}
