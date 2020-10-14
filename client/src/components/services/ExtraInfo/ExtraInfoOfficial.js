import React from "react";
import ExtraPriceListOfficial from "../../priceList/extraPriceList/ExtraPriceListOfficial";

import {
  InfoMainContainer,
  InfoInnerContainer,
  HeadingContainer,
  Heading,
  Separator,
  SubHeading,
  TableContainer,
  Table,
  Tbody,
  Th,
  Tr,
  P,
  H1,
  ThLeft,
  ExtraPriceContainer,
} from "./ExtraInfo.styled";

const ExtraInfoOfficial = () => {
  return (
    <InfoMainContainer>
      <section title="sectionUradnePreklady" id="sectionUradnePreklady" />
      <InfoInnerContainer>
        <HeadingContainer>
          <Heading>
            <H1>Úradne overené preklady</H1>
          </Heading>
          <Separator />
          <SubHeading>
            <P>
              Preklad v maximálnej miere obsahovo aj graficky zodpovedá
              originálu.
              <br /> Dodržiavam všetky podmieky vyplivajúce zo zákona.
            </P>
          </SubHeading>
        </HeadingContainer>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr>
                <ThLeft>Kombinácia jazykov</ThLeft>
                <Th>Angličtina, nemčina, slovenčina</Th>
              </Tr>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th>Technika, právo, ekonomika, medicína</Th>
              </Tr>
              <Tr>
                <ThLeft>Ponuka</ThLeft>
                <Th>
                  Vysvedčenia, potvrdenia, certifikáty, zmluvy, lekárske správy,
                  finančné výkazy, technické správy, znalecké posudky, patenty
                </Th>
              </Tr>
              <Tr>
                <ThLeft>
                  Preberanie podkladov a odovzdanie hotových úradne overených
                  prekladov
                </ThLeft>
                <Th>
                  Pri úradne overených prekladoch sa originál zväzuje s
                  prekladom. Odporúča sa preto z diplomov, vysvedčení a pod.
                  najprv nechať vyhotoviť úradne overenú kópiu a až tú nechať
                  preložiť. Pokiaľ zákazník pošle podklady vopred, napr. poštou
                  alebo naskenované e-mailom, stačí, keď si príde osobne iba raz
                  nechať si zviazať preklad s originálom trikolórou. Som
                  flexibilný na preberanie a odovzdávanie úradne overených
                  prekladov
                </Th>
              </Tr>
              <Tr>
                <ThLeft>
                  Preklad z nemčiny/angličtiny do slovenčiny a naopak
                </ThLeft>
                <Th>
                  20€ / Normostrana
                </Th>
              </Tr>
              <Tr>
                <ThLeft>
                  Preklad z nemčiny do angličtiny a naopak
                </ThLeft>
                <Th>
                  26€ / Normostrana
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </InfoInnerContainer>
    </InfoMainContainer>
  );
};

export default ExtraInfoOfficial;

/*
* <ExtraPriceContainer>
        <ExtraPriceListOfficial />
      </ExtraPriceContainer>*/