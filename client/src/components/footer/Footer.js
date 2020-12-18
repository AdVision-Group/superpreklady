import React from "react";
import { NavLink } from "react-router-dom";
import {
  FooterContainer,
  FooterInnerContainer,
  RowTwoContainer,
  RowThreeContainer,
  AboutContainerModule,
  Heading,
  AboutContent,
  ScopeContainerModule,
  Menu,
  ContactContainerModule,
  ContactContent,
  H1F,
  ThirdRowParagraph,
  PF,
} from "./Footer.Styled";


const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <RowTwoContainer>
          <AboutContainerModule>
            <Heading>
              <H1F>O mne</H1F>
            </Heading>
            <AboutContent>
              <PF>
                <span>
                  Chcel by som byť maliarom.
                  <br /> Dal som sa ale na polygrafiu,
                  <br /> skôr priemysel{" "}
                </span>
              </PF>
            </AboutContent>
          </AboutContainerModule>
          <ScopeContainerModule>
            <Heading>
              <H1F>Sitemap</H1F>
            </Heading>
            <Menu>
              <NavLink to='/'>
                <span>Domov</span>
              </NavLink>
              <NavLink to='/zivotopis'>
                <span>Životpis</span>
              </NavLink>
              <NavLink to='/referencie'>
                <span>Referencie</span>
              </NavLink>
              <NavLink to='/kontakt'>
                <span>Kontkat</span>
              </NavLink>
            </Menu>
          </ScopeContainerModule>
          <ScopeContainerModule>
            <Heading>
              <H1F>Služby</H1F>
            </Heading>
            <Menu>
             <NavLink to='/uradneoverenepreklady'>
               <span>Úradné preklady</span>
             </NavLink>
              <NavLink to='/neuradneoverenepreklady'>
                <span>Neúradné preklady</span>
              </NavLink>
              <NavLink to='/tlmocenie'>
                <span>Tlmočenie</span>
              </NavLink>
            </Menu>
          </ScopeContainerModule>
          <ContactContainerModule>
            <Heading>
              <H1F>Kontakt</H1F>
            </Heading>
            <ContactContent>
              <PF>
                <span>Ambroseho 10, 851 02 Bratislava 5</span>
                <br />
                <span>+421 908 82 74</span>
                <br />
                <span>pavel@superpreklady.sk</span>
              </PF>
            </ContactContent>
          </ContactContainerModule>
        </RowTwoContainer>
        <RowThreeContainer>
          <ThirdRowParagraph><span>© 2020 Superpreklady.sk | Všetky práva vyhradené</span></ThirdRowParagraph>
        </RowThreeContainer>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default Footer;
