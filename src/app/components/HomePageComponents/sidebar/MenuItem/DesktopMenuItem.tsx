import './MenuItem.scss'

type MenuItemProps = {
  text?: string
  icon?: any
}

export const DesktopMenuItem = ({ text, icon }: MenuItemProps) => {
  const Icon = icon
  return (
    <div className="menuItem">
      <Icon />
      <div>{text}</div>
    </div>
  )
}
