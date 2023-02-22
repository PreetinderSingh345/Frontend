import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

function Image({ imgName }) {
  return <img className="card-img" src={imgName} alt="" />;
}

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
};

export default Image;
