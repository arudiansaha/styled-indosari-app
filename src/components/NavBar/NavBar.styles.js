import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../index';

export const StyledWrapper = styled(Wrapper)`
  font-weight: 600;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  color: rgb(75 85 99);
  text-decoration: none;
  border-radius: 0.75rem;
  padding: 0.5rem 2rem 0.5rem 2rem;

  &:hover {
    background-color: rgb(212 212 212);
    color: rgb(31 41 55);
  }
`;
