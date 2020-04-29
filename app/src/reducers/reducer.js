import {
  FETCHING_POKEMON_START,
  FETCHING_POKEMON_SUCCESS,
  FETCHING_POKEMON_FAILURE,
} from "../actions/actions";

const initialState = {
  pokeName: null,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_POKEMON_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_POKEMON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokeName: action.payload,
      };
    case FETCHING_POKEMON_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "Doh! error",
      };
    default:
      return state;
  }
};
