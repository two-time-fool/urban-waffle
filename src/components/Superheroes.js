import React from 'react';
import PropTypes from 'prop-types';
import Superhero from './Superhero';

function Superheroes({ superheroes, onClick, searchTerm, onChange }) {
  const superheroesList = superheroes.map((superhero, i) => {
    return (
      <Superhero key={i} superhero={superhero} />
    );
  });
  return (
    <>
      <button name='decrease' onClick={onClick}>←</button>
      <button name='increase' onClick={onClick}>→</button>
      <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} />
      <ul>
        {superheroesList}
      </ul>
    </>
  );
}

Superheroes.propTypes = {
  superheroes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Superheroes;
