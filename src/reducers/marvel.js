import { 
  FETCH_SUPERHEROES, 
  INCREASE_OFFSET, 
  DECREASE_OFFSET, 
  UPDATE_SUPERHEROES
} from '../actions/marvel';

const initialState = {
  superheroes: [],
  offset: 0,
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DECREASE_OFFSET:
      return {
        ...state,
        offset: action.payload
      };
    case INCREASE_OFFSET:
      return {
        ...state,
        offset: action.payload
      };
    case FETCH_SUPERHEROES:
      return {
        ...state,
        superheroes: action.payload
      };
    case UPDATE_SUPERHEROES:
      return {
        ...state,
        superheroes: action.payload
      };
    default:
      return state;
  }
}
