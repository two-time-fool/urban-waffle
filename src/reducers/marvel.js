import { FETCH_SUPERHERO } from '../actions/marvel';

const initialState = {
  superheroes: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SUPERHERO:
      return {
        ...state,
        superheroes: action.payload
      };
    default:
      return state;
  }
}
