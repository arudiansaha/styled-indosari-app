import styled from 'styled-components';
import { Wrapper } from '../../../components/index';

export const HeadWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PrintWrapper = styled(Wrapper)`
  display: relative;
  padding: 2rem;
`;

export const HeadPrintWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid;
`;

export const TitleStart = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

export const TitleEnd = styled(Wrapper)`
  display: flex;
  align-items: flex-end;
`;
