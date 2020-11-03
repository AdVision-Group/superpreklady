import React from "react";

import {
  TheCurriculumContainer,
  TheCurriculumInnerContainer,
  HeadingContainer,
  ContentContainer,
  H1,
  H3,
  Table,
  Tbody,
  Th,
  ThLeft,
  Tr,
  TrSeparator,
  ThSeparator, SubHeadingH3,
} from "../translationsStyle/TheTranslations.styled";

const TheNonOfficialTranslations = () => {
  return (
    <TheCurriculumContainer>
      <TheCurriculumInnerContainer>
        <HeadingContainer>
          <H1>Neúradné preklady</H1>
        </HeadingContainer>
        <SubHeadingH3>
          <H3>Preklad v maximálnej miere obsahovo aj graficky zodpovedá originálu. Dodržiavam všetky podmienky vyplívajúce zo zákona.</H3>
        </SubHeadingH3>
        <ContentContainer>
          <Table>
            <Tbody>
              <Tr>
                <ThLeft>Kombinácia jazykov</ThLeft>
                <Th>Angličtina, nemčina, slovenčina, čeština</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Ponuka </ThLeft>
                <Th>
                  Manuály<br/>
                  Technická dokumentácia<br/>
                  Obchodná korešpondencia<br/>
                  Ponuky,zmluvy<br/>
                  Prospekty<br/>
                  Katalógy<br/>
                  Prezentácie<br/>
                  Softvér<br/>
                  Riadiace systémy strojov<br/></Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th>Technika, právo, ekonomika, medicína</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Kvalita prekladov</ThLeft>
                <Th>Mojím cieľom je dodať preklad, v ktorom sa píše o tom istom, ako v origináli. Terminológiu overujem pomocou slovníkov, internetu a konzultácie so zákazníkom. Preklady marketingových materiálov odporúčam nechať kontrolovať kvalifikovanými rodenými hovorcami, ktorých zabezpečím. Cena okolo 7 EUR/normostrana.</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Preberanie a odovzdávanie</ThLeft>
                <Th>
                  E-mailom<br/>
                  Poštou<br/>
                  Osobne<br/>
                  možnosť pracovať priamo u zákazníka<br/></Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Cenník</ThLeft>
                <Th>
                  preklad z nemčiny/angličtiny do slovenčiny/češtiny a naopak − od 13 EUR/normostrana<br/>
                  preklad z nemčiny do angličtiny a naopak − od 17 EUR/normostrana<br/>
                  Normostrana je 1 800 znakov vrátane medzislovných medzier. Cena sa počíta z hotového prekladu, nie z originálu. Pred zadaním zákazky vyhotovujem aspoň orientačnú cenovú kalkuláciu, ktorá zohľadní aj rozsah zákazky po preklade.</Th>
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
