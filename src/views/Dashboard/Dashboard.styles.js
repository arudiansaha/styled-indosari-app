import styled from 'styled-components';
import { Wrapper } from '../../components/index';

export const HeadWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

export const BoxWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
`;

export const Box = styled(Wrapper)`
  display: block;
  background-color: rgb(255 255 255 255);
  text-align: center;
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  padding: 1rem;
`;

export const StyledText = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
`;
