import './Sidebar.scss'
import logo from '../../../../assets/logo.png'
import logoNavbar from '../../../../assets/Logo_Navbar.png'
import { MenuItem, Button, Menu } from '@mui/material'
import { useState } from 'react'
import { DesktopMenuItem } from './MenuItem/DesktopMenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import home_icon from '../../../../assets/icons/icon-home.svg'
import profile_icon from '../../../../assets/icons/icon-user.svg'
import chart_icon from '../../../../assets/icons/icon-bar-chart-2.svg'
import logout_icon from '../../../../assets/icons/icon-log-out.svg'
import settings_icon from '../../../../assets/icons/icon-settings.svg'
import controls from '../../../../assets/controls.png'
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
      <img src={controls} id="controls"></img>
      <div className="menuDesktop">
        <div className="menuDesktop__section">
          <img src={logoNavbar} />
          <div className="menuDesktop__section-options">
          <DesktopMenuItem active text="Homepage" icon={home_icon} />
          <DesktopMenuItem text="Dashboard" icon={chart_icon} />
          <DesktopMenuItem text="Profile" icon={profile_icon} />
          </div>
        </div>
        <div className="menuDesktop__section">
          <DesktopMenuItem text="Settings" icon={settings_icon}  />
          <DesktopMenuItem text="Log out" icon={logout_icon}  />
        </div>
      </div>

      <div className="menuMobile">
        <img src={logoNavbar} />
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{ width: '1.5em', height: '1.5em' }} />
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
          <div className='menu-options-container'>
          <MenuItem onClick={handleClose}>
            <img src={home_icon}></img> Homepage
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <img src={chart_icon}></img> Dashboard
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <img src={profile_icon}></img> Profile
          </MenuItem>
          </div>
          <hr />

          <MenuItem onClick={handleClose}>
          <img src={settings_icon}></img>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <img src={logout_icon}></img>
            Log out
          </MenuItem>
        </Menu>
      </div>
    </aside>
  )
}
