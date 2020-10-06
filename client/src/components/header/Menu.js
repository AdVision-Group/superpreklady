import React from "react";
import {MenuMainDiv,
    MenuInnerContainer,
    MenuFirstLineContainer,
    MenuNumberContainer,
    MenuEmailContainer,
    MenuSocialContainer,
    MenuSecondLineContainer,
    MenuInnerNavigationContainer,
    MenuItem

} from "./Menu.Styled"

const Menu = () => {
    return (
        <MenuMainDiv>
            <MenuInnerContainer>
                <MenuFirstLineContainer>
                    <MenuNumberContainer>
                        <p>Number : 0910780445</p>
                    </MenuNumberContainer>
                    <MenuEmailContainer>
                        <p>Email : sadecky.marek@gmail.com</p>
                    </MenuEmailContainer>
                    <MenuSocialContainer>
                        <p>Face, Twitter, Google+</p>
                    </MenuSocialContainer>
                </MenuFirstLineContainer>
                <MenuSecondLineContainer>
                    <MenuInnerNavigationContainer>
                        <MenuItem>Domov</MenuItem>
                        <MenuItem>Uradne Preklady</MenuItem>
                        <MenuItem>Neuradne Preklady</MenuItem>
                        <MenuItem>Tlmocenie</MenuItem>
                        <MenuItem>O mne</MenuItem>
                        <MenuItem>Kontakt</MenuItem>
                    </MenuInnerNavigationContainer>

                </MenuSecondLineContainer>
            </MenuInnerContainer>

        </MenuMainDiv>
    )
}

export default Menu