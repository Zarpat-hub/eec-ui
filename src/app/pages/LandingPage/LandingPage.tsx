import './LandingPage.scss'
import elip3 from '../../../assets/el_header.png'
import elip4 from '../../../assets/el_about.png'

import { About } from '../../components/LandingPageComponents/about/About'
import { Footer } from '../../components/LandingPageComponents/footer/Footer'
import { Header } from '../../components/LandingPageComponents/header/Header'
import { Start } from '../../components/LandingPageComponents/start/Start'

export function LandingPage() {
  return (
    <section>
      <img src={elip3} className="elipse1" />
      <Header />
      <Start />
      <About />
      <Footer />
    </section>
  )
}
