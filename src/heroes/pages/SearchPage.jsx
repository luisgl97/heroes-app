import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";

const buscar = true;

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = (q.length > 0 )&& (heroes.length === 0);

  const { searchText, onInputChange} = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
    // onResetForm();
  };
  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar tú heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {q === "" ? (
            <div className="alert alert-primary">Buscar un héroe</div>
          ) : (
            (heroes.length===0) && (
              <div className="alert alert-danger">
                Héroe <b>{q}</b> no encontrado
              </div>
            )
          )} */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Buscar un héroe
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            Héroe <b>{q}</b> no encontrado
          </div>

          <div className="row mt-2 align-items-center">
            {heroes.map((hero) => (
              <HeroCard buscar={buscar} key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
