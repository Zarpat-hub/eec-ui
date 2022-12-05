import { useDevices } from '../../../context/DevicesContext'
import './NewItem.scss'

export const NewItem = () => {
  const { addDevice } = useDevices()

  const handleClick = () => {
    addDevice(null)
  }

  return (
    <div className="newItem" onClick={handleClick}>
      <span className="newItem__sign">
        <span>+</span>
      </span>
    </div>
  )
}
