import axios from 'axios';

export const FETCHING_POKEMON_START = "FETCHING_POKEMON_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS";
export const FETCHING_POKEMON_FAILURE = "FETCHING_POKEMON_FAILURE";

export const getPokemon = () => dispatch => {
    dispatch({ type: FETCHING_POKEMON_START });

    axios.get()
        .then(res => {
            console.log(res);

            dispatch({ type: FETCHING_POKEMON_SUCCESS, payload: res.data./*id*/ });
        })
        .catch(err => {
            console.log(err);

            dispatch({
                type: FETCHING_POKEMON_FAILURE, payload: "Doh! error"
            });
        });
};