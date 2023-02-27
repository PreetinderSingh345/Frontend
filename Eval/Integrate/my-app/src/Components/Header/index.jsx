import React from 'react';
import './Header.css';

function Header() {
  return (
    <header data-testid='header'>
      My <span id="record-heading">Record</span> Shelf
    </header>
  );
}

export default Header;
