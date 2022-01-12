import styled from 'styled-components';

export const Button = styled.button`
  font-weight: 600;
  border: none;
  border-radius: 0.75rem;
  padding: 0.5rem;
  margin: 0.25rem;
`;

export const RegularButton = styled(Button)`
  background-color: rgb(212 212 212);
  color: rgb(38 38 38);

  &:hover {
    background-color: rgb(163 163 163);
  }
`;

export const SuggestedButton = styled(Button)`
  background-color: rgb(59 130 246);
  color: rgb(255 255 255);

  &:hover {
    background-color: rgb(37 99 235);
  }
`;

export const DestructiveButton = styled(Button)`
  background-color: rgb(239 68 68);
  color: rgb(255 255 255);

  &:hover {
    background-color: rgb(220 38 38);
  }
`;
