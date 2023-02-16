import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <header>
                <div id='website-heading'>
                    <span id="main-heading">The Artifact</span>
                    <span id="sub-heading">Culture and Art blog</span>
                </div>

                <div id='website-links'>
                    <a href=''>
                        <small>Blog</small>
                    </a>

                    <a href=''>
                        <small>About</small>
                    </a>

                    <a href=''>
                        <small>Contact</small>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header;