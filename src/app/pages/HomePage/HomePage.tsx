import { useEffect } from 'react'
import { AnalysisSection } from '../../components/HomePageComponents/analysisSection/analysisSection'
import { ConfigurationSection } from '../../components/HomePageComponents/configurationSection/configurationSection'
import { Sidebar } from '../../components/HomePageComponents/sidebar/Sidebar'
import { DevicesProvider } from '../../context/DevicesContext'
import './HomePage.scss'

export const HomePage: React.FC = () => {
  return (
    <DevicesProvider>
      <main>
        <Sidebar />
        <div className='main_container'>
        <AnalysisSection />
        <ConfigurationSection />
        </div>
      </main>
    </DevicesProvider>
  )
}
