import styled from "styled-components";

export const ServiceContainer = styled.div`
  background: #ffffff;
  text-align: center;
  padding-bottom: 75px;
  padding-top: 75px;
  	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.smw}) {
	width: auto;
	padding-bottom: 5px;
	}
	  		    	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.ssmw}) {
	padding-bottom: 25px;
    padding-top: 25px;
	}

`;

export const ServicesInnerContainer = styled.div`
  	           @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.smw}) {
	padding: 25px;
	}
		  		    	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.ssmw}) {
padding: 5px;
	}
`;

export const ServicesHeading = styled.div`
padding: 0 0 55px 0;
`;

export const ServicesCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 75px;
        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		display: flex;
		flex-direction: column;
	}
		  		    	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.ssmw}) {
	padding-bottom: 0;
  
	}

`;
export const ServicesMainHeading = styled.div``;

export const ServiceCardInnerContainer = styled.div`
  width: 80%;
  padding: 25px 5px 25px 5px;
`;

export const ServicesSecondHeading = styled.div``;

export const ServiceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 380px;
  min-width: 380px;
  min-height: 450px;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(208, 208, 208, 0.75);
  -moz-box-shadow: 0px 0px 10px 1px rgba(217, 217, 217, 0.75);
  box-shadow: 0px 0px 10px 1px rgba(226, 226, 226, 0.75);
            @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		margin-bottom: 50px;
	}
	           @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.smw}) {
		margin-bottom: 50px;
		 max-width: inherit;
         min-width: inherit;
         min-height: inherit;
	}
`;

export const ServiceCardLogo = styled.div``;

export const ServiceImg = styled.img`
  width: 95px;
  height: 95px;
`;

export const ServiceCardHeading = styled.div``;

export const ServiceCardText = styled.div`
  line-height: 1.6;
`;

export const ServiceCardButton = styled.div``;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: ${({ theme }) => theme.fontSize.h3};
  padding-bottom: 5px;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h1};
  padding-bottom: 5px;
`;

export const H3C = styled.h3`
  color: #000000;
  font-size: 22px;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.servicesFontSize};
  line-height: 1.6;
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

export const AdditionalContentContainer = styled.div`
  margin-top: 45px;
`;
