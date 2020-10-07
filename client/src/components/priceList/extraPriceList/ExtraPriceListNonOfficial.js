import React from "react"
import {
    Content,
    ContentCardContainer,
    H1,
    H3, Heading,
    MainHeading, Price,
    PriceListContainer,
    PriceListContentContainer,
    PriceListHeadingContainer, SecondaryHeading,
    SecondHeading
} from "../PriceList.styled";

const ExtraPriceListNonOfficial = () => {
    return (
        <PriceListContainer>
            <PriceListHeadingContainer>
                <MainHeading>
                    <H3>
                        CENNÍK
                    </H3>
                </MainHeading>
                <SecondHeading>
                    <H1>
                        CENNÍK NEURADNYCH PREKLADOV
                    </H1>
                </SecondHeading>

            </PriceListHeadingContainer>
            <PriceListContentContainer>
                <ContentCardContainer>
                    <Heading>
                        <H3>PREKLAD</H3>
                    </Heading>
                    <SecondaryHeading>
                        <H1>
                            Z anglictiny/nemciny do slovenciny a naopak
                        </H1>

                    </SecondaryHeading>
                    <Content>
                        <p>
                            centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with deskto
                        </p>
                    </Content>
                    <Price>
                        <h1>
                            457E / NORMOSTRANA
                        </h1>

                    </Price>

                </ContentCardContainer>
                <ContentCardContainer>
                    <Heading>
                        <H3>PREKLAD</H3>
                    </Heading>
                    <SecondaryHeading>
                        <H1>
                            Z anglictiny do nemciny a naopak
                        </H1>

                    </SecondaryHeading>
                    <Content>
                        <p>
                            centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with deskto
                        </p>
                    </Content>
                    <Price>
                        <h1>
                            1154E / NORMOSTRANA
                        </h1>

                    </Price>

                </ContentCardContainer>
            </PriceListContentContainer>
        </PriceListContainer>
    )
}

export default ExtraPriceListNonOfficial