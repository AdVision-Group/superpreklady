import styled from "styled-components";

export const MenuMainDiv = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.menuFontSize};
  white-space: nowrap;
  a {
  text-decoration: none;
  color: black;
  :hover {
  color: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
export const MenuInnerContainer = styled.div``;
export const MenuFirstLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: solid 1px #f1f1f1;
`;
export const MenuNumberContainer = styled.div``;
export const MenuEmailContainer = styled.div``;
export const MenuSocialContainer = styled.div``;
export const MenuSecondLineContainer = styled.div`
  padding-top: 20px;
`;
export const MenuInnerNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.div`
  margin: 2px 20px 2px 20px;
  cursor: pointer;
`;
