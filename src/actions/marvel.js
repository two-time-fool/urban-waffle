import { getSuperheroes } from '../services/marvelApi';

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
  payload: Number.parseInt(offset + 20)
});

export const decreaseOffset = offset => ({
  type: DECREASE_OFFSET,
  payload: Number.parseInt(offset - 20)
});
