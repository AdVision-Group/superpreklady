import React from "react";
import {
  PriceListContainer,
  PriceListHeadingContainer,
  MainHeading,
  SecondHeading,
  PriceListContentContainer,
  ContentCardContainer,
  Heading,
  SecondaryHeading,
  Content,
  Price,H3,H4
} from "./PriceList.styled";

const PriceList = () => {
  return (
    <PriceListContainer>
      <PriceListHeadingContainer>
        <MainHeading>
          <H3>CENNIK</H3>
        </MainHeading>
        <SecondHeading>
          <H4>CENNIK URADNE OVERENYCH PREKLADOV</H4>
        </SecondHeading>
      </PriceListHeadingContainer>
      <PriceListContentContainer>
        <ContentCardContainer>
          <Heading>
            <h3>PREKLAD</h3>
          </Heading>
          <SecondaryHeading>
            Z anglictiny/nemciny do slovenciny a naopak
          </SecondaryHeading>
          <Content>
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with deskto
          </Content>
          <Price>20E / NORMOSTRANA</Price>
        </ContentCardContainer>
        <ContentCardContainer>
          <Heading>
            <h3>PREKLAD</h3>
          </Heading>
          <SecondaryHeading>
            Z anglictiny/nemciny do slovenciny a naopak
          </SecondaryHeading>
          <Content>
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with deskto
          </Content>
          <Price>20E / NORMOSTRANA</Price>
        </ContentCardContainer>
      </PriceListContentContainer>
    </PriceListContainer>
  );
};

export default PriceList;