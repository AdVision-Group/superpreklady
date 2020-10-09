import React from "react";
import {
  Content,
  ContentCardContainer,
  Heading,
  MainHeading,
  Price,
  PriceListContainer,
  PriceListContentContainer,
  PriceListHeadingContainer,
  SecondaryHeading,
  SecondHeading,
  H3,
  H1,
    H1H,
  Table,
  Tbody,
  Th,
  Tr,
} from "../PriceList.styled";

const ExtraPriceListOfficial = () => {
  return (
    <PriceListContainer>
      <PriceListHeadingContainer>
        <MainHeading>
          <H3>CENNÍK</H3>
        </MainHeading>
        <SecondHeading>
          <H1H>CENNÍK ÚRADNE OVERENÝCH PREKLADOV</H1H>
        </SecondHeading>
      </PriceListHeadingContainer>
      <PriceListContentContainer>
        <ContentCardContainer>
          <Heading>
            <H3>PREKLAD</H3>
          </Heading>
          <SecondaryHeading>
            <H1>preklad z nemčiny/angličtiny do slovenčiny a naopak</H1>
          </SecondaryHeading>
          <Content>
            <Table>
              <Tbody>
              <Tr>
                <Th>
                  Posledná začatá normostrana sa počíta ako celá.
                </Th>
              </Tr>
              <Tr>
                <Th>
                  Okamžité vykonanie prekladu − 50 % príplatok.
                </Th>
              </Tr>
              <Tr>
                <Th>
                  Normostrana je 1 800 znakov vrátane medzislovných medzier.
                </Th>
              </Tr>
              <Tr>
                <Th>
                  Cena sa počíta z
                  hotového prekladu, nie z originálu. Preklad môže byť dlhší ako originál: preklad zo
                  slovenčiny do angličtiny je napr. dlhší asi o 10 percent, do nemčiny aj o 30 percent.
                </Th>
              </Tr>
              </Tbody>
            </Table>
          </Content>
          <Price>
            <H1>20€ / normostrana</H1>
          </Price>
        </ContentCardContainer>
        <ContentCardContainer >
          <Heading>
            <H3>PREKLAD</H3>
          </Heading>
          <SecondaryHeading>
            <H1>preklad z nemčiny do angličtiny a naopak</H1>
          </SecondaryHeading>
          <Content>
            <Table>
              <Tbody>
                <Tr>
                  <Th>
                    Posledná začatá normostrana sa počíta ako celá.
                  </Th>
                </Tr>
                <Tr>
                  <Th>
                    Okamžité vykonanie prekladu − 50 %
                    príplatok.
                  </Th>
                </Tr>
                <Tr>
                  <Th>
                    Normostrana je 1 800 znakov vrátane medzislovných medzier.
                  </Th>
                </Tr>
                <Tr>
                  <Th>
                    Cena sa počíta z
                    hotového prekladu, nie z originálu. Preklad môže byť dlhší ako originál: preklad zo
                    slovenčiny do angličtiny je napr. dlhší asi o 10 percent, do nemčiny aj o 30 percent.
                  </Th>
                </Tr>
              </Tbody>
            </Table>
          </Content>
          <Price>
            <H1>26€ / normostrana</H1>
          </Price>
        </ContentCardContainer>
      </PriceListContentContainer>
    </PriceListContainer>
  );
};

export default ExtraPriceListOfficial;
