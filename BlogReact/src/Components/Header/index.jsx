import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div id="website-heading">
        <span id="main-heading">The Artifact</span>
        <span id="sub-heading">Culture and Art blog</span>
      </div>

      <div id="website-links">
        <a href="https://www.google.com/">
          <small>Blog</small>
        </a>

        <a href="https://www.google.com/">
          <small>About</small>
        </a>

        <a href="https://www.google.com/">
          <small>Contact</small>
        </a>
      </div>
    </header>
  );
}

export default Header;
