import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

function Image({ imgName }) {
  const img = require(`../../assets/${imgName}`);

  return <img className="card-img" src={img} alt="" />;
}

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
};

export default Image;
