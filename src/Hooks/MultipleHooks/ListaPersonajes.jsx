import React from "react";
import UseFetch from "./useFetch";
import { Link } from "react-router-dom";
import "./PokemonCard.css"; 

const ListaPersonajes = () => {
  const { data, isLoading, hasError } = UseFetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=649`
  );




  return (
    <div>
      <h1 className="pokemon-logo">Lista de Pokémon</h1>
      {isLoading && <h1 className="loading">Cargando...</h1>}
      {hasError && <h1 className="loading">Hubo un error</h1>}
      {data && (
        <ul>
          {data.results.map((personaje, index) => (
            <li key={index} className="pokemon-card">
              <Link to={`/personaje/${index + 1}`} className="name">
                {personaje.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaPersonajes;
