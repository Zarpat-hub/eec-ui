import './LandingPage.scss'
import { LinkProps } from '@mui/material/Link'
import Button from '@mui/material/Button'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

export function LandingPage() {
  return (
    <>
      <header className="header">
        <h1>Logo</h1>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <section className="start">
        <div className="start__leftPanel">
          <div className="start__header">
            <h1>Energy</h1>
            <h1>
              Energency <span style={{ color: 'red' }}>Home</span>
            </h1>
          </div>
          <p className="start__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
            reiciendis laborum illo tempore minima commodi sint obcaecati
            nostrum. Nihil?
          </p>
          <div className="start__buttons">
            <Button href="/homepage" variant="contained">
              Get started
            </Button>
            <Button href="/homepage" variant="outlined">
              How does eco works?
            </Button>
          </div>
        </div>
        <div className="start__rightPanel">
          <img alt="fsdfsd" />
        </div>
      </section>
      <section className="about">
        <h2>Your ECO household starts today</h2>
        <h3>How we do it</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, nihil
          provident delectus perspiciatis porro, ea laboriosam alias quasi ipsa
          ut itaque fugiat atque, quaerat dolorum nostrum odio consequatur illo
          eaque.
        </p>
        <div>fds</div>
        <div>fsdfs</div>
      </section>
      <footer className="footer">
        <div className="footer__icons">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
        <div>{new Date().getFullYear()} All rights reserved</div>
      </footer>
    </>
  )
}
