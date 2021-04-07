import styled from 'styled-components'

export const TextInput = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  outline: none;
  max-width: 420px;
  min-width: 334px;
  background: none;
  border-bottom: 2px solid #707070;
  border-radius: 0px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1.1px;

  :focus {
    color: #fff;
  }
  ::placeholder {
    color: #fff;
    font-size: 15px;
    opacity: 0.5;
    letter-spacing: 1.2px;
    font-weight: 300;
  }
`;
