import React from 'react';
import Logo from '../../assets/img/raianwz.png';
import { FooterBase, ImgLogo } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <a href="https://github.com/raianwz" rel="noreferrer" target="_blank">
        <ImgLogo src={Logo} alt="Logo RaianWZ" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/raianwz">RaianWZ</a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
