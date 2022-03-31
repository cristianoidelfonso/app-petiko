import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.div`
li {
  padding: 1rem;
  font-size: .9rem;
  font-weight: 550;
}
`;

const NavLink = ({ path, text, handleNavToggle }) => {

  return (
    <StyledLink>
      <li><Link to={path} onClick={handleNavToggle}>{ text }</Link></li>
    </StyledLink>
  )
}

export default NavLink;