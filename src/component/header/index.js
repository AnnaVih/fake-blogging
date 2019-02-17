import React from 'react';
import './styles.scss';
import Logo from '../../assets/blogLogo.png';

const Header = props => {
    return (
        <header className="headerComponent">
        <div className="wrap">
            <div className="logo">
                <img className="logoImg" src={Logo} alt="Logo"/>
            </div>
        </div>
        </header>
    )
}

export default Header