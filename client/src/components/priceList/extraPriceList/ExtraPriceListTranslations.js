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

const ExtraPriceListTranslations = () => {
  return (
    <PriceListContainer>
      <PriceListHeadingContainer>
        <MainHeading>
          <H3>CENNÍK</H3>
        </MainHeading>
        <SecondHeading>
          <H1H>CENNÍK TLMOCENIA</H1H>
        </SecondHeading>
      </PriceListHeadingContainer>
      <PriceListContentContainer>
        <ContentCardContainer>
          <Heading>
            <H3>PREKLAD</H3>
          </Heading>
          <SecondaryHeading>
            <H1>Tlmočenie z nemčiny/angličtiny do slovenčiny/češtiny a naopak</H1>
          </SecondaryHeading>
          <Content>
            <Table>
              <Tbody>
                <Tr>
                  <Th>
                    Normostrana je 1 800 znakov vrátane medzislovných medzier..
                  </Th>
                </Tr>
                <Tr>
                  <Th>
                    Cena sa počíta z hotového prekladu, nie z originálu.
                  </Th>
                </Tr>
                <Tr>
                  <Th>
                    Pred zadaním zákazky vyhotovujem aspoň orientačnú cenovú
                    kalkuláciu, ktorá zohľadní aj rozsah zákazky po preklade.

                  </Th>
                </Tr>
              </Tbody>
            </Table>
          </Content>
          <Price>
            <h1> 30 EUR/hodina</h1>
          </Price>
        </ContentCardContainer>
        <ContentCardContainer>
          <Heading>
            <H3>PREKLAD</H3>
          </Heading>
          <SecondaryHeading>
            <H1>Tlmočenie z nemčiny do angličtiny a naopak</H1>
          </SecondaryHeading>
          <Content>
            <Table>
              <Tbody>
                <Tr>
                  <Th>
                    Posledná hodina tlmočenia sa počíta ako celá.
                  </Th>
                </Tr>
                <Tr>
                  <Th>
                    Tlmočenie kratšie ako 2 hodiny sa počíta ako
                    2 hodiny.
                  </Th>
                </Tr>
                <Tr>
                  <Th>
                    . Pre tlmočenia mimo Bratislavy sa účtujú cestovné náklady:
                    - doprava vlastným autom 0,33 EUR/km tam aj späť plus prípadné diaľničné známky
                    - cena dopravy verejnou dopravou podľa skutočných nákladov plus náhrada stratu
                    času cestovaním − 15 EUR/hodina.
                  </Th>
                </Tr>
              </Tbody>
            </Table>
          </Content>
          <Price>
            <h1>40 EUR/hodina</h1>
          </Price>
        </ContentCardContainer>
      </PriceListContentContainer>
    </PriceListContainer>
  );
};

export default ExtraPriceListTranslations;
