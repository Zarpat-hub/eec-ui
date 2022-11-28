import './AddAppliancePopup.scss'

interface Props {
  disabled: boolean
  children: React.ReactNode
}

export const InputGroupLabel: React.FC<Props> = (props: Props) => {
  return (
    <p
      className={`input-group__label ${
        props.disabled ? 'input-group__label--disabled' : ''
      }`}
    >
      {props.children}
    </p>
  )
}
