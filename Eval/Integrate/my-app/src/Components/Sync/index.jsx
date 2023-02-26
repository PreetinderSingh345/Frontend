import React from 'react';
import './Sync.css';
import PropTypes from 'prop-types';

function Sync({ setSync }) {
  function handleClick() {
    setSync(true);
  }

  return (
    <main id="sync">
      <span>:((</span>
      <span>seems a bit empty in here...</span>
      <button onClick={handleClick} data-testid='sync-button'>sync</button>
    </main>
  );
}

Sync.propTypes = {
  setSync: PropTypes.func.isRequired,
};

export default Sync;
