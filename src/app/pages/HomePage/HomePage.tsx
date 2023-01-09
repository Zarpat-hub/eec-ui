import { useEffect } from 'react'
import { AnalysisSection } from '../../components/HomePageComponents/analysisSection/analysisSection'
import { ConfigurationSection } from '../../components/HomePageComponents/configurationSection/configurationSection'
import { Sidebar } from '../../components/HomePageComponents/sidebar/Sidebar'
import { DevicesProvider } from '../../context/DevicesContext'
import './HomePage.scss'

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <DevicesProvider>
      <main>
        <Sidebar />
        <AnalysisSection />
        <ConfigurationSection />
      </main>
    </DevicesProvider>
  )
}
