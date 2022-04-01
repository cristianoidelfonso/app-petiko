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
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  .imgPet {
    width: 35%;
  }
`;

const Navbar = () => {

  return (
    <Nav> 
      <div className="logo">
        <div className="navbar-brand">
          <img src={logo} className="App-logo" alt="Logo React" />
          <img src={logoPet} className="imgPet" alt="Logo Tetiko" />
        </div>
      </div>
      {/* <Burger /> */}
    </Nav>
  )
}

export default Navbar