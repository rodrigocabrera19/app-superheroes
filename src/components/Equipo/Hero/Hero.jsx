import React, { useState, useMemo, Fragment } from "react";
import axios from "axios";
import ReactCardFlip from "react-card-flip";
import Powerstats from "./Powerstats/Powerstats";
import DetalleHero from "./DetalleHero/DetalleHero";
import Loading from "../../Loading/Loading";
import SearchBar from "../../Buscador/SearchBar";
import { useHeros } from "../../Context/HerosContext";

const Hero = () => {
  const { getAllHeros, eliminarHero, heros } = useHeros();
  useMemo(() => {
    getAllHeros();
  }, []);

  //Uso de la librería react-card-flip para mostrar más detalles de un héroe.
  const [flipped, setFlipped] = useState("");
  const handleFlipped = (name) => {
    //Al dar click en 'Detalles' de un héroe se envía su nombre. El cual se usa en una condición para dar vuelta la carta y mostrar los detalles.
    flipped === name ? setFlipped("") : setFlipped(name);
  };

  return heros ? (
    <div className="bg-secondary">
      <SearchBar />
      <div className="container h-100">
        {heros.map((arrayHero, index) => {
          return (
            <div className="row bg-dark d-flex justify-content-center my-1 px-2 rounded">
              <h1
                className="text-center text-white rounded-pill bg-primary pb-2 mt-2 mx-2"
                style={{ display: heros.length !== 0 ? "block" : "none" }}
              >
                {index + 1}° Equipo de superhéroes
              </h1>
              {arrayHero.map((hero) => {
                return (
                  <div
                    className="col-sm-5 col-md-4 col-lg-3 col-xl-3 bg-dark mx-1 mx-md-0 mx-lg-0 ml-md-auto mt-2 rounded py-1 shadow-lg"
                    key={hero.id}
                  >
                    <div className="d-flex flex-column justify-content-between">
                      <section>
                        <h5 className="text-center text-white">{hero.name}</h5>
                        <div
                          class="text-center"
                          style={{ width: "100%", height: "9rem" }}
                        >
                          <img
                            className="text-center"
                            alt="image de un héroe"
                            style={{
                              maxWidth: "100%",
                              height: "9rem",
                              borderRadius: "100%",
                            }}
                            src={hero.image.url}
                          />
                        </div>
                      </section>
                      <section className="mt-3">
                        <ReactCardFlip isFlipped={flipped === hero.name}>
                          <div>
                            <ul className="list-group">
                              <li className="list-group-item">
                                <b>Combat:</b> {hero.powerstats.combat}
                              </li>
                              <li className="list-group-item">
                                <b>Durability:</b> {hero.powerstats.durability}
                              </li>
                              <li className="list-group-item">
                                <b>Intelligence:</b>{" "}
                                {hero.powerstats.intelligence}
                              </li>
                              <li className="list-group-item">
                                <b>Power:</b> {hero.powerstats.power}
                              </li>
                              <li className="list-group-item">
                                <b>Speed:</b> {hero.powerstats.speed}
                              </li>
                              <li className="list-group-item">
                                <b>Strength:</b> {hero.powerstats.strength}
                              </li>
                            </ul>
                          </div>
                          <DetalleHero hero={hero} />
                        </ReactCardFlip>
                      </section>
                    </div>
                    <div>
                      {flipped === hero.name ? (
                        <button
                          onClick={() => handleFlipped(hero.name)}
                          className="btn btn-secondary w-100"
                        >
                          Ver poderes
                        </button>
                      ) : (
                        <button
                          onClick={() => handleFlipped(hero.name)}
                          className="btn btn-success w-100"
                        >
                          Ver detalles
                        </button>
                      )}
                      {arrayHero.length !== 6 ? (
                        <button
                          className="btn btn-danger w-100"
                          onClick={() => {
                            eliminarHero(hero.name);
                          }}
                          disabled
                        >
                          Eliminar
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger w-100"
                          onClick={() => {
                            eliminarHero(hero.name);
                          }}
                        >
                          Eliminar
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
              <Powerstats index={index} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default Hero;
