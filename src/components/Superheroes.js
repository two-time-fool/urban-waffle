import React from 'react';
import PropTypes from 'prop-types';

function Superheroes({ superheroes, onClick }) {
  const superheroesList = superheroes.map((superhero, i) => {
    return (
      <li key={i}>{superhero.name}</li>
    );
  });
  return (
    <>
      <button name='decrease' onClick={onClick}>←</button>
      <button name='increase' onClick={onClick}>→</button>
      <ul>
        {superheroesList}
      </ul>
    </>
  );
}

Superheroes.propTypes = {
  superheroes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Superheroes;
