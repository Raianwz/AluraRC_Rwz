/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const ImgLogo = styled.img`
  filter: invert(1) saturate(0) contrast(3) brightness(150);
  transition: filter 5s ease-in-out;

  &:hover{
    transition: filter .7s ease-in-out;
    filter: invert(0) saturate(1) contrast(1) brightness(1.1);
  };
    
`;
