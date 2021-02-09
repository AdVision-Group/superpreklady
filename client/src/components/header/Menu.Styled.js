import styled from "styled-components";

export const MenuMainDiv = styled.div`
  font-size: ${({ theme }) => theme.fontSize.menuFontSize};
  white-space: nowrap;
  a {
    text-decoration: none;
    color: black;
    :hover {
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    display: none;
  }
`;

export const MenuInnerContainer = styled.div``;

export const MenuFirstLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 53px;
padding-left: 20px;
 
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.stw}) {
    padding-top: 25px;
    padding-bottom: 20px;
    justify-content: center;
  }
`;
export const MenuNumberContainer = styled.div`
padding-right: 40px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.stw}) {
    display: none;
  }
`;
export const MenuEmailContainer = styled.div`
padding-right: 40px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.stw}) {
    display: none;
  }
`;
export const MenuSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const MenuSecondLineContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    display: none;
  }
`;
export const MenuInnerNavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    margin: 25px 20px 10px 20px;
  }
`;
