import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMenu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.burgerButton.voidDark};
  height: 100vh;
  width: 100%;
  text-align: left;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  outline:none;

  @media (max-width: ${({ theme }) => theme.burgerButton.mobile}) {
      width: 100%;
    }

  a {
    font-size: 4rem;
    outline:none;
    margin-left: 45px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 700;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.burgerButton.primaryDark};
    text-decoration: none;
    background: linear-gradient(to right, #2362d4, #00b7ff 50%, #ffffff 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 400ms ease;

    @media (max-width: ${({ theme }) => theme.burgerButton.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    @media (max-width: ${({ theme }) => theme.burgerButton.mobileLandscape}) {
      font-size: 1.5rem;
      text-align: center;
      padding: 1rem 0;
    }

    &:hover {
      //color: ${({ theme }) => theme.burgerButton.primaryHover};
      background-position: 0 100%;
      
    }
  }
`;
