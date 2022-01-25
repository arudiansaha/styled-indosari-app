import styled from 'styled-components';
import { Wrapper, Container } from './components/index';

export const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(38 38 38);
`;

export const StyledContainer = styled(Container)`
  max-width: 75%;
  padding: 2rem;
`;
