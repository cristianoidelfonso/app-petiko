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

const Navbar = ({ handleNavToggle }) => {

  return (
    <Nav>
      <div className="logo">
        <Link className="navbar-brand" to="/" onClick={handleNavToggle}>
          <img src={logo} className="App-logo" alt="Logo React" />
          <img src={logoPet} className="imgPet" alt="Logo Tetiko" />
        </Link>
      </div>
      {/* <Burger /> */}
    </Nav>
  )
}

export default Navbar