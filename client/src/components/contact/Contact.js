import React from "react";
import { NavLink } from "react-router-dom";
import {
  ContactContainer,
  ContactInnerContainer,
  HeadingContactContainer,
  ContactFormContainer,
  FormLeftSide,
  CardHeading,
  CardText,
  CardSeparator,
  Heading,
  ContactCardContainer,
  FormRightSide,
  FormContactFormular,
  RowOne,
  RowTwo,
  RowThree,
  InputName,
  InputEmail,
  InputText,
  H3,
    H3C,
  H1,
  Button,
    P
} from "./Contact.styled";

const Contact = () => {
  return (
    <ContactContainer>
      <section
          title="sectionKontakt"
          id="sectionKontakt"
      />
      <ContactInnerContainer>
        <HeadingContactContainer>
          <H3C>KONTAKT</H3C>
          <H1>SPOJTE SA SO MNOU</H1>
        </HeadingContactContainer>
        <ContactFormContainer>
          <FormLeftSide>
            <Heading>
              <H1>Kontaktné Údaje</H1>
            </Heading>
            <ContactCardContainer>
              <CardHeading>
                <H3>Adresa</H3>
              </CardHeading>
              <CardText>
                <P>Ambroseho 10 , 851 02 Bratislava 5</P>
              </CardText>
              <CardSeparator />
            </ContactCardContainer>
            <ContactCardContainer>
              <CardHeading>
                <H3>Telefón</H3>
              </CardHeading>
              <CardText>
                <P>+421 908 72 82 74</P>
              </CardText>
              <CardSeparator />
            </ContactCardContainer>
            <ContactCardContainer>
              <CardHeading>
                <H3>E-mail</H3>
              </CardHeading>
              <CardText>
                <P>pavel@superpreklady.sk</P>
              </CardText>
            </ContactCardContainer>
            <div>
              <NavLink to="/kontakt">
                <Button>Kontaktné údaje</Button>
              </NavLink>
            </div>
          </FormLeftSide>
          <FormRightSide>
            <Heading>
              <H1>Pošlite mi správu</H1>
            </Heading>
            <FormContactFormular>
              <RowOne>
                <div>
                  <InputName placeholder="Vaše meno" />
                </div>
                <div>
                  <InputEmail placeholder="Váš e-mail" />
                </div>
              </RowOne>
              <RowTwo>
                <div>
                  <InputText placeholder="Správa" />
                </div>
              </RowTwo>
              <RowThree>
                <Button>Odoslať</Button>
              </RowThree>
            </FormContactFormular>
          </FormRightSide>
        </ContactFormContainer>
      </ContactInnerContainer>
    </ContactContainer>
  );
};

export default Contact;