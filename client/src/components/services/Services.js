import React, { useState } from "react";
import {
  ServiceContainer,
  ServicesInnerContainer,
  ServicesHeading,
  ServicesMainHeading,
  ServicesSecondHeading,
  ServicesCardsContainer,
  ServiceCardContainer,
  ServiceCardInnerContainer,
  ServiceCardLogo,
  ServiceCardHeading,
  ServiceCardText,
  ServiceCardButton,
  H3,
  H1,
  H3C,
    P,
  Button,
  ServiceImg,
  AdditionalContentContainer,
} from "./Services.styled";
import ArticleIcon from "../../images/article-black-18dp.svg";
import ExtraInfoOfficial from "./ExtraInfo/ExtraInfoOfficial";
import ExtraInfoNonOfficial from "./ExtraInfo/ExtraInfoNonOfficial";
import ExtraInfoTranslations from "./ExtraInfo/ExtraInfoTranslations";

const Services = (props) => {
  function changeCard(card) {
    props.selectCard(card)
  }
  return (
    <ServiceContainer>
      <section
          title="sectionSluzbyHome"
          id="sectionSluzbyHome"
      />
      <ServicesInnerContainer>
        <ServicesHeading>
          <ServicesMainHeading>
            <H3>SLUŽBY</H3>
          </ServicesMainHeading>
          <ServicesSecondHeading>
            <H1>ČO PONÚKAM</H1>
          </ServicesSecondHeading>
        </ServicesHeading>
        <ServicesCardsContainer>
          <ServiceCardContainer>
            <ServiceCardInnerContainer>
              <ServiceCardLogo>
                <ServiceImg src={ArticleIcon} alt="mainLogo" />
              </ServiceCardLogo>
              <ServiceCardHeading>
                <H3>Úradne Overené preklady</H3>
              </ServiceCardHeading>
              <ServiceCardText>
                <P>
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with deskto
                </P>
              </ServiceCardText>
              <ServiceCardButton>
                <Button onClick={() => changeCard(0)}>Zisti viac</Button>
              </ServiceCardButton>
            </ServiceCardInnerContainer>
          </ServiceCardContainer>
          <ServiceCardContainer>
            <ServiceCardInnerContainer>
              <ServiceCardLogo>
                <ServiceImg src={ArticleIcon} alt="mainLogo" />
              </ServiceCardLogo>
              <ServiceCardHeading>
                <H3>Neúradné preklady</H3>
              </ServiceCardHeading>
              <ServiceCardText>
                <P>
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with deskto
                </P>
              </ServiceCardText>
              <ServiceCardButton>
                <Button onClick={() => changeCard(1)}>Zisti viac</Button>
              </ServiceCardButton>
            </ServiceCardInnerContainer>
          </ServiceCardContainer>
          <ServiceCardContainer>
            <ServiceCardInnerContainer>
              <ServiceCardLogo>
                <ServiceImg src={ArticleIcon} alt="mainLogo" />
              </ServiceCardLogo>
              <ServiceCardHeading>
                <H3>Tlmočenie</H3>
              </ServiceCardHeading>
              <ServiceCardText>
                <P>
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with deskto
                </P>
              </ServiceCardText>
              <ServiceCardButton>
                <Button onClick={() => changeCard(2)}>Zisti viac</Button>
              </ServiceCardButton>
            </ServiceCardInnerContainer>
          </ServiceCardContainer>
        </ServicesCardsContainer>
      </ServicesInnerContainer>
      <section
          title="sectionSluzby"
          id="sectionSluzby"
      />
      <AdditionalContentContainer>
        {props.activeCard === 0 && <ExtraInfoOfficial />}
        {props.activeCard === 1 && <ExtraInfoNonOfficial />}
        {props.activeCard === 2 && <ExtraInfoTranslations />}
      </AdditionalContentContainer>

    </ServiceContainer>
  );
};

export default Services;