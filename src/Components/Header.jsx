import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: crimson;
  padding: 20px;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: white;
    transition: .2s ease-in;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderArea>
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">My Profile</Link>
    </HeaderArea>  
  )
}
