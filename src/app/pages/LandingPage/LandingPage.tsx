import './LandingPage.scss'

import { AboutProject } from '../../components/LandingPageComponents/about/AboutProject'
import { Footer } from '../../components/LandingPageComponents/footer/Footer'
import { Navigation } from '../../components/LandingPageComponents/header/Navigation'
import { Header } from '../../components/LandingPageComponents/start/Header'
import { AddAppliancePopup } from '../../components/addAppliancePopup/AddAppliancePopup'

export const LandingPage: React.FC = () => {
  return (
    <section>
      <AddAppliancePopup />
      <Navigation />
      <Header />
      <AboutProject />
      <Footer />
    </section>
  )
}
