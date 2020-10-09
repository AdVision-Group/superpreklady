import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background: #f7f7f7;
  text-align: center;
  padding-bottom: 75px;
  padding-top: 75px;
`;

export const ContactInnerContainer = styled.div``;
export const HeadingContactContainer = styled.div`
padding: 0 0 55px 0;
`


export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const FormLeftSide = styled.div`
  text-align: left;;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const CardHeading = styled.div``;
export const CardText = styled.div``;
export const CardSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #888888;
  margin-bottom: 15px;
`;
export const Heading = styled.div`
padding-bottom: 25px;
`;

export const ContactCardContainer = styled.div``;
export const FormRightSide = styled.div`
  text-align: left;
  width: 600px;
`;
export const FormContactFormular = styled.div``;
export const RowOne = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const RowTwo = styled.div`
  margin-top: 50px;
`;
export const RowThree = styled.div`
  margin-top: 25px;
`;
export const InputName = styled.input`
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.inputFontSize};
`;
export const InputEmail = styled.input`
margin-left: 25px;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.inputFontSize}
`;
export const InputText = styled.textarea`
  height: 225px;
  width: 100%;
   font-family: inherit;
   font-size: ${({ theme }) => theme.fontSize.inputFontSize}
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h2};
  padding-bottom: 5px;
`;
export const H3C = styled.h3`
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

