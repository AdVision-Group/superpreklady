import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-100%)'};
  height: 100vh;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;

         @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		width: 100%;
	}

  a {
    font-size: 35px;
    padding: 2rem 0 2rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #000000;
    text-decoration: none;
    transition: color 0.3s linear;


    &:hover {
      color: red;
    }
  }
`;
