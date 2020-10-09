import React from "react";
import {
    TheCurriculumContainer,
    TheCurriculumInnerContainer,
    HeadingContainer,
    ContentContainer,
    H1,
    Table,
    Tbody,
    Th,
    ThLeft,
    Tr,
    TrSeparator,
    ThSearator

} from "./TheCurriculum.styled"




const TheCurriculum = () => {
    return (
        <TheCurriculumContainer>
            <TheCurriculumInnerContainer>
                <HeadingContainer>
                    <H1>ŽIVOTOPIS</H1>
                </HeadingContainer>
                <ContentContainer>
                    <Table>
                        <Tbody>
                            <Tr>
                                <ThLeft>Meno</ThLeft>
                                <Th>Ing. Pavel Polónyi</Th>
                            </Tr>
                            <Tr>
                                <ThLeft>Adresa</ThLeft>
                                <Th>Ambroseho 10, 851 02 Bratislava 5</Th>
                            </Tr>
                            <Tr>
                                <ThLeft>Mobil</ThLeft>
                                <Th>+421 908 72 8 2 74</Th>
                            </Tr>
                            <Tr>
                                <ThLeft>E-mail</ThLeft>
                                <Th>pavel@superpreklady.sk</Th>
                            </Tr>
                            <Tr>
                                <ThLeft>Webová Stránka</ThLeft>
                                <Th>www.superpreklady.sk</Th>
                            </Tr>
                            <Tr>
                                <ThLeft>Dátum narodenia</ThLeft>
                                <Th>03.10.1968</Th>
                            </Tr>
                            <TrSeparator>
                                <ThSearator>Pracovné skúsenosti</ThSearator>
                            </TrSeparator>
                            <Tr>
                                <ThLeft>2009</ThLeft>
                                <Th>
                                    <p><span><b>ING. PAVEL POLÓNYI</b></span><br/></p>
                                    <p><span>Ambroseho 10, 851 02 Bratislava 5</span><br/></p>
                                    <p><span>• Prekladateľ vymenovaný Ministerstvom spravodlivosti SR. ; oodbor: slovenský
                                        jazyk – anglický jazyk – nnemecký jazyk.</span></p>
                                    <p><span>Úradne overené preklady.</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>2006</ThLeft>
                                <Th>
                                    <p><span><b>SUPERPREKLADY, s. r. o.</b></span><br/></p>
                                    <p><span>Ambroseho 10, 851 02 Bratislava 5</span><br/></p>
                                    <p><span>• Vlastná prekladateľská a sprostredkovateľská firma</span></p>
                                    <p><span>Okrem prekladov a tlmočení aj prieskumy trhu a hľadanie pracovníkov a marketing
                                            v nových krajinách, kam zákazníci posúvajú svoje obchodné aktivity.</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>2002</ThLeft>
                                <Th>
                                    <p><span><b>ING. PAVEL POLÓNYI</b></span><br/></p>
                                    <p><span>Ambroseho 10, 851 02 Bratislava 5</span><br/></p>
                                    <p><span>• Živnosť, prekladateľ a tlmočník v kombinácii jazykov: angličtina – nemčina –
                                    slovenčina – čeština</span></p>
                                    <p><span>Technické, právnické a ekonomické preklady a tlmočenia.</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>2000-2001</ThLeft>
                                <Th>
                                    <p><span><b>ALLPRINT AINSWORTH ASSOCIATES INC.</b></span><br/></p>
                                    <p><span>65 Hanson Avenue, Kitchener, Ontario, Canada N2C 2H6</span><br/></p>
                                    <p><span>• Tlačiareň pre tlač komerčných tlačovín</span></p>
                                    <p><span>• Kalkulant a koordinátor výroby</span></p>
                                    <p><span>Vyhotovovanie cenových kalkulácií pre komerčnú tlač. Koordinácia výroby vybraných
zákaziek v tejto tlačiarni so 110 zamestnancami. Objednávky od externých dodávateľov.
Vytvorenie kalkulačného programu na výpočet ceny tlače časopisov</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>1999-2000</ThLeft>
                                <Th>
                                    <p><span><b>PRINTER´S PARTS & EQUIPMENT</b></span><br/></p>
                                    <p><span>60 Howden Road, Scarborough, Ontario, Canada M1R 3E4</span><br/></p>
                                    <p><span>• Obchodná firma s tlačovými zariadeniami a materiálmi</span></p>
                                    <p><span>• Asistent pre administratívu a obchod</span></p>
                                    <p><span>Marketing a predaj. Predstavovanie tejto obchodnej firmy zákazníkom v oblasti Toronta
osobnými návštevami, mailingovými kampaňami, výrobou webovej stránky. Predaj
náhradných dielov a materiálov na tlač.</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>1997-1998</ThLeft>
                                <Th>
                                    <p><span><b>SLOVART-PRINT, s. r. o.</b></span><br/></p>
                                    <p><span>Pekná cesta 6, 834 03 Bratislava 34</span><br/></p>
                                    <p><span>• Spoločnosť na sprostredkovanie tlače</span></p>
                                    <p><span>• Výkonný riaditeľ, konateľ</span></p>
                                    <p><span>Manažér spoločnosti na sprostredkovanie tlače s 10 zamestnancami.
Najímanie a motivovanie pracovníkov, obchodná agenda, starostlivosť o softvér,
účtovníctvo a cash-flow.</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>1995-1997</ThLeft>
                                <Th>
                                    <p><span><b>SLOVENSKÁ GRAFIA, a. s.</b></span><br/></p>
                                    <p><span>Pekná cesta 6, 834 03 Bratislava 34</span><br/></p>
                                    <p><span>• Tlačiareň na tlač kníh a časopisov</span></p>
                                    <p><span>• Asistent pre marketing</span></p>
                                    <p><span>Marketing v jednej z najväčších slovenských tlačiarní. Cenové kalkulácie časopisov a
obchodné rokovania. Zákaznícky servis pre určitých zákazníkov. Predaj tlače kníh a
časopisov zahraničným a domácim zákazníkom.</span></p>
                                </Th>
                            </Tr>
                            <TrSeparator>
                                <ThSearator>Vzdelanie</ThSearator>
                            </TrSeparator>
                            <Tr>
                                <ThLeft>1999 -- 2000</ThLeft>
                                <Th>
                                    <p><span><b>York College of Information Technologies, Toronto, Kanada</b></span><br/></p>
                                    <p><span>• Programmer Analyst Diploma</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>1994 -- 1995</ThLeft>
                                <Th>
                                    <p><span><b>Milner International College of English, Perth, Austrália</b></span><br/></p>
                                    <p><span>• Jazykový kurz, doplnený cambridgeskými certifikátmi</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>1988 -– 1994</ThLeft>
                                <Th>
                                    <p><span><b>Vysoká škola technická, Polygrafická technika, Leipzig, Nemecko</b></span><br/></p>
                                    <p><span>• Diplom (Dipl. -– Ing.)</span></p>
                                </Th>
                            </Tr>
                            <TrSeparator>
                                <ThSearator>Jazykové certifikáty</ThSearator>
                            </TrSeparator>
                            <Tr>
                                <ThLeft>Angličtina</ThLeft>
                                <Th>
                                    <p><span><b>• Cambridge First Certificate in English (B)</b></span></p>
                                    <p><span>• Cambridge Certificate in Advanced English (C)</span></p>
                                    <p><span>• Cambridge Certificate of Proficiency (C)</span></p>
                                    <p><span>• IELTS, skóre 7,5 (1,0 = nepoužívateľ angličtiny, 9,0 = expertný
používateľ angličtiny)</span></p>
                                    <p><span>• štátna jazyková skúška z anglického jazyka anglického (Stupeň
stupeň hodnotenia: dobrý)</span></p>
                                </Th>
                            </Tr>
                            <Tr>
                                <ThLeft>Nemčina</ThLeft>
                                <Th>
                                    <p><span><b>• štátna jazyková skúška z nemeckého jazyka nemeckého (Stupeň
stupeň hodnotenia: výborný)</b></span></p>
                                </Th>
                            </Tr>
                        </Tbody>
                    </Table>
                </ContentContainer>
            </TheCurriculumInnerContainer>
        </TheCurriculumContainer>
    );
};

export default TheCurriculum;
