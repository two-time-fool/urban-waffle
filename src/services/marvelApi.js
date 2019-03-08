import { marvelApi } from 'marvel-comics-api';

export const getSuperheroes = () => {
  return marvelApi(fetch('https://gateway.marvel.com/v1/public/characters?name=black%20widow'))
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
};
