import styled from "styled-components";

export const HeroSliderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 450px;
  background: #e3e3e3;
`;

export const HeroSliderInnerContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 100px 0px 100px;
  flex-direction: row;
  justify-content: space-between;
  height: 450px;
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
  font-size: 18px;
  padding: 15px 28px 15px 28px;
  background-color: #3250d1;
  color: #ffffff;
  border: none;
  display: inline-block;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
`;

export const H1 = styled.div`
  font-size: 55px;
  font-weight: 500;
`;
export const P = styled.div`
  font-size: 29px;
  color: #9A9A9A;
`;
