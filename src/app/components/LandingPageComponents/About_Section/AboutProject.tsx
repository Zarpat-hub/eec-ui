import './AboutProject.scss'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import TimelineIcon from '@mui/icons-material/Timeline'

export const AboutProject: React.FC = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__header">Your ECO household starts today 🍃</h2>
        <h3 className="about__ndHeader">How we do it</h3>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet consectetur. Dictumst curabitur tincidunt
          scelerisque etiam pharetra ut feugiat lacus convallis. Mauris facilisi
          sem in sed nisl ac nunc. Amet ipsum tincidunt parturient ut ut ut eget
          vestibulum elementum. Sodales dictum commodo eget augue fermentum
          imperdiet proin blandit.
        </p>
        <div className="about__cards">
          <div className="card">
            <TimelineIcon className="card__icon" />
            <h4 className="card__header">Vel sed lectus vel condimentum et.</h4>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur. Elementum bibendum sed
              ipsum.
            </p>
          </div>
          <div className="card">
            <MenuIcon className="card__icon" />
            <h4 className="card__header">Vel sed lectus vel condimentum et.</h4>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur. Elementum bibendum sed
              ipsum. Elementum bibendum sed ipsum.
            </p>
          </div>
        </div>
        <div className="card--full">
          <HomeIcon className="card__icon" />
          <h3 className="card__header">
            Lorem ipsum dolor sit amet consectetur. Convallis massa etiam odio
            aenean in mattis sed lobortis. Pellentesque arcu facilisis aenean
            nisi.
          </h3>
          <p className="card__description">
            Lorem ipsum dolor sit amet consectetur. Aliquet fusce justo enim
            enim nisi. Sit quis augue porttitor nibh. Malesuada tortor sit
            semper quis. Sed rhoncus in viverra hendrerit facilisis semper.
            Consequat risus enim massa bibendum et et.
          </p>
        </div>
      </div>
    </section>
  )
}
