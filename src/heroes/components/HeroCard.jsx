import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  buscar
}) => {
  // const heroImageUrl = `/assets/heroes/${id}.jpg`;
  const heroImageUrl = `./assets/heroes/${id}.jpg`
  return (
    <div className={ (!buscar) ? "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" : "col-xl-6 my-2"}>
      <div className="card h-100 text-white bg-dark justify-content-center">
        <div className="row no-gutters align-items-center">
          <Link to={`/hero/${id}`} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 animate__animated animate__fadeIn" >
            <img src={heroImageUrl} alt={superhero} className="card-img img-thumbnail img-card" />
          </Link>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
            <div className="card-body text-center">
                <h5 className="card-title">
                    {superhero}
                </h5>
                <p className="card-text">{alter_ego}</p>
                {
                    (alter_ego !== characters) && <p>{characters}</p>
                }
                <div className="card-text">
                    <small className="text-muted">{first_appearance}</small>
                </div>
                <Link to={`/hero/${id}`}>
                    Más..
                </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};
