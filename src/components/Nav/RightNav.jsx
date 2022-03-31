import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLink from './NavLink';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-top: 2vh;
  li a{
    padding: 18px 10px;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: rgba(0, 131, 163, .95);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 10vh;
    right: 0;
    height: 90vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
    z-index: 19;
    li {
      margin-bottom: inherit;
    }
    li a {
      color: #fff;
    }
  }
`;
// transform: ${ ({ open }) => open ? 'translateX(0)' : 'translateX(-100%)' };

const RightNav = ({ open, handleNavToggle }) => {

  return (
    <>
    <Ul open={open}>
      <NavLink path="/" text='Home' handleNavToggle={handleNavToggle}/>
      <NavLink path="/pedidos" text='Pedido' handleNavToggle={handleNavToggle}/>
      <NavLink path="/contato" text='Contato' handleNavToggle={handleNavToggle}/>
      <NavLink path="/login" text='Login' handleNavToggle={handleNavToggle}/>
      <NavLink path="/register" text='Register' handleNavToggle={handleNavToggle}/>
      
      {/* <li><Link to="/login" onClick={handleNavToggle}>Login</Link></li> */}
      {/* <li><Link to="/register" onClick={handleNavToggle}>Register</Link></li> */}
    </Ul>
    </>
  )
}

export default RightNav;