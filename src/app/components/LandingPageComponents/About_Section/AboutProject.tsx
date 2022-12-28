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
          Welcome to Echo, the Energy Efficiency Assistant! Are you tired of
          high energy bills and looking for ways to save money on your monthly
          expenses? Our easy-to-use tool allows you to assess the energy
          efficiency of your home or business and provides personalized
          recommendations on how to improve it.
        </p>
        <div className="about__cards">
          <div className="card">
            <TimelineIcon className="card__icon" />
            <h4 className="card__header">
              Smart Assistant. Smart Home. Smart Life.
            </h4>
            <p className="card__description">
              Our Energy Efficiency Assistant will analyze your information and
              generate a customized report with recommendations on how to
              improve the energy efficiency of your property.
            </p>
          </div>
          <div className="card">
            <MenuIcon className="card__icon" />
            <h4 className="card__header">Our commitment to sustainability.</h4>
            <p className="card__description">
              At Echo, we believe that small changes can make a big difference
              when it comes to energy efficiency and sustainability. That is why
              we are committed to helping homeowners and businesses reduce their
              energy usage and carbon footprint.
            </p>
          </div>
        </div>
        <div className="card--full">
          <HomeIcon className="card__icon" />
          <h3 className="card__header">The benefits of using our tool.</h3>
          <p className="card__description">
            In addition to saving money on your energy bills and reducing your
            carbon footprint, improving the energy efficiency of your home or
            business can also increase the value of your property and improve
            its overall comfort level. Our tool is designed to be user-friendly
            and easy to use, providing clear, actionable recommendations that
            are tailored specifically to your property.
          </p>
        </div>
      </div>
    </section>
  )
}
