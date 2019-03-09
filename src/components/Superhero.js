import React from 'react';
import PropTypes from 'prop-types';

export default function Superhero({ superhero }) {
  const imagePath = superhero.thumbnail.path.split(':');
  const image = imagePath[0] + 's:' + imagePath[1] + '.' + superhero.thumbnail.extension;
  return (
    <li>
      <img src={image} style={{ width: '200px' }}/>
      {superhero.name}
    </li>
  );
}

Superhero.propTypes = {
  superhero: PropTypes.object.isRequired
};
