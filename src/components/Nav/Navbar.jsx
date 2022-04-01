import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../logo.svg';
import logoPet from '../../logo-petiko.png';

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  padding: 0 20px;
  display: flex;
  align-items:center;
  justify-content: space-start;
  .logo {
    
  }
  .imgPet {
    width: 35%;
  }
  @media (max-width: 768px) {
    .imgPet {
      width: 35%;
    }
  }
`;

const Navbar = () => {

  return (
    <Nav>
      <div className="nav-brand ">
        <img src={logo} className="App-logo" alt="Logo React" />
        <img src={logoPet} className="imgPet" alt="Logo Tetiko" />
      </div>   
    </Nav>
  )
}

export default Navbar