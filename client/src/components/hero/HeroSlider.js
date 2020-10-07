import React from "react";
import {
  HeroSliderContainer,
  HeroSliderInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroHeadingContainer,
  HeroTextContainer,
  HeroButtonContainer,
  HeroImg,
  Button,
  H1,
  P,
} from "./HeroSlider.styled";
import HeroImageSource from "../../images/superpreklady-icon-home.png";
import {Link} from "react-scroll";

const HeroSlider = () => {
  return (
    <HeroSliderContainer>
      <HeroSliderInnerContainer>
        <HeroLeftContainer>
          <HeroHeadingContainer>
            <H1>
              DODÁM VÁM NAJVYŠŠIU
              <br />
              KVALITU PREKLADOV
            </H1>
          </HeroHeadingContainer>
          <HeroTextContainer>
            <P>
              Moja prekladateľská ponuka Vám zabezpečí
              <br />
              všetko, čo budete potrebovať
            </P>
          </HeroTextContainer>
          <HeroButtonContainer>
            <Button><Link to="sectionSluzby" smooth={true}>ZISTI VIAC</Link></Button>
          </HeroButtonContainer>
        </HeroLeftContainer>
        <HeroRightContainer>
          <HeroImg src={HeroImageSource} alt="mainLogo" />
        </HeroRightContainer>
      </HeroSliderInnerContainer>
    </HeroSliderContainer>
  );
};

export default HeroSlider;
