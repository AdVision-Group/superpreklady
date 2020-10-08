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
  P,H1
} from "./ExtraInfo.styled";
import ExtraPriceListTranslations from "../../priceList/extraPriceList/ExtraPriceListTranslations";

const ExtraInfoTranslations = () => {
  return (
    <InfoMainContainer>
      <section
          title="sectionTlmocenie"
          id="sectionTlmocenie"
      />
      <InfoInnerContainer>
        <HeadingContainer>
          <Heading>
            <H1>TLMOČENIE</H1>
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
                <Th style={{width:"350px", fontWeight:"bold"}}>Kombinacia Jazykov</Th>
                <Th>Angličtina, nemčina, slovenčina, čeština</Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>Odbory</Th>
                <Th>Prakticky všetky s výnimkou špeciálnej medicíny</Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>Ponuka</Th>
                <Th>
                  Obchodné rokovania, diplomatické stretnutia, prezentácie, školenia, konferencie,
                  rozhovory/interviews, tlačové konferencie, zábava, technické, lekárske, policajné, právne,
                  ekonomické, počítačové
                </Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>
                  Druhy tlmočenia
                </Th>
                <Th>
                  Konzekutívne (po logických úsekoch), simultánne (tlmočenie v tlmočníckej kabíne, prakticky
                  súčasne s originálom), šušotáž (šepkanie do ucha)
                </Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>
                  Kvalita tlmočenia
                </Th>
                <Th>
                  V tlmočení mám mnohoročné skúsenosti, ktoré mi umožňujú vďaka, ktorým dokážem
                  pružne reagovať na rôzne situácie, jazykovú kompetenciu, ktorá mi umožňuje vyjadrovať sa
                  presne, entuziazmus, ktorý mi dáva výdrž, a kontakt na sieť iných tlmočníkov, ktorí ma môžu
                  zastúpiť, keď mi napr. časovo kolidujú dve tlmočenia.
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </InfoInnerContainer>
      <div>
        <ExtraPriceListTranslations />
      </div>
    </InfoMainContainer>
  );
};

export default ExtraInfoTranslations;
