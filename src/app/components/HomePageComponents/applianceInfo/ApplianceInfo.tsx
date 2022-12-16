import { DEVICE } from '../../Shared/models/Device'

interface Props {
  deviceParams: DEVICE | null
}

const ApplianceInfo: React.FC<Props> = ({ deviceParams }: Props) => {
  return (
    <>
      <div className="info">
        <p className="info__label">
          Manufacturer:{' '}
          <span className="info__value" id="info__manufacturer--selected">
            {deviceParams != null
              ? deviceParams.supplierOrTrademark
              : 'unknown'}
          </span>
        </p>
      </div>
      <div className="info">
        <p className="info__label">
          Annual cost:{' '}
          <span className="info__value" id="info__annual-cost--selected">
            {deviceParams != null ? `${deviceParams.annualCost},-` : 'unknown'}
          </span>
        </p>
      </div>
      <div className="info">
        <p className="info__label">
          Serial number:{' '}
          <span className="info__value" id="info__model-identifier--selected">
            {deviceParams != null ? deviceParams.modelIdentifier : 'unknown'}
          </span>
        </p>
      </div>
      <div className="info">
        <p className="info__label">
          Power Consumption:{' '}
          <span className="info__value" id="info__power-consumtpion--selected">
            {deviceParams != null
              ? `${deviceParams.energyConsumption}kWh`
              : 'unknown'}
          </span>
        </p>
      </div>
    </>
  )
}

export default ApplianceInfo
