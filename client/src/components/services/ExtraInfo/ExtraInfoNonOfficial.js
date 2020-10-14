import React from "react";
import {
  Heading,
  HeadingContainer,
  InfoInnerContainer,
  InfoMainContainer,
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
} from "./ExtraInfo.styled";
import ExtraPriceListNonOfficial from "../../priceList/extraPriceList/ExtraPriceListNonOfficial";

const ExtraInfoNonOfficial = () => {
  return (
    <InfoMainContainer>
      <section title="sectionNeuradnePreklady" id="sectionNeuradnePreklady" />
      <InfoInnerContainer>
        <HeadingContainer>
          <Heading>
            <H1>Neúradné preklady</H1>
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
                <ThLeft>Kombinácia jazykov</ThLeft>
                <Th>Angličtina, nemčina, slovenčina, čeština</Th>
              </Tr>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th>Technika, právo, ekonomika, medicína</Th>
              </Tr>
              <Tr>
                <ThLeft>Ponuka</ThLeft>
                <Th>
                  Manuály, technická dokumentácia, obchodná korešpondencia,
                  ponuky, zmluvy, prospekty, katalógy, prezentácie, softvér,
                  riadiace systémy strojov
                </Th>
              </Tr>
              <Tr>
                <ThLeft>Preberanie a odovzdávanie</ThLeft>
                <Th>
                  E-mailom, poštou, osobne, možnosť pracovať priamo u zákazníka
                </Th>
              </Tr>
              <Tr>
                <ThLeft>Kvalita prekladov</ThLeft>
                <Th>
                  Mojím cieľom je dodať preklad, v ktorom sa píše o tom istom,
                  ako v origináli. Terminológiu overujem pomocou slovníkov,
                  internetu a konzultácie so zákazníkom. Preklady marketingových
                  materiálov odporúčam nechať kontrolovať kvalifikovanými
                  rodenými hovorcami, ktorých zabezpečím. Cena okolo 7
                  EUR/normostrana.
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </InfoInnerContainer>
      <div>
        <ExtraPriceListNonOfficial />
      </div>
    </InfoMainContainer>
  );
};

export default ExtraInfoNonOfficial;
