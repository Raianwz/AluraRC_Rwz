import React from 'react';
import { FooterBase } from './styles';
import Rwz from '../../assets/img/rwz.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura"></img>
      </a>
      <p>
        Orgulhosamente criado por RaianWZ durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <a href="https://github.com/raianwz">
      <img src={Rwz} alt="Logo RaianWZ" />
      </a>
    </FooterBase>
  );
}

export default Footer;
