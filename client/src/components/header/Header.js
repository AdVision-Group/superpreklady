import React from "react"
import {HeaderMainDiv,
    LogoContainer,
    MenuContainer,
    ButtonContainer,
    LogoInnerContainer,
    LogoImg
} from "./Header.styled"
import Menu from "./Menu"
import Logo from  "../../images/superpreklady-logo.png"

const Header = () => {
    return (
        <HeaderMainDiv>
            <LogoContainer>
                <LogoInnerContainer>
                    <LogoImg src={Logo}
                          alt="mainLogo"/>
                </LogoInnerContainer>
            </LogoContainer>
            <MenuContainer>
                <Menu/>
            </MenuContainer>
            <ButtonContainer>
                <button>Hello</button>
            </ButtonContainer>
        </HeaderMainDiv>
    )
}

export default Header