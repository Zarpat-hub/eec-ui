import './Sidebar.scss'
import logo from '../../../../assets/logo.png'
import { MenuItem, Button, Menu } from '@mui/material'
import { useState } from 'react'
import HouseIcon from '@mui/icons-material/House'
import { DesktopMenuItem } from './MenuItem/DesktopMenuItem'
import BarChartIcon from '@mui/icons-material/BarChart'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

import MoreVertIcon from '@mui/icons-material/MoreVert'
export const Sidebar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <aside>
      <div className="menuDesktop">
        <div>
          <img src={logo} />
          <DesktopMenuItem text="Homepage" icon={HouseIcon} />
          <DesktopMenuItem text="Dashboard" icon={BarChartIcon} />
          <DesktopMenuItem text="Profile" icon={PersonIcon} />
          <hr />
        </div>
        <div>
          <hr />
          <DesktopMenuItem text="Settings" icon={SettingsIcon} />
          <DesktopMenuItem text="Log out" icon={LogoutIcon} />
        </div>
      </div>

      <div className="menuMobile">
        <img src={logo} />
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>
            <HouseIcon /> Homepage
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <BarChartIcon /> Dashboard
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PersonIcon /> Profile
          </MenuItem>

          <hr />

          <MenuItem onClick={handleClose}>
            <SettingsIcon />
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <LogoutIcon />
            Logoutff
          </MenuItem>
        </Menu>
      </div>
    </aside>
  )
}
