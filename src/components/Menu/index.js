import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css'
//import ButtonLink from '../componets/ButtonLink';
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="RwZFlix"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; 