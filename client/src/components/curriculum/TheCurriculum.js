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
} from "./TheCurriculum.styled";

const TheCurriculum = () => {
  return (
    <TheCurriculumContainer>
      <TheCurriculumInnerContainer>
        <HeadingContainer>
          <H1>Životopis</H1>
        </HeadingContainer>
        <ContentContainer>
          <Table>
            <Tbody>
              <Tr>
                <ThLeft>Meno</ThLeft>
                <Th>Ing. Pavel Polónyi</Th>
              </Tr>
              <Tr>
                <ThLeft>Adresa</ThLeft>
                <Th>Ambroseho 10, 851 02 Bratislava 5</Th>
              </Tr>
              <Tr>
                <ThLeft>Mobil</ThLeft>
                <Th>+421 908 728 274</Th>
              </Tr>
              <Tr>
                <ThLeft>E-mail</ThLeft>
                <Th>pavel@superpreklady.sk</Th>
              </Tr>
              <Tr>
                <ThLeft>Webová Stránka</ThLeft>
                <Th>www.superpreklady.sk</Th>
              </Tr>
              <Tr>
                <ThLeft>Dátum narodenia</ThLeft>
                <Th>03.10.1968</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator>Pracovné skúsenosti</ThSeparator>
                <ThSeparator />
              </TrSeparator>
              <Tr>
                <ThLeft>2009 -></ThLeft>
                <Th>
                    <span><b>ING. PAVEL POLÓNYI</b><br/>Ambroseho 10, 851 02 Bratislava 5</span>
                  <ul><li>Prekladateľ vymenovaný Ministerstvom spravodlivosti SR; odbor: slovenský jazyk – anglický jazyk – nemecký jazyk</li></ul>
                  <p>
                    <span>Úradne overené preklady</span>
                  </p>

                </Th>
              </Tr>
              <Tr>
                <ThLeft>2006 -></ThLeft>
                <Th>
                    <span><b>SUPERPREKLADY, s. r. o.</b><br/>Ambroseho 10, 851 02 Bratislava 5</span>
                  <ul><li>Vlastná prekladateľská a sprostredkovateľská firma</li></ul>

                  <p>
                    <span>
                      Okrem prekladov a tlmočení aj prieskumy trhu a hľadanie pracovníkov a marketing v nových krajinách, kam zákazníci posúvajú svoje obchodné aktivity.
                    </span>
                  </p>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>2002 -></ThLeft>
                <Th>
                    <span><b>ING. PAVEL POLÓNYI</b><br/>Ambroseho 10, 851 02 Bratislava 5</span>
                  <ul><li>
                    Živnosť, prekladateľ a tlmočník v kombinácii jazykov: angličtina – nemčina – slovenčina – čeština
                  </li></ul>
                  <p>
                    <span>
                      Technické, právnické a ekonomické preklady a tlmočenia.
                    </span>
                  </p>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>2000 – 2001</ThLeft>
                <Th>
                  <span><b>ALLPRINT AINSWORTH ASSOCIATES INC.</b><br/>65 Hanson Avenue, Kitchener, Ontario, Canada N2C 2H6 </span>
                  <ul>
                    <li>Tlačiareň pre tlač komerčných tlačovín</li>
                    <li>Kalkulant a koordinátor výroby</li>
                  </ul>
                  <p>
                    <span>
                      Vyhotovovanie cenových kalkulácií pre komerčnú tlač. Koordinácia výroby vybraných zákaziek v tejto tlačiarni so 110 zamestnancami. Objednávky od externých dodávateľov. Vytvorenie kalkulačného programu na výpočet ceny tlače časopisov.
                    </span>
                  </p>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>1999 – 2000</ThLeft>
                <Th>
                  <span><b>PRINTER´S PARTS & EQUIPMENT</b><br/>60 Howden Road, Scarborough, Ontario, Canada M1R 3E4</span>
                  <ul>
                    <li>Obchodná firma s tlačovými zariadeniami a materiálmi</li>
                    <li>Asistent pre administratívu a obchod</li>
                  </ul>
                  <p>
                    <span>
                      Marketing a predaj. Predstavovanie tejto obchodnej firmy zákazníkom v oblasti Toronta osobnými návštevami, mailingovými kampaňami, výrobou webovej stránky. Predaj náhradných dielov a materiálov na tlač.
                    </span>
                  </p>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>1997 – 1998</ThLeft>
                <Th>
                  <span><b>SLOVART-PRINT, s. r. o.</b><br/>Pekná cesta 6, 834 03 Bratislava 34 </span>
                  <ul>
                    <li>Spoločnosť na sprostredkovanie tlače </li>
                    <li>Výkonný riaditeľ, konateľ </li>
                  </ul>
                  <p>
                    <span>
                       Manažér spoločnosti na sprostredkovanie tlače s 10 zamestnancami.
Najímanie a motivovanie pracovníkov, obchodná agenda, starostlivosť o softvér, účtovníctvo a cash-flow.
                    </span>
                  </p>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>1995 – 1997</ThLeft>
                <Th>
                  <span><b>SLOVENSKÁ GRAFIA, a. s. </b><br/>Pekná cesta 6, 834 03 Bratislava 34</span>
                  <ul>
                    <li>Tlačiareň na tlač kníh a časopisov </li>
                    <li>Asistent pre marketing </li>
                  </ul>
                  <p>
                    <span>
                       Marketing v jednej z najväčších slovenských tlačiarní. Cenové kalkulácie časopisov a obchodné rokovania. Zákaznícky servis pre určitých zákazníkov. Predaj tlače kníh a časopisov zahraničným a domácim zákazníkom.
                    </span>
                  </p>
                </Th>
              </Tr>
              <TrSeparator>
                <ThSeparator>Vzdelanie</ThSeparator>
                <ThSeparator />
              </TrSeparator>
              <Tr>
                <ThLeft>1999 – 2000</ThLeft>
                <Th>
                  <span><b>York College of Information Technologies</b><br/>Toronto, Kanada</span>
                  <ul>
                    <li>Programmer Analyst Diploma</li>
                  </ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>1994 – 1995</ThLeft>
                <Th>
                  <span><b>Milner International College of English</b><br/>Perth, Austrália</span>
                  <ul>
                    <li>Jazykový kurz doplnený cambridgeskými certifikátmi</li>
                  </ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>1988 – 1994</ThLeft>
                <Th>
                  <span><b>Vysoká škola technická</b><br/>Polygrafická technika, Leipzig, Nemecko</span>
                  <ul>
                    <li>Diplom (Dipl. – Ing.)</li>
                  </ul>
                </Th>
              </Tr>
              <TrSeparator>
                <ThSeparator>Jazykové certifikáty</ThSeparator>
                <ThSeparator />
              </TrSeparator>
              <Tr>
                <ThLeft>Angličtina</ThLeft>
                <Th>
                 <ul>
                   <li>Cambridge First Certificate in English (B)</li>
                   <li>Cambridge Certificate in Advanced English (C)</li>
                   <li>Cambridge Certificate of Proficiency (C)</li>
                   <li>IELTS, skóre 7,5 (1,0 = nepoužívateľ angličtiny, 9,0 = expertný používateľ angličtiny)</li>
                   <li>Štátna jazyková skúška z anglického jazyka (stupeň hodnotenia: dobrý)</li>
                 </ul>
                </Th>
              </Tr>
              <Tr>
                <ThLeft>Nemčina</ThLeft>
                <Th>
                  <ul>
                    <li>Štátna jazyková skúška z nemeckého jazyka (stupeň hodnotenia: výborný)</li>
                  </ul>
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </ContentContainer>
      </TheCurriculumInnerContainer>
    </TheCurriculumContainer>
  );
};

export default TheCurriculum;
