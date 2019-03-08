import { getSuperheroes } from '../services/marvelApi';

export const FETCH_SUPERHERO = 'FETCH_SUPERHERO';

export const fetchSuperhero = () => ({
  type: FETCH_SUPERHERO,
  payload: getSuperheroes
});
