import styled from 'styled-components';
import { Wrapper, Container } from './components/index';

export const StyledWrapper = styled(Wrapper)`
  display: flex;
  background-color: rgb(250 250 250);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(38 38 38);
`;

export const StyledContainer = styled(Container)`
  padding: 2rem;
`;
