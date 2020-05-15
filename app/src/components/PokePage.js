import React from "react";
import { connect } from "react-redux";

import { getPokemon } from "../actions/actions";
import { StyledBtn } from "../styles/styles";

const PokePage = ({ getPokemon, pokemon, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getPokemon}>Get Pokemon</button>
      </div>
    );

  if (isFetching) {
    return <h2>Searching for Pokemon</h2>;
  } else {
    return (
      <div>
        {pokemon ? <h2></h2> : <h2>Become the ultimate Pokémon master!</h2>}
        <h3>{pokemon}</h3>
        <button onClick={getPokemon}>Get Pokémon</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPokemon })(PokePage);
