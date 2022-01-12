import styled from 'styled-components';
import { Wrapper } from '../index';

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
`;

export const Label = styled.label`
  display: block;
`;

export const Span = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(82 82 82);
`;

export const Input = styled.input`
  display: block;
  background-color: rgb(212 212 212);
  color: rgb(38 38 38);
  border: none;
  border-radius: 0.75rem;
  box-sizing: border-box;
  resize: horizontal;
  width: 100%;
  padding: 0.5rem;
  margin: 0.25rem;

  &:focus {
    background-color: rgb(255 255 255);
  }
`;

export const Select = styled.select`
  display: block;
  background-color: rgb(212 212 212);
  color: rgb(38 38 38);
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: none;
  border-radius: 0.75rem;
  box-sizing: border-box;
  resize: horizontal;
  width: 100%;
  padding: 0.5rem;
  margin: 0.25rem;
  }
`;
