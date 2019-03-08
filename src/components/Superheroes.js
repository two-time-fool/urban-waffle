import React from 'react';
import PropTypes from 'prop-types';

function Superheroes({ superheroes }) {
  const superheroesList = superheroes.map((superhero, i) => {
    return (
      <li key={i}>{superhero.name}</li>
    );
  });
  return (
    <ul>
      {superheroesList}
    </ul>
  );
}

Superheroes.propTypes = {
  superheroes: PropTypes.array.isRequired
};

export default Superheroes;
