import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ activeColor, theme}) => theme[activeColor]};
  width: ${({ width }) => width || '220px'};
  text-decoration: none;
  padding: 0;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
// background-color: ${({color}) => color || 'hsl(49, 100%, 58%)'};