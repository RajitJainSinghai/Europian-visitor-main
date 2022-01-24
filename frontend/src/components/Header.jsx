import React from 'react';
import Logo from '../assets/img/europian-logo.png';

function Header() {
    return (
        <>
            <header>
                <img class="logo" src={Logo} alt="" />
                <div class="nav">
                    <input type="checkbox" id="nav-check" />
                    <div class="nav-header"></div>
                    <div class="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div class="nav-links">
                        <a class="home" href="#" target="_blank">
                            HOME
                        </a>
                        <a class="home" href="#" target="_blank">
                            WONDERS IN EUROPE
                        </a>
                        <a class="home" href="#" target="_blank">
                            TOURIST ATTRACTION
                        </a>
                        <a class="home" href="./favourite">
                            FAVOURITE
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
