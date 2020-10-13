import styled from "styled-components";

export const AboutContainer = styled.div`
  padding-top: 75px;
  padding-bottom: 75px;
  background: ${({ theme }) => theme.colors.lightGreyBg};
            @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		text-align: center;
	}
	  		    	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.ssmw}) {
	padding-top: 5px;
	padding-bottom: 5px;
	}
`;

export const AboutInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
      @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const AboutLeftContainer = styled.div`
  margin-left: 150px;
          @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		margin-left: inherit;
	}
`;
export const AboutRightContainer = styled.div`
  width: 70%;
  margin-left: 45px;
            @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		width: inherit;
		padding: 50px 25px 50px 25px;
		margin-left: inherit;
	}
	  		    	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.ssmw}) {
	padding: 25px 10px 25px 10px ;
	}
`;
export const AboutHeadingContainerTop = styled.div``;
export const AboutHeadingContainerMain = styled.div``;
export const AboutHeadingContainerSubMain = styled.div``;

export const AboutImg = styled.img`
  width: 300px;
  height: auto;
  -webkit-box-shadow: -13px -13px 0px -2px rgb(50, 80, 209);
  -moz-box-shadow: -13px -13px 0px -2px rgba(50, 80, 209, 1);
  box-shadow: -13px -13px 0px -2px rgba(50, 80, 209, 1);
    		    	        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.ssmw}) {
	display: none;
	}
`;
export const AboutImgInnerContainer = styled.div``;
export const AboutRightInnerContainer = styled.div`
  padding: 0;
  margin: 0;
`;

export const AboutText = styled.div``;

export const AboutButton = styled.div``;

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

export const P = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
  line-height: 1.4;
`;
