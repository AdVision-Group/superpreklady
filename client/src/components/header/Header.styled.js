import styled from "styled-components";

export const HeaderMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0 55px 0;
         @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		padding-bottom: 25px;
	}
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
         @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		padding-top: 20px;
		padding-left: 25px;
	}
	    	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.ssmw}) {
	padding-top: 15px;
		padding-left: 10px;
		justify-content: flex-start;
	}
	
`;

export const LogoInnerContainer = styled.div`
  height: auto;

`;

export const LogoInnerContainerContent = styled.div`
  padding: 2px;
  margin: 1px;
      	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.ssmw}) {
	display: none;
	}
`;

export const LogoImg = styled.img`
  height: 55px;
  width: 48px;
`;
export const Heading = styled.div``;
export const SubHeading = styled.div``;

export const MenuContainer = styled.div`
  width: 100%;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
      @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		display: none;
	}
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.button.fontSize};
  padding: 10px 20px 10px 20px;
  background-color: ${({ theme }) => theme.button.accentColor};
  color: ${({ theme }) => theme.button.textColor};
  border: none;
  display: inline-block;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
`;

export const i = styled.div``;

export const H3 = styled.div`
  padding: 2px 2px 2px 2px;
  margin: 1px;
  font-weight: bold;
`;
export const H4 = styled.div`
  padding: 2px 2px 2px 2px;
  margin: 1px;
  font-size: 13px;
  color: #9A9A9A;
`;

export const SocialIconContainer = styled.div`
padding-right: 10px;
`;

export const Icon = styled.img`
width: 25px;
height: 25px;
`;