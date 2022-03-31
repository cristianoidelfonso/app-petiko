import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.div`
li {
  padding: 18px 10px;
}
`;

const NavLink = ({ text, path, childToParent }) => {
  
  const [open, setOpen] = useState(false);
  
  const data = 'Dados a enviar para o elemento pai';
  
  return (
    <StyledLink>
      <li><Link to={path} open={open} onClick={() => { setOpen(!open), childToParent(open)}}>{ text }</Link></li>
    </StyledLink>
  )
}

export default NavLink;