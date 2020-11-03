import React from "react";
import {
  TheCurriculumContainer,
  TheCurriculumInnerContainer,
  HeadingContainer,
  ContentContainer,
  H1,
  SubHeadingH3,
    H3,
  Table,
  Tbody,
  Th,
  ThLeft,
  Tr,
  TrSeparator,
  ThSeparator,
} from "../translationsStyle/TheTranslations.styled";

const TheOfficialTranslations = () => {
  return (
    <TheCurriculumContainer>
      <TheCurriculumInnerContainer>
        <HeadingContainer>
          <H1>Úradne overené preklady</H1>
        </HeadingContainer>
        <SubHeadingH3>
          <H3>Preklad v maximálnej miere obsahovo aj graficky zodpovedá originálu. Dodržiavam všetky podmienky vyplívajúce zo zákona.</H3>
        </SubHeadingH3>
        <ContentContainer>
          <Table>
            <Tbody>
              <Tr>
                <ThLeft>Kombinácia jazykov</ThLeft>
                <Th>Angličtina, nemčina, slovenčina</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Ponuka </ThLeft>
                <Th>
                  Vysvedčenia<br/>
                  Potvrdenia<br/>
                  Certifikáty<br/>
                  Zmluvy<br/>
                  Lekárske správy<br/>
                  Finančné výkazy<br/>
                  Technické správy<br/>
                  Znalecké posudky<br/>
                  Patenty<br/></Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Odbory</ThLeft>
                <Th>Technika, právo, ekonomika, medicína </Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Preberanie podkladov a odovzdanie hotových úradne overených prekladov</ThLeft>
                <Th>Pri úradne overených prekladoch sa originál zväzuje s prekladom. Odporúča sa preto z diplomov, vysvedčení a pod. najprv nechať vyhotoviť úradne overenú kópiu a až tú nechať preložiť. Pokiaľ zákazník pošle podklady vopred, napr. poštou alebo naskenované e-mailom, stačí, keď si príde osobne iba raz nechať si zviazať preklad s originálom trikolórou. Som flexibilný na preberanie a odovzdávanie úradne overených prekladov.</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator/>
              </TrSeparator>
              <Tr>
                <ThLeft>Cenník</ThLeft>
                <Th>
                  preklad z nemčiny/angličtiny do slovenčiny a naopak − 20 EUR/normostrana<br/>
                  preklad z nemčiny do angličtiny a naopak –26 EUR/normostrana<br/>
                  Posledná začatá normostrana sa počíta ako celá. Okamžité vykonanie prekladu − 50% príplatok. Normostrana je 1 800 znakov vrátane medzislovných medzier. Cena sa počíta z hotového prekladu, nie z originálu. Preklad môže byť dlhší ako originál: preklad zo slovenčiny do angličtiny je napr. dlhší asi o 10 percent, do nemčiny aj o 30 percent.</Th>
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

export default TheOfficialTranslations;
