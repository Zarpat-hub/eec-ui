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
            Energency <span className="start__header--color">Home</span>
          </h1>
        </div>
        <p className="start__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
          reiciendis laborum illo tempore minima commodi sint obcaecati nostrum.
          Nihil?
        </p>
        <div className="start__buttons">
          <NavLink to="/homepage" className="link">
            <button className="start__buttons--button primary">
              Get started {`>`}
            </button>
          </NavLink>

          <NavLink to="/homepage" className="link">
            <button className="start__buttons--button">
              How eco works? {`>`}
            </button>
          </NavLink>
        </div>
      </div>

      <img src={img} className="img" />
    </section>
  )
}
