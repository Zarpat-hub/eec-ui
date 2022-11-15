import './LandingPage.scss'

import { About } from '../../components/LandingPageComponents/about/About'
import { Footer } from '../../components/LandingPageComponents/footer/Footer'
import { Header } from '../../components/LandingPageComponents/header/Header'
import { Start } from '../../components/LandingPageComponents/start/Start'

export function LandingPage() {
  return (
    <>
      <Header />
      <Start />
      <About />
      <Footer />
    </>
  )
}
