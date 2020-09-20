import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  border-radius: 0px;
  border-color: none;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`;
