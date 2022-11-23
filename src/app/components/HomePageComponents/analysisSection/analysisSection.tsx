import { EcoScore } from '../ecoScore/ecoScore'
import { Improvement } from '../improvement/improvement'
import './analysisSection.scss'

export const AnalysisSection: React.FC = () => {
    return (
        <div className="analysis">
            <Improvement />
            <EcoScore />
        </div>
    )
}
