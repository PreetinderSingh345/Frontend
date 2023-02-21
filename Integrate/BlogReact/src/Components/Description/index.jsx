import React from 'react';
import PropTypes from 'prop-types';
import './Description.css';

function Description({ title, description }) {
  return (
    <div>
      <p className="img-title">{title}</p>
      <p className="img-description">{description}</p>
      <hr />
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
