import React from "react";
import { NavLink } from 'react-router-dom'
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
                        <p><span style={{color:"#e4e4e4e0"}}>Telefón:</span> +421 908 728 274</p>
                    </MenuNumberContainer>
                    <MenuEmailContainer>
                        <p><span style={{color:"#e4e4e4e0"}}>E-mail:</span> pavel@superpreklady.sk</p>
                    </MenuEmailContainer>
                    <MenuSocialContainer>
                        <p>Face, Twitter, Google+</p>
                    </MenuSocialContainer>
                </MenuFirstLineContainer>
                <MenuSecondLineContainer>
                    <MenuInnerNavigationContainer>
                        <MenuItem>DOMOV</MenuItem>
                        <MenuItem>ÚRADNÉ PREKLADY</MenuItem>
                        <MenuItem>NEÚRADNÉ PREKLADY</MenuItem>
                        <MenuItem>TLMOČENIE</MenuItem>
                        <MenuItem>O MNE</MenuItem>
                        <MenuItem>
                            <NavLink to="/kontakt">KONTAKT</NavLink>
                        </MenuItem>
                    </MenuInnerNavigationContainer>
                </MenuSecondLineContainer>
            </MenuInnerContainer>
        </MenuMainDiv>
    )
}

export default Menu