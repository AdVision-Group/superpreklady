import React from "react";

import {
  TheCurriculumContainer,
  TheCurriculumInnerContainer,
  HeadingContainer,
  ContentContainer,
  H1,
  Table,
  Tbody,
  Th,
  ThLeft,
  Tr,
  TrSeparator,
  ThSeparator
} from "../translationsStyle/TheTranslations.styled";

const TheNonOfficialTranslations = () => {
  return (
    <TheCurriculumContainer>
      <TheCurriculumInnerContainer>
        <HeadingContainer>
          <H1>Neúradné preklady</H1>
        </HeadingContainer>
        <ContentContainer>
          <Table>
            <Tbody>
              <Tr>
                <ThLeft>Kombinácia jazykov</ThLeft>
                <Th><b>Angličtina – nemčina – slovenčina – čeština</b><ul><li>Iné jazyky na dopyt.</li></ul></Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Ponuka </ThLeft>
                <Th>
                  <ul>
                    <li>Manuály</li>
                    <li>Technická dokumentácia</li>
                    <li>Obchodná korešpondencia</li>
                    <li>Ponuky</li>
                    <li>Zmluvy</li>
                    <li>Prospekty</li>
                    <li>Katalógy</li>
                    <li>Prezentácie</li>
                    <li>Softvér</li>
                    <li>Riadiace systémy strojov</li>
                  </ul>
                </Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th><ul><li>Technika, právo, ekonomika, medicína</li></ul></Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Kvalita prekladov</ThLeft>
                <Th><ul><li>Mojím cieľom je dodať preklad, v ktorom sa píše o tom istom ako v origináli. Terminológiu overujem pomocou slovníkov, internetu a konzultácie so zákazníkom. </li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th><ul><li>Preklady marketingových materiálov odporúčam nechať kontrolovať kvalifikovanými rodenými hovorcami, ktorých zabezpečím. Cena okolo 7 EUR/normostrana</li></ul></Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Preberanie a odovzdávanie</ThLeft>
                <Th>
                  <ul>
                    <li>E-mailom</li>
                    <li>Poštou</li>
                    <li>Osobne</li>
                    <li>možnosť pracovať priamo u zákazníka</li>
                  </ul>
                </Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Cenník</ThLeft>
                <Th>
                  <ul><li><b>Preklad z nemčiny/angličtiny do slovenčiny/češtiny a naopak</b><br/>od 13 EUR/normostrana</li></ul>
                  </Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th>
                  <ul><li><b>Preklad z nemčiny do angličtiny a naopak </b><br/>od 17 EUR/normostrana</li></ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th>
                  <ul><li>Normostrana je 1 800 znakov vrátane medzislovných medzier.</li></ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th>
                  <ul><li>Cena sa počíta z hotového prekladu, nie z originálu. Pred zadaním zákazky vyhotovujem aspoň orientačnú cenovú kalkuláciu, ktorá zohľadní aj rozsah zákazky po preklade</li></ul>
                </Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
            </Tbody>
          </Table>
        </ContentContainer>
      </TheCurriculumInnerContainer>
    </TheCurriculumContainer>
  );
};

export default TheNonOfficialTranslations;
