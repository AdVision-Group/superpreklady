import React from "react";
import {
  ContactContainer,
  ContactInnerContainer,
  HeadingContactContainer,
  ContactFormContainer,
  Heading,
  FormRightSide,
  FormContactFormular,
  RowOne,
  RowTwo,
  RowThree,
  InputName,
  InputEmail,
  InputDivContainerRight,
  InputText,
  H1,
  Button,
  InputDivContainer,
  LogoImg,
  LogoInnerContainer,
  LogoInnerContainerContent,
  SubHeading,
  H1F,
  H3F,
  LogoContainer,
  LogoCenteringContainer

} from "./Contact.styled";

import Logo from '../../images/phone-black-18dp.png'


const Contact = () => {
  return (
    <ContactContainer>
      <section title="sectionKontakt" id="sectionKontakt" />
      <ContactInnerContainer>
        <HeadingContactContainer>
          <H1>Kontakt</H1>
          <span><b>Ambroseho 10, 851 02 Bratislava 5</b></span>
        </HeadingContactContainer>
        <ContactFormContainer>
          <FormRightSide>
            <Heading>
              <H1>Pošlite mi správu</H1>
            </Heading>
            <FormContactFormular>
              <RowOne>
                <InputDivContainer>
                  <InputName placeholder="Vaše meno" />
                </InputDivContainer>
                <InputDivContainerRight>
                  <InputEmail placeholder="Váš e-mail" />
                </InputDivContainerRight>
              </RowOne>
              <RowTwo>
                <div>
                  <InputText placeholder="Správa" />
                </div>
              </RowTwo>
              <RowThree>
                <Button>Odoslať</Button>
              </RowThree>
              <LogoContainer>
                <LogoInnerContainerContent>
                  <SubHeading>
                    <H3F>Alebo mi zavolajte na</H3F>
                  </SubHeading>
                  <LogoCenteringContainer>
                    <LogoInnerContainer style={{ paddingRight: "25px" }}>
                      <LogoImg src={Logo} alt="mainLogo" />
                    </LogoInnerContainer>
                    <div>
                      <p><span style={{fontSize: '30px'}}>+421 908 728 274</span></p>
                    </div>
                  </LogoCenteringContainer>
                </LogoInnerContainerContent>
              </LogoContainer>
            </FormContactFormular>
          </FormRightSide>
        </ContactFormContainer>
      </ContactInnerContainer>
    </ContactContainer>
  );
};

export default Contact;
