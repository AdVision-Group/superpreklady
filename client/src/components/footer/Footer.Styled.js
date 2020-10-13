import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #343434;
  color: white;
  padding-top: 75px;
`;
export const FooterInnerContainer = styled.div``;
export const RowOneContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 100px;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
export const PhoneContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: #454545;
padding: 20px 100px 20px 100px;
      @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		display:none;
	}
`;
export const Phone = styled.img`
  margin-right: 60px;
  height: 75px;
  width: 75px;
`;
export const IconContainer = styled.div``;
export const PhoneContactContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
export const Number = styled.div``;
export const Content = styled.div``;
export const RowTwoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 50px 100px 50px 100px;
        @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		display: flex;
		flex-direction: column;
	}
`;
export const AboutContainerModule = styled.div``;
export const Heading = styled.div``;
export const Separator = styled.div`
  color: white;
  background-color: white;
  height: 1px;
  width: 100%;
`;
export const AboutContent = styled.div``;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-bottom: 0;
  margin-bottom: 0;
       @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
       padding-top: 5px;
		padding-bottom: 25px;
	}
`;
export const SocialIcon = styled.div`
margin-right: 10px;
`;
export const ScopeContainerModule = styled.div``;

export const Menu = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
color:#9a9a9a;
text-decoration: none;
font-weight: normal;
padding-top: 20px;
       @media only screen and (max-width: ${({ theme }) =>
    theme.brakePoints.mmw}) {
		padding-bottom: 25px;
	}
a {
text-decoration: none;
color: #9a9a9a;
font-weight: normal;
&:hover {
      color: #3250d1;
    }
  

    
`;
export const ContactContainerModule = styled.div``;

export const ContactContent = styled.div`
padding-top: 5px;
margin-top: 0;
`;

export const H3F = styled.h3`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: ${({ theme }) => theme.fontSize.h3};
  padding-bottom: 5px;
`;

export const H1F = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.h2};
  padding-bottom: 5px;
`;

export const PF = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.footerParagraphText};
  line-height: 1.3;
`;

