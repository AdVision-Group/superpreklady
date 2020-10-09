import styled from "styled-components";


export const TheCurriculumContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const TheCurriculumInnerContainer = styled.div`
width: 80%;
`
export const HeadingContainer = styled.div`
text-align: center;
padding-bottom: 75px;

`
export const ContentContainer = styled.div`
padding-bottom: 125px;

`
export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h1};
  padding-bottom: 5px;
`;
export const Table = styled.table`
  text-align: left;
  border-spacing: 0;
  padding: 25px;
    border: solid #dbdbdb 1px;
  background-color: #fcfcfc;
`;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 5px 0 5px 55px;
  line-height: 1.3;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
  vertical-align: baseline;
`;

export const ThLeft = styled.th`
  width: 250px;
  padding: 5px 0 5px 0;
  line-height: 1.3;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.paragraphText};
  vertical-align: baseline;
`;

export const Tr = styled.tr`
`;

export const TrSeparator = styled.tr`

`;

export const ThSearator = styled.th`
  padding: 5px 10px 5px 0px;
  line-height: 1.3;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h2};
  vertical-align: baseline;
`;
