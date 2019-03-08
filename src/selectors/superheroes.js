export const getSuperheroes = state => state.marvel.superheroes;
export const getOffset = state => {
  console.log('selector', state.marvel.offset);
  return state.marvel.offset;
};
