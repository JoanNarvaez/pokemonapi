import React from "react";
import useFetch from "./useFetch";
import "./PokemonCard.css";
import { Link, useParams } from "react-router-dom";
const MultipleHooks = () => {
  const { id } = useParams();
  const pokemonId = parseInt(id, 10);
 
  
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  const types = data?.types?.map((typeInfo) => typeInfo.type.name).join(", ");
  const abilities = data?.abilities
    ?.map((abilityInfo) => abilityInfo.ability.name)
    .join(", ");

  return (
    <>
      <div className="pokemon-card">
        <h1 className="title">Información de los personajes de Pokémon</h1>
        {isLoading && <h1 className="loading">Cargando...</h1>}
        <h2 className="name">Nombre: {data?.name}</h2>
        <img
          className="sprite"
          src={data?.sprites.other.dream_world.front_default}
          alt={data?.name}
        />
        <h2 className="id">N°{data?.id}</h2>

        <h2 className="types">Tipo: {types}</h2>

        <h2 className="abilities">Habilidades: {abilities}</h2>
      </div>

      <div className="navigation-buttons">
        <Link to={`/personaje/${pokemonId > 1 ? pokemonId - 1 : 1}`}>
          <button className="prev-button">Atrás</button>
        </Link>
        <Link to={`/personaje/${pokemonId < 649 ? pokemonId + 1 : 649}`}>
          <button className="next-button">Siguiente</button>
        </Link>
      </div>

      <Link to="/">
        <button className="random-button">Regresar</button>
      </Link>
    </>
  );
};
export default MultipleHooks;
