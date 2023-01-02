import { Tooltip } from '@mui/material'
import { DEVICE } from '../../Shared/models/Device'

interface Props {
  deviceParams: DEVICE | null
}

const ApplianceInfo: React.FC<Props> = ({ deviceParams }: Props) => {
  const copyHandler = (val: string | number | undefined) => {
    navigator.clipboard.writeText(val != null ? String(val) : 'unknown')
  }

  return (
    <>
      <Tooltip
        title={deviceParams != null ? deviceParams.manufacturer : 'unknown'}
      >
        <div
          className="info"
          onClick={() => copyHandler(deviceParams?.manufacturer)}
        >
          <p className="info__label">
            Manufacturer:{' '}
            <span className="info__value" id="info__manufacturer--selected">
              {deviceParams != null ? deviceParams.manufacturer : 'unknown'}
            </span>
          </p>
        </div>
      </Tooltip>
      <Tooltip
        title={deviceParams != null ? deviceParams.modelIdentifier : 'unknown'}
      >
        <div
          className="info"
          onClick={() => copyHandler(deviceParams?.modelIdentifier)}
        >
          <p className="info__label">
            Serial number:{' '}
            <span className="info__value" id="info__model-identifier--selected">
              {deviceParams != null ? deviceParams.modelIdentifier : 'unknown'}
            </span>
          </p>
        </div>
      </Tooltip>
      <Tooltip
        title={
          deviceParams != null ? `${deviceParams.annualCost},-` : 'unknown'
        }
      >
        <div
          className="info"
          onClick={() => copyHandler(deviceParams?.annualCost)}
        >
          <p className="info__label">
            Annual cost:{' '}
            <span className="info__value" id="info__annual-cost--selected">
              {deviceParams != null
                ? `${deviceParams.annualCost},-`
                : 'unknown'}
            </span>
          </p>
        </div>
      </Tooltip>
      <Tooltip
        title={
          deviceParams != null
            ? `${deviceParams.powerConsumption}kWh`
            : 'unknown'
        }
      >
        <div
          className="info"
          onClick={() => copyHandler(deviceParams?.powerConsumption)}
        >
          <p className="info__label">
            Power Usage:{' '}
            <span
              className="info__value"
              id="info__power-consumtpion--selected"
            >
              {deviceParams != null
                ? `${deviceParams.powerConsumption}kWh`
                : 'unknown'}
            </span>
          </p>
        </div>
      </Tooltip>
    </>
  )
}

export default ApplianceInfo
