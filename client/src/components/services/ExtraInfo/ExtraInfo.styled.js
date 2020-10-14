import styled from "styled-components";

export const InfoMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoInnerContainer = styled.div`
  width: 70%;
  background-color: #f7f7f7;
  padding: 60px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.stw}) {
    width: auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    width: auto;
    padding: 60px 25px 60px 25px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.ssmw}) {
    padding: 20px 10px 20px 10px;
  }
`;

export const HeadingContainer = styled.div`
  text-align: left;
  padding-bottom: 45px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    text-align: center;
  }
`;

export const Separator = styled.div`
  min-height: 8px;
  max-width: 350px;
  background-color: #3250d1;
  margin-bottom: 25px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    max-width: inherit;
    min-height: 4px;
  }
`;

export const Heading = styled.div`
  padding-bottom: 5px;
`;

export const SubHeading = styled.div``;

export const TableContainer = styled.div``;

export const Table = styled.table`
  text-align: left;
`;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 5px 0 5px 0;
  line-height: 1.3;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
  vertical-align: baseline;
`;

export const Tr = styled.tr`
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    display: flex;
    flex-direction: column;
  }
`;

export const P = styled.div`
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h1};
  padding-bottom: 5px;
`;

export const ThLeft = styled.th`
  padding: 5px 0 5px 0;
  line-height: 1.3;
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
  vertical-align: baseline;
  width: 350px;
  font-weight: bold;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    width: inherit;
  }
`;

export const ExtraPriceContainer = styled.div`
  padding: 0;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    padding: 35px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.ssmw}) {
    padding: 10px;
  }
`;
