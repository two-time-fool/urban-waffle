import React from 'react';
import PropTypes from 'prop-types';
import styles from './app/App.css';

export default function Superhero({ superhero }) {
  const imagePath = superhero.thumbnail.path.split(':');
  const image = imagePath[0] + 's:' + imagePath[1] + '.' + superhero.thumbnail.extension;
  return (
    <li>
      <img src={image} />
      <div className={styles.nameWrapper}>
        <p className={styles.name}>{superhero.name}</p>
      </div>
    </li>
  );
}

Superhero.propTypes = {
  superhero: PropTypes.object.isRequired
};
