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

const About = () => {
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
              <H3>O MNE</H3>
            </AboutHeadingContainerTop>
            <AboutHeadingContainerMain>
              <H1>KTO SOM A ČO ROBÍM</H1>
            </AboutHeadingContainerMain>
            <AboutHeadingContainerSubMain>
              <H3>ING. PAVEL POLÓNYI</H3>
            </AboutHeadingContainerSubMain>
            <AboutText>
              <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </P>
            </AboutText>
            <AboutButton>
              <NavLink to="/zivotopis">
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
