import React from 'react';
import PropTypes from 'prop-types';
import Superhero from './Superhero';
import styles from './app/App.css';

function Superheroes({ superheroes, onClick, searchTerm, onChange }) {
  const superheroesList = superheroes.map((superhero, i) => {
    return (
      <Superhero key={i} superhero={superhero} />
    );
  });
  return (
    <>
      <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} className={styles.input} /><br />
      <button name='decrease' onClick={onClick} className={styles.button}>←</button>
      <button name='increase' onClick={onClick} className={styles.button}>→</button>
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
