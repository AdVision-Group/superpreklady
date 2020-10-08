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
  P,H1
} from "./ExtraInfo.styled";

const ExtraInfoOfficial = () => {
  return (
    <InfoMainContainer>
      <section
          title="sectionUradnePreklady"
          id="sectionUradnePreklady"
      />
      <InfoInnerContainer>
        <HeadingContainer>
          <Heading>
            <H1>ÚRADNE OVERENÉ PREKLADY</H1>
          </Heading>
          <Separator />
          <SubHeading>
            <P>
              Preklad v maximálnej miere obsahovo aj graficky zodpovedá originálu.
              <br /> Dodržiavam všetky podmieky vyplivajúce zo zákona.
            </P>
          </SubHeading>
        </HeadingContainer>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>Kombinácia jazykov</Th>
                <Th>Angličtina, nemčina, slovenčina</Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>Odbory</Th>
                <Th>Technika, právo, ekonomika, medicína</Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>Ponuka</Th>
                <Th>
                  Vysvedčenia, potvrdenia, certifikáty, zmluvy, lekárske správy, finančné výkazy, technické
                  správy, znalecké posudky, patenty
                </Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>
                  Preberanie podkladov a odovzdanie hotových úradne overených prekladov
                </Th>
                <Th>
                  Pri úradne overených prekladoch sa originál zväzuje s prekladom. Odporúča sa preto
                  z diplomov, vysvedčení a pod. najprv nechať vyhotoviť úradne overenú kópiu a až tú nechať
                  preložiť. Pokiaľ zákazník pošle podklady vopred, napr. poštou alebo naskenované e-mailom,
                  stačí, keď si príde osobne iba raz nechať si zviazať preklad s originálom trikolórou. Som
                  flexibilný na preberanie a odovzdávanie úradne overených prekladov
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </InfoInnerContainer>
      <div>
        <ExtraPriceListOfficial />
      </div>
    </InfoMainContainer>
  );
};

export default ExtraInfoOfficial;
