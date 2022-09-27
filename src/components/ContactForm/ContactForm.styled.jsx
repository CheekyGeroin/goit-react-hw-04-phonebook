import styled from '@emotion/styled';

export const Form = styled.form`
  box-shadow: 2px 2px 2px 2px #979899;
  max-width: 300px;
  padding: 10px;
  border-radius:10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 2px 2px 2px 2px #979899;
  }
`;
