import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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
