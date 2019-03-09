export const getSuperheroes = state => state.marvel.superheroes;
export const getOffset = state => state.marvel.offset;

export const getSearchTerm = state => state.marvel.searchTerm;

export const getFilteredSuperheroes = state => {
  const searchTerm = getSearchTerm(state);
  return getSuperheroes(state).filter(superhero => {
    return superhero.name.includes(searchTerm);
  });
};
