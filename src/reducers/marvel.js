import { FETCH_SUPERHEROES } from '../actions/marvel';

const initialState = {
  superheroes: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SUPERHEROES:
      return {
        ...state,
        superheroes: action.payload
      };
    default:
      return state;
  }
}
