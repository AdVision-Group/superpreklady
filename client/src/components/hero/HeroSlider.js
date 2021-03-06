import React from "react";
import { NavLink } from "react-router-dom";
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


const HeroSlider = () => {
  return (
    <HeroSliderContainer>
      <HeroSliderInnerContainer>
        <HeroLeftContainer>
          <HeroHeadingContainer>
            <H1>
              <b>
                O mne
              </b>
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
