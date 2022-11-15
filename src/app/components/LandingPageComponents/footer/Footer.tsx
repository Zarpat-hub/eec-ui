import './Footer.scss'

import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
        <LinkedInIcon className="icon" />
        <InstagramIcon className="icon" />
      </div>
      <div>{new Date().getFullYear()} All rights reserved</div>
    </footer>
  )
}
