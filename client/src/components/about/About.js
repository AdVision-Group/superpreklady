import React from "react";
import {AboutContainer,
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
    AboutButton
} from "./About.styled"
import AboutImageSource from "../../images/superpreklady-about-image.jpg"


const About = () => {
    return (
        <AboutContainer>
            <AboutInnerContainer>
                <AboutLeftContainer>
                    <AboutImgInnerContainer>
                        <AboutImg src={AboutImageSource}
                                 alt="mainLogo"/>

                    </AboutImgInnerContainer>
                </AboutLeftContainer>
                <AboutRightContainer>
                    <AboutRightInnerContainer>
                        <AboutHeadingContainerTop>
                            <h3>O MNE</h3>
                        </AboutHeadingContainerTop>
                        <AboutHeadingContainerMain>
                            <h1>KTO SOM A CO ROBIM</h1>
                        </AboutHeadingContainerMain>
                        <AboutHeadingContainerSubMain>
                            <h3>ING. PAVEL POLONYI</h3>
                        </AboutHeadingContainerSubMain>
                        <AboutText>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </AboutText>
                        <AboutButton>
                            <button>Zivotopis</button>
                        </AboutButton>

                    </AboutRightInnerContainer>
                </AboutRightContainer>
            </AboutInnerContainer>
        </AboutContainer>

    )
}

export default About