export const getSuperheroes = state => {
  return state.marvel.superheroes.filter(superhero => {
    return !superhero.thumbnail.path.includes('image_not_available') && !superhero.thumbnail.extension.includes('gif');
  });
};
export const getOffset = state => state.marvel.offset;

export const getSearchTerm = state => state.marvel.searchTerm;

export const getFilteredSuperheroes = state => {
  const searchTerm = getSearchTerm(state);
  return getSuperheroes(state).filter(superhero => {
    return superhero.name.includes(searchTerm);
  });
};
