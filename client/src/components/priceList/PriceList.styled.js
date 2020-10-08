import styled from "styled-components";

export const PriceListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding-top: 75px;
  padding-bottom: 75px;
`;
export const PriceListHeadingContainer = styled.div`
padding: 0 0 55px 0;
`;

export const MainHeading = styled.div`

`;
export const SecondHeading = styled.div`

`;
export const PriceListContentContainer = styled.div`
  display: flex;
  width: 85%;
  flex-direction: row;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(208, 208, 208, 0.75);
  -moz-box-shadow: 0px 0px 10px 1px rgba(217, 217, 217, 0.75);
  box-shadow: 0px 0px 10px 1px rgba(226, 226, 226, 0.75);
`;
export const ContentCardContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 55px;
`;
export const Heading = styled.div`
padding-bottom: 5px;
`;
export const SecondaryHeading = styled.div`
padding-bottom: 35px;
`;
export const Content = styled.div`

align-items: center;
padding-bottom: 35px;
`;
export const Price = styled.div``;


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
`;

export const Table = styled.table`
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 5px 0 5px 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
  vertical-align: baseline;
  line-height: 1.3;
`;

export const Tr = styled.tr`
`;