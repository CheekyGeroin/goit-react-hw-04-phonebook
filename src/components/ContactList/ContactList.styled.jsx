import styled from '@emotion/styled';

export const Item = styled.li`
  font-size: 20px;
  line-height: 1.3;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  margin-left: 15px;
  border-radius: 20px;
  border: none;
  padding: 6px 14px;
  font-size: 16px;
  line-height: 1.3;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 2px 2px 2px 2px #979899;
  }
`;
