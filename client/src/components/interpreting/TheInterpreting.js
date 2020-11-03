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


const TheInterpreting = () => {
  return (
    <TheCurriculumContainer>
      <TheCurriculumInnerContainer>
        <HeadingContainer>
          <H1>Tlmočenie</H1>
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
                <ThLeft>Ponuka</ThLeft>
                <Th>
                  Obchodné rokovania<br/>
                  Diplomatické stretnutia<br/>
                  Prezentácie, školenia<br/>
                  Konferencie<br/>
                  Rozhovory/interviews<br/>
                  Tlačové konferencie<br/>
                  Zábava, technické<br/>
                  Lekárske, policajné<br/>
                  Právne<br/>
                  Ekonomické<br/>
                  Počítačové<br/>
                </Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Druhy tlmočenia</ThLeft>
                <Th>Konzekutívne (po logických úsekoch), simultánne (tlmočenie v tlmočníckej kabíne, prakticky súčasne s originálom), šušotáž (šepkanie do ucha)</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th>Prakticky všetky s výnimkou špeciálnej medicíny</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Kvalita tlmočenia</ThLeft>
                <Th>V tlmočení mám mnohoročné skúsenosti, ktoré mi umožňujú vďaka, ktorým dokážem pružne reagovať na rôzne situácie, jazykovú kompetenciu, ktorá mi umožňuje vyjadrovať sa presne, entuziazmus, ktorý mi dáva výdrž, a kontakt na sieť iných tlmočníkov, ktorí ma môžu zastúpiť, keď mi napr. časovo kolidujú dve tlmočenia. </Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Cenník</ThLeft>
                <Th>
                  Tlmočenie z nemčiny/angličtiny do slovenčiny/češtiny a naopak − 30 EUR/hodina<br/>
                  Tlmočenie z nemčiny do angličtiny a naopak –40 EUR/hodina
                  <p style={{marginBottom:'5px'}}>Posledná hodina tlmočenia sa počíta ako celá. Tlmočenie kratšie ako 2 hodiny sa počíta ako 2 hodiny.<br/> Pre tlmočenia mimo Bratislavy sa účtujú cestovné náklady:
                  </p>
                  Doprava vlastným autom 0,33 EUR/km tam aj späť plus prípadné diaľničné známky<br/>
                  Cena dopravy verejnou dopravou podľa skutočných nákladov plus náhrada stratu času cestovaním − 15 EUR/hodina.<br/>
                  Ubytovanie a strava počas tlmočenia mimo Bratislavy idú na náklady zákazníka.
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

export default TheInterpreting;
