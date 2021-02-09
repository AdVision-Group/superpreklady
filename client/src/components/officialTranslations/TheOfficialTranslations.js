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

const TheOfficialTranslations = () => {
  return (
    <TheCurriculumContainer>
      <TheCurriculumInnerContainer>
        <HeadingContainer>
          <H1>Úradne overené preklady</H1>
        </HeadingContainer>
        <ContentContainer>
          <Table>
            <Tbody>
              <Tr>
                <ThLeft>Kombinácia jazykov</ThLeft>
                <Th><span><span><b>Angličtina – nemčina – slovenčina</b></span><br/><ul><li>Preklad v maximálnej miere obsahovo aj graficky zodpovedá originálu. Dodržiavam všetky podmienky vyplývajúce zo zákona.</li></ul></span></Th>
              </Tr>
              <Tr>
                <ThLeft>Ponuka </ThLeft>
                <Th>
                  <ul>
                    <li>Vysvedčenia</li>
                    <li>Potvrdenia</li>
                    <li>Certifikáty</li>
                    <li>Zmluvy</li>
                    <li>Lekárske správy</li>
                    <li>Finančné výkazy</li>
                    <li>Technické správy</li>
                    <li>Znalecké posudky</li>
                    <li>Patenty</li>
                  </ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th><ul><li>Technika, právo, ekonomika, medicína</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft>Preberanie podkladov a odovzdávanie hotových úradne overených prekladov</ThLeft>
                <Th><ul><li>Pri úradne overených prekladoch sa originál zväzuje s prekladom. Odporúča sa preto z diplomov, vysvedčení a pod. najprv nechať vyhotoviť úradne overenú kópiu a až tú nechať preložiť.</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th><ul><li>Pokiaľ zákazník pošle podklady vopred, napr. poštou alebo naskenované e-mailom, stačí, keď si príde osobne iba raz nechať zviazať preklad s originálom trikolórou. Som flexibilný na preberanie a odovzdávanie úradne overených prekladov.</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft>Cenník</ThLeft>
                <Th><ul><li><b>Preklad z nemčiny/angličtiny do slovenčiny a naopak  </b><br/>20 EUR/normostrana</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th><ul><li><b>Preklad z nemčiny do angličtiny a naopak</b><br/>26 EUR/normostrana</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th><ul><li>Posledná začatá normostrana sa počíta ako celá.</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th><ul><li>Okamžité vykonanie prekladu − 50 % príplatok.</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th><ul><li>Normostrana je 1 800 znakov vrátane medzislovných medzier.</li></ul></Th>
              </Tr>
              <Tr>
                <ThLeft></ThLeft>
                <Th><ul><li>Cena sa počíta z hotového prekladu, nie z originálu. Preklad môže byť dlhší ako originál: preklad zo slovenčiny do angličtiny je napr. dlhší asi o 10 percent, do nemčiny aj o 30 percent.</li></ul></Th>
              </Tr>
            </Tbody>
          </Table>
        </ContentContainer>
      </TheCurriculumInnerContainer>
    </TheCurriculumContainer>
  );
};

export default TheOfficialTranslations;

/*
*
*      <TrSeparator>
                <ThSeparator/>
              </TrSeparator>*/