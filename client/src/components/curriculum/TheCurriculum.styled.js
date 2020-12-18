import styled from "styled-components";

export const TheCurriculumContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 75px;
`;

export const TheCurriculumInnerContainer = styled.div`
  width: 80%;
  
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    font-size: ${({ theme }) => theme.responsiveFonts.tableParagraphText};
    width: inherit;
    padding: 10px;
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  padding-bottom: 75px;
`;

export const ContentContainer = styled.div`
  padding-bottom: 125px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    font-size: ${({ theme }) => theme.responsiveFonts.tableParagraphText};
    padding: 25px;
  }
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h1};
  padding-bottom: 5px;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    font-size: ${({ theme }) => theme.responsiveFonts.rH1};
  }
`;

export const Table = styled.table`
  text-align: left;
  border-spacing: 0;
  //border: solid #dbdbdb 1px;
  //background-color: #fdfdfd;
  min-width: 100%;
`;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 5px 0 5px 55px;
  line-height: 1.3;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
  vertical-align: baseline;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    font-size: ${({ theme }) => theme.responsiveFonts.tableParagraphText};
    padding: 0 0 0 5px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.ssmw}) {
    font-size: 13px;
  }
`;

export const ThLeft = styled.th`
  width: 250px;
  padding: 5px 0 5px 25px;
  line-height: 1.3;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
  vertical-align: baseline;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    font-size: ${({ theme }) => theme.responsiveFonts.tableParagraphText};
    width: inherit;
    padding: 0 0 0 5px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.ssmw}) {
    font-size: 13px;
    padding: 0;
  }
`;

export const Tr = styled.tr``;

export const TrSeparator = styled.tr``;

export const ThSeparator = styled.th`
  padding: 5px 10px 5px 25px;
  line-height: 1.3;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h2};
  vertical-align: baseline;
  //background-color: #eaeaea;
  white-space: nowrap;
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.mmw}) {
    font-size: ${({ theme }) => theme.responsiveFonts.tableSeparatorText};
    white-space: normal;
    padding: 5px 0 5px 5px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.brakePoints.ssmw}) {
    font-size: 14px;
    padding: 0;
  }
`;