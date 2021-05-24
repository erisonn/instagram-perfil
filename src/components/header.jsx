import React, { Component } from 'react';
import logo from '../img/logo.png'

class Header extends Component {
    render() { 
        return ( 
            <header>
                <div className="header-wrapper">
                    <a href=""><img src={logo} alt="" /></a>
                    <input type="text" placeholder="Pesquisar" />
                    <div className="buttons">
                        <button id="log-in">Log In</button>
                        <button id="sign-up">Sign Up</button>
                    </div>
                </div>
            </header>
         );
    }
}
 
export default Header;