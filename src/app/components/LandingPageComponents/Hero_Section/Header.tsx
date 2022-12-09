import './Header.scss'
import img from '../../../../assets/start.png'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <section className="start">
      <div>
        <div className="start__header">
          <h1>Energy</h1>
          <h1>
            Efficient <span className="start__header--color">Home.</span>
          </h1>
        </div>
        <p className="start__paragraph">
          Optimise your home energy efficiency with our smart calculator that
          offers real-time improvements suggestions.
        </p>
        <div className="start__buttons">
          <NavLink to="/homepage" className="link">
            <button className="start__buttons--button primary">
              Get started {`>`}
            </button>
          </NavLink>

          <NavLink to="/homepage" className="link">
            <button className="start__buttons--button" id="secondary_cta">
              How eco works? {`>`}
            </button>
          </NavLink>
        </div>
      </div>

      <img src={img} className="img" draggable="false" />
    </section>
  )
}
