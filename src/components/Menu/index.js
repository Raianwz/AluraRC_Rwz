import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css'
//import ButtonLink from '../componets/ButtonLink';
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt="RwZFlix"/>
            </a>

            <Button as="a" className="ButtonLink" href="/home">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; 