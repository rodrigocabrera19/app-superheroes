import React, { useState, useReducer } from "react";
import { useHeros } from "../Context/HerosContext";

const SearchBar = ({ searchPokemon }) => {
  const [heroes, setHeroes] = useState();

  const { search, heros, searchHero } = useHeros()

  const inputPokemons = (e) => {
    setHeroes(e.target.value);
    
  };

  

  return (
    heros &&
    <div className="container justify-content-center">
      <section className="row d-flex">
        <div className="col-md-7 offset-md-2 col-sm-12">
          <label
            htmlFor="searchBar"
            className="gb-dark d-flex align-content-end border-0 mb-sm-2"
            style={{ height: "2.5rem" }}
          >
            <input
              className="shadow border border-light rounded-pill p-2 w-100 "
              style={{ outline: "none" }}
              type="text"
              placeholder="Buscar pokemones"
              onChange={inputPokemons}
            />
          </label>
        </div>

        <div className="col-md-2 col-sm-12 d-flex justify-content-center">
          <section style={{ height: "2.5rem" }}>
            {heroes ? (
              <button
                className="btn btn-dark rounded-circle h-100"
                onClick={() => {search(heroes)}}
              >
                Buscar
              </button>
            ) : (
              <button
                className="btn btn-dark rounded-circle h-100"
                onClick={() => {search(heroes)}}
                disabled
              >
                Buscar
              </button>
            )}
          </section>
        </div>
      </section>
    </div>
  
  );
};

export default SearchBar;