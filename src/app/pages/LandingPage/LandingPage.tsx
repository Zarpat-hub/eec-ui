import './LandingPage.scss'

import { AboutProject } from '../../components/LandingPageComponents/About_Section/AboutProject'
import { Navigation } from '../../components/LandingPageComponents/Navbar/Navigation'
import { Header } from '../../components/LandingPageComponents/Hero_Section/Header'
import { Footer } from '../../components/LandingPageComponents/footer/Footer'
import headerImg from '../../../assets/el_header.png'

export const LandingPage: React.FC = () => {
  return (
    <section>
      <div
        className="background_image__top"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <Navigation />
        <Header />
        <AboutProject />
      </div>
      <Footer />
    </section>
  )
}
