import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  AboutContainer,
  AboutInnerContainer,
  AboutLeftContainer,
  AboutRightContainer,
  AboutHeadingContainerTop,
  AboutImgInnerContainer,
  AboutImg,
  AboutRightInnerContainer,
  AboutHeadingContainerMain,
  AboutHeadingContainerSubMain,
  AboutText,
  AboutButton,
  Button,
  H3,
  H1,
  P,
} from "./About.styled";
import AboutImageSource from "../../images/superpreklady-about-image.jpg";

const About = (props) => {

  return (
    <AboutContainer>
      <section
          title="sectionOmne"
          id="sectionOmne"
      />
      <AboutInnerContainer>
        <AboutLeftContainer>
          <AboutImgInnerContainer>
            <AboutImg src={AboutImageSource} alt="mainLogo" />
          </AboutImgInnerContainer>
        </AboutLeftContainer>
        <AboutRightContainer>
          <AboutRightInnerContainer>
            <AboutHeadingContainerTop>
              <H3>O mne</H3>
            </AboutHeadingContainerTop>
            <AboutHeadingContainerMain>
              <H1>Kto som a čo robím</H1>
            </AboutHeadingContainerMain>
            <AboutHeadingContainerSubMain>
              <H3>ING. PAVEL POLÓNYI</H3>
            </AboutHeadingContainerSubMain>
            <AboutText>
              <P>
                Chcel by som byť maliarom. Dal som sa ale na polygrafiu, skôr priemysel než umenie, že je
                praktickejšia na uživenie. Stredná škola v Bratislave, vysoká škola v Lipsku, medzitým rok
                v Austrálii na naučenie sa angličtiny spojený aj s prácou v reštaurácii a potom práca
                v polygrafii v Bratislave a v Kanade. Medzitým polygrafia tak nerastie, ako sa rozvíja internet.</P><P>
                Opäť v Bratislave som sa vrhol na preklady a tlmočenia, po ktorých bol a stále ešte je dopyt
                a kde som roky prežité v zahraničí zúročil. Už som s nimi takmer dvadsať rokov. Počítač
                pomôže, ale prekladateľ nemôže byť hlúpy. Preklad je jednoduchá vec. Treba napísať to, čo je
                v jednom jazyku, gramaticky primerane v tom druhom. To sa dá ale spraviť veľmi rôzne. Ja sa
                to usilujem urobiť vždy úplne najlepšie, ako viem. Zo skúseností to aj vyzerá, že dodávam
                preklady precíznejšie než kolegovia.</P><P>
                Tlmočenia bývajú spontánnejšie. Dá sa pri nich stretnúť veľa zaujímavých ľudí aj dozvedieť
                sa veľa vecí, ale sú aj ľudia, ktorých neuspokojí nikto a nič. Tým sa vyhýbam. Aktuálnu
                politiku v detaile nesledujem, ale dlhodobé trendy áno. Pestujem rekreačný šport, dobrú
                životosprávu a dobré vzťahy. Aj čítam. Mám rád pekné veci. Tvorím fantazijnú záhradu
                v myjavskom kraji. Ak by ste chceli odo mňa niektoré z mojich služieb, alebo sa len o niečom
                pozhovárať, alebo navštíviť záhradu, ozvite sa.
              </P>
            </AboutText>
            <AboutButton>
              <NavLink to="/zivotopis" onClick={() => props.setOutSide(false)}>
                <Button>Životopis</Button>
              </NavLink>
            </AboutButton>
          </AboutRightInnerContainer>
        </AboutRightContainer>
      </AboutInnerContainer>
    </AboutContainer>
  );
};

export default About;


/*

*/
