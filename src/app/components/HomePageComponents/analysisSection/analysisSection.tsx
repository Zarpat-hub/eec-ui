import { EcoScore } from '../ecoScore/EcoScore'
import { Improvement } from '../improvement/improvement'
import './AnalysisSection.scss'

export const AnalysisSection: React.FC = () => {
  return (
    <div className="analysis">
      <Improvement />
      <EcoScore />
    </div>
  )
}
