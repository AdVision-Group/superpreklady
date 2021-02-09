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
  ThSeparator,
} from "../translationsStyle/TheTranslations.styled";
import  "../translationsStyle/TheTranslationsStyle.css"

const TheInterpreting = () => {
  return (
    <TheCurriculumContainer>
      <TheCurriculumInnerContainer>
        <HeadingContainer>
          <H1>Tlmočenie</H1>
        </HeadingContainer>
        <ContentContainer>
          <Table>
            <Tbody>
              <Tr>
                <ThLeft>Kombinácia jazykov</ThLeft>
                <Th><b>Angličtina – nemčina – slovenčina – čeština </b></Th>
              </Tr>
              <Tr>
                <ThLeft>Ponuka</ThLeft>
                <Th><ul>
                  <li>Obchodné rokovania</li>
                  <li>Diplomatické stretnutia</li>
                  <li>Prezentácie, školenia</li>
                  <li>Konferencie</li>
                  <li>Rozhovory/interview</li>
                  <li>Tlačové konferencie</li>
                  <li>Zábava , technické</li>
                  <li>Lekárske, policajné</li>
                  <li>Právne</li>
                  <li>Ekonomické</li>
                  <li>Počítačové</li>
                </ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>Druhy tlmočenia</ThLeft>
                <Th><ul>
                  <li>Konzekutívne (po logických úsekoch)</li>
                  <li>Simultánne (tlmočenie v tlmočníckej kabíne, prakticky súčasne s originálom</li>
                  <li>Šušotáž (šepkanie do ucha)</li>
                </ul></Th>
              </Tr>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th><ul><li>Prakticky všetky s výnimkou špeciálnej medicíny</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft>Kvalita tlmočenia</ThLeft>
                <Th><ul><li>V tlmočení mám mnohoročné skúsenosti, vďaka ktorým dokážem pružne reagovať na rôzne situácie, jazykovú kompetenciu, ktorá mi umožňuje vyjadrovať sa presne, entuziazmus, ktorý mi dáva výdrž, a kontakt na sieť iných tlmočníkov, ktorí ma môžu zastúpiť, keď mi napr. časovo kolidujú dve tlmočenia.</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft>Cenník</ThLeft>
                <Th>
                  <ul><li><b>Tlmočenie z nemčiny/angličtiny do slovenčiny/češtiny a naopak</b><br/>30 EUR/hodina</li></ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th>
                  <ul><li><b>Tlmočenie z nemčiny do angličtiny a naopak </b><br/>40 EUR/hodina</li></ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th>
                  <ul><li>Posledná hodina tlmočenia sa počíta ako celá. </li></ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th>
                  <ul><li>Pre tlmočenia mimo Bratislavy sa účtujú cestovné náklady:<br/><p>Doprava vlastným autom 0,33 EUR/km tam aj späť plus prípadné diaľničné známky <b>alebo</b> cena dopravy verejnou dopravou podľa skutočných nákladov plus náhrada stratu času cestovaním − 15 EUR/hodina.</p><br/>
                    Ubytovanie a strava počas tlmočenia mimo Bratislavy idú na náklady zákazníka.</li></ul>
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </ContentContainer>
      </TheCurriculumInnerContainer>
    </TheCurriculumContainer>
  );
};

export default TheInterpreting;
