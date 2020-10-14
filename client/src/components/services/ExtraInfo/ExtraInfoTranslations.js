import React from "react";
import {
  Heading,
  HeadingContainer,
  InfoInnerContainer,
  InfoMainContainer,
  Separator,
  SubHeading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Tr,
  P,
  H1,
  ThLeft,
} from "./ExtraInfo.styled";
import ExtraPriceListTranslations from "../../priceList/extraPriceList/ExtraPriceListTranslations";

const ExtraInfoTranslations = () => {
  return (
    <InfoMainContainer>
      <section title="sectionTlmocenie" id="sectionTlmocenie" />
      <InfoInnerContainer>
        <HeadingContainer>
          <Heading>
            <H1>Tlmočenie</H1>
          </Heading>
          <Separator />
          <SubHeading>
            <P>
              Preklad v maximalnej miere obsahovo aj graficky zodpoveda navrhu.
              <br /> Dodrziavame vsetky podmieky vyplivajuce zo zakona
            </P>
          </SubHeading>
        </HeadingContainer>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr>
                <ThLeft>Kombinacia Jazykov</ThLeft>
                <Th>Angličtina, nemčina, slovenčina, čeština</Th>
              </Tr>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th>Prakticky všetky s výnimkou špeciálnej medicíny</Th>
              </Tr>
              <Tr>
                <ThLeft>Ponuka</ThLeft>
                <Th>
                  Obchodné rokovania, diplomatické stretnutia, prezentácie,
                  školenia, konferencie, rozhovory/interviews, tlačové
                  konferencie, zábava, technické, lekárske, policajné, právne,
                  ekonomické, počítačové
                </Th>
              </Tr>
              <Tr>
                <ThLeft>Druhy tlmočenia</ThLeft>
                <Th>
                  Konzekutívne (po logických úsekoch), simultánne (tlmočenie v
                  tlmočníckej kabíne, prakticky súčasne s originálom), šušotáž
                  (šepkanie do ucha)
                </Th>
              </Tr>
              <Tr>
                <ThLeft>Kvalita tlmočenia</ThLeft>
                <Th>
                  V tlmočení mám mnohoročné skúsenosti, ktoré mi umožňujú vďaka,
                  ktorým dokážem pružne reagovať na rôzne situácie, jazykovú
                  kompetenciu, ktorá mi umožňuje vyjadrovať sa presne,
                  entuziazmus, ktorý mi dáva výdrž, a kontakt na sieť iných
                  tlmočníkov, ktorí ma môžu zastúpiť, keď mi napr. časovo
                  kolidujú dve tlmočenia.
                </Th>
              </Tr>
              <Tr>
                <ThLeft>
                  Tlmočenie z nemčiny/angličtiny do slovenčiny/češtiny a naopak
                </ThLeft>
                <Th>
                  od 30€ / Hodina
                </Th>
              </Tr>
              <Tr>
                <ThLeft>
                  Tlmočenie z nemčiny do angličtiny a naopak
                </ThLeft>
                <Th>
                  od 40€ / Hodina
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </InfoInnerContainer>
    </InfoMainContainer>
  );
};

export default ExtraInfoTranslations;
