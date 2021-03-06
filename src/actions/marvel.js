import { getSuperheroes, getFilteredSuperheroes } from '../services/marvelApi';

export const FETCH_SUPERHEROES = 'FETCH_SUPERHEROES';
export const LOAD_SUPERHEROES_START = 'LOAD_SUPERHEROES_START';
export const LOAD_SUPERHEROES_END = 'LOAD_SUPERHEROES_END';
export const fetchSuperheroes = (offset) => ({
  type: FETCH_SUPERHEROES,
  loadStart: LOAD_SUPERHEROES_START,
  payload: getSuperheroes(offset),
  loadEnd: LOAD_SUPERHEROES_END
});

export const INCREASE_OFFSET = 'INCREASE_OFFSET';
export const DECREASE_OFFSET = 'DECREASE_OFFSET';

export const increaseOffset = offset => ({
  type: INCREASE_OFFSET,
  payload: Number.parseInt(offset + 100)
});

export const decreaseOffset = offset => ({
  type: DECREASE_OFFSET,
  payload: Number.parseInt(offset - 100)
});

export const UPDATE_SUPERHEROES = 'UPDATE_SUPERHEROES';
export const updateSuperheroes = searchTerm => ({
  type: UPDATE_SUPERHEROES,
  payload: getFilteredSuperheroes(searchTerm)
});
