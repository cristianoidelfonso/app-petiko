import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../logo.svg';
import logoPet from '../../logo-petiko.png';

const Nav = styled.nav`
  width: 100%;
  margin-top: -2vh;
  height: 12vh;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  .imgPet {
    width: 50%;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="App-logo" alt="Logo React" />
          <img src={logoPet} className="img-fluid w-50" alt="Logo Tetiko" />
        </Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar