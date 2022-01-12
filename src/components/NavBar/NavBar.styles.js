import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../index';

export const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 600;
  border-right: 1px solid rgb(209 213 219);;
  height: 100vh;
  width: 16rem;
`;

export const Nav = styled.nav`
  padding: 0.5rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  color: rgb(75 85 99);
  text-decoration: none;
  border-radius: 0.75rem;
  padding: 0.5rem 2rem 0.5rem 2rem;

  &:hover {
    background-color: rgb(209 213 219);
    color: rgb(31 41 55);
  }
`;
