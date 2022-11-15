import './Header.scss'
import logo from '../../../../assets/logo.png'

export function Header() {
  return (
    <header className="header">
      <img src={logo} />
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
