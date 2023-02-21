import React from 'react';
import PropTypes from 'prop-types';
import './DateTime.css';

function DateTime({ date, time }) {
  return (
    <div className="date-time">
      <span>{date}</span>
      <span>{time}</span>
    </div>
  );
}

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default DateTime;
