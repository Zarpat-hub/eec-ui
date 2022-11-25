import { AnalysisSection } from '../../components/HomePageComponents/analysisSection/analysisSection'
import { ConfigurationSection } from '../../components/HomePageComponents/configurationSection/configurationSection'
import { Sidebar } from '../../components/HomePageComponents/sidebar/Sidebar'
import './HomePage.scss'

export const HomePage: React.FC = () => {
  return (
    <main>
      <Sidebar />
      <AnalysisSection />
      <ConfigurationSection />
    </main>
  )
}
