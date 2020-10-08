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
  P,H1
} from "./ExtraInfo.styled";
import ExtraPriceListNonOfficial from "../../priceList/extraPriceList/ExtraPriceListNonOfficial";

const ExtraInfoNonOfficial = () => {
  return (
    <InfoMainContainer>
      <section
          title="sectionNeuradnePreklady"
          id="sectionNeuradnePreklady"
      />
      <InfoInnerContainer>
        <HeadingContainer>
          <Heading>
            <H1>NEÚRADNÉ PREKLADY</H1>
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
                <Th style={{width:"350px", fontWeight:"bold"}}>Kombinácia jazykov</Th>
                <Th>Angličtina, nemčina, slovenčina, čeština</Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>Odbory</Th>
                <Th>Technika, právo, ekonomika, medicína</Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>Ponuka</Th>
                <Th>
                  Manuály, technická dokumentácia, obchodná korešpondencia, ponuky, zmluvy, prospekty,
                  katalógy, prezentácie, softvér, riadiace systémy strojov
                </Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>
                  Preberanie a odovzdávanie
                </Th>
                <Th>
                  E-mailom, poštou, osobne, možnosť pracovať priamo u zákazníka
                </Th>
              </Tr>
              <Tr>
                <Th style={{width:"350px", fontWeight:"bold"}}>
                  Kvalita prekladov
                </Th>
                <Th>
                  Mojím cieľom je dodať preklad, v ktorom sa píše o tom istom, ako v origináli. Terminológiu
                  overujem pomocou slovníkov, internetu a konzultácie so zákazníkom. Preklady
                  marketingových materiálov odporúčam nechať kontrolovať kvalifikovanými rodenými
                  hovorcami, ktorých zabezpečím. Cena okolo 7 EUR/normostrana.
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
