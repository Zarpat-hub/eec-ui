import './Navigation.scss'
import logo from '../../../../assets/logo.png'

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <img src={logo} id={'logo'} alt="logo" draggable="false" />
      <div className="nav__navigation">
        <ul className="nav__navigation--list">
          <li>About</li>
          <li>Contact</li>
          <li id="li_distinct">Login</li>
        </ul>
      </div>
    </nav>
  )
}
