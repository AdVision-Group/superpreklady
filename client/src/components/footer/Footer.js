import React from "react";
import {FooterContainer,
    FooterInnerContainer,
    RowOneContainer,
    LogoContainer,
    PhoneContainer,
    IconContainer,
    PhoneContactContainer,
    Number,
    Content,
    RowTwoContainer,
    AboutContainerModule,
    Heading,
    Separator,
    AboutContent,
    SocialContainer,
    SocialIcon,
    ScopeContainerModule,
    Menu,
    ContactContainerModule,
    ContactContent


} from "./Footer.Styled"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInnerContainer>
                <RowOneContainer>
                    <LogoContainer>

                    </LogoContainer>
                    <PhoneContainer>
                        <IconContainer>

                        </IconContainer>
                        <PhoneContactContainer>
                            <Number>
                                <h1>+421908728787</h1>
                            </Number>
                            <Content>
                                <p>Som vam k dispozicii neustale</p>
                            </Content>
                        </PhoneContactContainer>
                    </PhoneContainer>
                </RowOneContainer>
                <RowTwoContainer>
                    <AboutContainerModule>
                        <Heading>
                            <h3>O MNE</h3>
                        </Heading>
                        <Separator>

                        </Separator>
                        <AboutContent>
                            <p> five centuries, but also the leap into electronic typesetting, remaining essenti</p>
                        </AboutContent>
                        <SocialContainer>
                            <SocialIcon>
                                <p>Facebook</p>
                            </SocialIcon>
                            <SocialIcon>
                                <p>Twitter</p>
                            </SocialIcon>
                            <SocialIcon>
                                <p>Google+</p>
                            </SocialIcon>
                        </SocialContainer>
                    </AboutContainerModule>
                    <ScopeContainerModule>
                        <Heading>
                            <h3>OBSAH</h3>
                        </Heading>
                        <Separator>

                        </Separator>
                        <Menu>
                            <ul>
                                <li>Domov</li>
                                <li>Sluzby</li>
                                <li>Cennik</li>
                                <li>O mne</li>
                                <li>Kontatk</li>

                            </ul>
                        </Menu>
                    </ScopeContainerModule>
                    <ContactContainerModule>
                        <Heading>
                            KONTAKT
                        </Heading>
                        <Separator>

                        </Separator>
                        <ContactContent>
                            <p>
                                five centuries, but also the leap into electronic typesetting, remaining essenti
                            </p>
                        </ContactContent>
                    </ContactContainerModule>

                </RowTwoContainer>

            </FooterInnerContainer>
        </FooterContainer>

    )
}

export default Footer