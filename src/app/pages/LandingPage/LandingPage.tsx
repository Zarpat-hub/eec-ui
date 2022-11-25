import './LandingPage.scss'

import { AboutProject } from '../../components/LandingPageComponents/About_Section/AboutProject'
import { Footer } from '../../components/LandingPageComponents/Footer/Footer'
import { Navigation } from '../../components/LandingPageComponents/Navbar/Navigation'
import { Header } from '../../components/LandingPageComponents/Hero_Section/Header'

export const LandingPage: React.FC = () => {
  return (
    <section>
      <div className="background_image__top">
        <Navigation />
        <Header />
        <AboutProject />
      </div>
      <Footer />
    </section>
  )
}
