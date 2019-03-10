import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <div className={styles.search}>
        <button name='decrease' onClick={onClick} className={styles.button}>❮</button>
        <div className={styles.wrap}>
          <div className={styles.searchContainer}>
            <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} className={styles.input} /><br />
            <button type='submit' className={styles.searchButton}><FontAwesomeIcon icon='search' /></button>
          </div>
        </div>
       
        <button name='increase' onClick={onClick} className={styles.button}>❯</button>
      </div>
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
