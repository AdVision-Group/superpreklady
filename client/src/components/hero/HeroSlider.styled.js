import styled from "styled-components";

export const HeroSliderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #e3e3e3;
  padding-bottom: 75px;
  padding-top: 75px;
`;

export const HeroSliderInnerContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0px 100px 0px 100px;
  flex-direction: row;
  justify-content: space-between;
  height: 450px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.ltw}) {
    width: 100%;
    margin: 0px 30px 0px 30px;
    height: auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    flex-direction: column;
    height: inherit;
    margin: 0 25px 0 25px;
    width: inherit;
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.ssmw}) {
    margin: 0 10px 0 10px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    display: none;
  }
`;

export const HeroImg = styled.img`
  width: 600px;
  height: auto;
`;
export const HeroHeadingContainer = styled.div``;
export const HeroTextContainer = styled.div`
  margin-top: 25px;
`;
export const HeroButtonContainer = styled.div`
  margin-top: 25px;
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

export const H1 = styled.div`
  font-size: 35px;
  font-weight: 500;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    font-size: ${({ theme }) => theme.responsiveFonts.heroBigText};
  }
`;
export const P = styled.div`
  font-size: 25px;
  color: #9a9a9a;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    font-size: ${({ theme }) => theme.responsiveFonts.heroSmallText};
  }
`;
