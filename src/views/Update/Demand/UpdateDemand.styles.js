import styled from 'styled-components';
import { Wrapper } from '../../../components/index';

export const StyledWrapper = styled(Wrapper)`
  background-color: rgb(255 255 255);
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  padding: 1rem;
`;
export const HeadWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

export const TailWrapper = styled(Wrapper)`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
`;
