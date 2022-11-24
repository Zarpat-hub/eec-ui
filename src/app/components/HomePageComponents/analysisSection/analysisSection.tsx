import { EcoScore } from '../ecoScore/EcoScore'
import { Improvement } from '../improvement/Improvement'
import './analysisSection.scss'

export const AnalysisSection: React.FC = () => {
  return (
    <div className="analysis">
      <Improvement />
      <EcoScore />
    </div>
  )
}
