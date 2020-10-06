import React from "react";
import {HeroSliderContainer,
    HeroSliderInnerContainer,
    HeroLeftContainer,
    HeroRightContainer,
    HeroHeadingContainer,
    HeroTextContainer,
    HeroButtonContainer,
    HeroImg

} from "./HeroSlider.styled"
import HeroImageSource from "../../images/superpreklady-icon-home.png";

const HeroSlider = () => {
    return (
        <HeroSliderContainer>
            <HeroSliderInnerContainer>
                <HeroLeftContainer>
                    <HeroHeadingContainer>
                      <h1>DODAM VAM NAJVYSSIU<br/>KVALITU PREKLADOV</h1>
                    </HeroHeadingContainer>
                    <HeroTextContainer>
                        <h3>
                            Moja prekldatelska ponuka Vam zabezpeci<br/>
                            vsetko,co budete potrebovat
                        </h3>
                    </HeroTextContainer>
                    <HeroButtonContainer>
                        <button>
                            Hello
                        </button>

                    </HeroButtonContainer>

                </HeroLeftContainer>
                <HeroRightContainer>
                        <HeroImg src={HeroImageSource}
                                 alt="mainLogo"
                        />

                </HeroRightContainer>
            </HeroSliderInnerContainer>
        </HeroSliderContainer>

    )
}

export default HeroSlider