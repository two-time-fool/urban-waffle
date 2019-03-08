import { url } from './apiKey';

export const getSuperheroes = () => {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.data.results);
};
