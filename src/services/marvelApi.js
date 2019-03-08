import { url } from './apiKey';

console.log(url);

export const getSuperheroes = () => {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.data.results);
};
