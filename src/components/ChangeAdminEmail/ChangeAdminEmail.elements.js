import styled from 'styled-components'


export const Form = styled.form`
  background: #141317;
  max-width: 60vw;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  justify-content: center;
  padding: 80px 32px;
  border-radius: 4px;
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    max-width: 40vw;
    margin-left:0;
    padding-left:0;
    padding:10px;
  }
`;