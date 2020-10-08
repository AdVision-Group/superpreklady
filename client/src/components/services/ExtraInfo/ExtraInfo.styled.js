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
`;

export const HeadingContainer = styled.div`
  text-align: left;
  padding-bottom: 45px;
`;

export const Separator = styled.div`
  min-height: 8px;
  max-width: 350px;
  background-color: #3250d1;
  margin-bottom: 25px;
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
`;

export const P = styled.div`
font-size: ${({ theme }) => theme.fontSize.paragraphText};;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h1};
  padding-bottom: 5px;
`;