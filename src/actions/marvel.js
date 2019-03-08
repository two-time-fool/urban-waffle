import { getSuperheroes } from '../services/marvelApi';

export const FETCH_SUPERHEROES = 'FETCH_SUPERHEROES';
export const LOAD_SUPERHEROES_START = 'LOAD_SUPERHEROES_START';
export const LOAD_SUPERHEROES_END = 'LOAD_SUPERHEROES_END';
export const fetchSuperheroes = () => ({
  type: FETCH_SUPERHEROES,
  loadStart: LOAD_SUPERHEROES_START,
  payload: getSuperheroes(),
  loadEnd: LOAD_SUPERHEROES_END
});
