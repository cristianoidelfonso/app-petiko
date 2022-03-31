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
    background-color: #0D2538;
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

const RightNav = ({ open }) => {

  const links = document.getElementsByTagName('li');
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      const ul = document.getElementsByTagName('ul');
      console.log(ul);
      ul.style.backgroundColor = "#fa4";
    }
  }

  return (
    <>
    <Ul open={open}>
      <li><Link to="/">Sobre</Link></li>
      <li><Link to="/">Contato</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </Ul>
    </>
  )
}

export default RightNav;