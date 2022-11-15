import './Header.scss'

export function Header() {
  return (
    <header className="header">
      <h1>Logo</h1>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
