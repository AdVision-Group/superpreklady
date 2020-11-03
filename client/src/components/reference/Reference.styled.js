import styled from "styled-components";

export const ReferenceContainer = styled.div`
  background: #ffffff;
  text-align: center;
  padding-bottom: 75px;
  padding-top: 75px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.stw}) {
    padding: 50px 20px 5px 20px;
`;

export const ReferenceInnerContainer = styled.div`

`;

export const ReferenceHeading = styled.div`
  padding: 0 0 55px 0;
`;


export const ReferenceMainHeading = styled.div``;

export const ReferenceCardInnerContainer = styled.div`
`;

export const ReferenceSecondHeading = styled.div``;


export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h1};
  padding-bottom: 5px;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.accentColor};
  font-size: ${({ theme }) => theme.fontSize.h3};
  padding-bottom: 5px;
`;

export const ReferenceContentContainer = styled.div`
margin: 0 20px 0 20px;
`;

export const ReferenceContentInnerGridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
row-gap: 60px;
column-gap: 30px;
  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
   @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
     @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


export const ReferenceImg = styled.img`
  width: auto;
  height: 50px;
    @media only screen and (max-width: 1600px) {
    height: 45px;
  }
     @media only screen and (max-width: 1200px) {
    height: 35px;
  }
`;

export const ReferenceGridItem = styled.div`
place-self: center;
`;

