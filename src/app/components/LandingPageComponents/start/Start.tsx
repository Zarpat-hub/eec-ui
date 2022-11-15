import Button from '@mui/material/Button'
import './Start.scss'

export function Start() {
  return (
    <section className="start">
      <div className="start__leftPanel">
        <div className="start__header">
          <h1>Energy</h1>
          <h1>
            Energency <span style={{ color: 'red' }}>Home</span>
          </h1>
        </div>
        <p className="start__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
          reiciendis laborum illo tempore minima commodi sint obcaecati nostrum.
          Nihil?
        </p>
        <div className="start__buttons">
          <Button href="/homepage" variant="contained">
            Get started
          </Button>
          <Button href="/homepage" variant="outlined">
            How does eco works?
          </Button>
        </div>
      </div>
      <div className="img">fdsfsdfs</div>
    </section>
  )
}
