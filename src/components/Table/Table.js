import styled from 'styled-components';
import { Wrapper } from '../index';

export const TableWrapper = styled(Wrapper)`
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

export const Table = styled.table`
  border-top: 0px solid rgb(229 231 235);
  border-bottom: 1px solid rgb(229 231 235);
  border-collapse: collapse;
  min-width: 100%;
`;

export const TableHead = styled.thead`
  background-color: rgb(229 229 229);
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const TableBody = styled.tbody`
  background-color: rgb(255 255 255);
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const TRow = styled.tr`
`;

export const THead = styled.th`
  text-align: left;
  font-weight: 600;
  color: rgb(38 38 38);
  letter-spacing: 0.05rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
`;

export const TCell = styled.td`
  color: rgb(82 82 82);
  white-space: normal;
  border-bottom: 1px solid rgb(229 231 235);
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
`;
