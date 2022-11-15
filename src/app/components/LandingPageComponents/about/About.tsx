import './About.scss'

export function About() {
  return (
    <section className="about">
      <h2 className="about__header">Your ECO household starts today</h2>
      <h3 className="about__ndHeader">How we do it</h3>
      <p className="about__paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, nihil
        provident delectus perspiciatis porro, ea laboriosam alias quasi ipsa ut
        itaque fugiat atque, quaerat dolorum nostrum odio consequatur illo
        eaque.
      </p>
      <div className="about__cards">
        <div className="card">
          <h4 className="card__header">Lorem ipsum dolor sit amet</h4>
          <p className="card__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
            consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Labore culpa veritatis, nulla minus deserunt assumenda.
          </p>
        </div>
        <div className="card">
          <h4 className="card__header">Lorem, ipsum dolor. lor</h4>
          <p className="card__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
            consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Labore culpa veritatis, nulla minus deserunt assumenda.
          </p>
        </div>
      </div>
      <div className="card--full">
        <h3 className="card__header">
          Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptates reprehenderit ipsam officiis dolorum
        </h3>
        <p className="card__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          maxime reiciendis eius rerum dolor exercitationem consequatur animi
          velit numquam expedita laboriosam nulla, ipsa labore sapiente. Quasi
          dicta ratione nesciunt fugit.
        </p>
      </div>
    </section>
  )
}
