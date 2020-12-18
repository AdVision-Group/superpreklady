import React from "react";

import {
  TheCompanyContainer,
  TheCompanyInnerContainer,
  HeadingContainer,
  ContentContainer,
  H1,
  Table,
  Tbody,
  Th,
  ThLeft,
  Tr,
    Ul,
  TrSeparator,
  ThSeparator,
} from "./TheComapnyInfo.styled";

const TheCompanyInfo = () => {
  return (
    <TheCompanyContainer>
      <TheCompanyInnerContainer>
        <HeadingContainer>
          <H1>FIREMNÉ ÚDAJE</H1>
        </HeadingContainer>
        <ContentContainer>
          <Table>
            <Tbody>
              <TrSeparator>
                <ThSeparator>Úradný prekladateľ</ThSeparator>
                <ThSeparator />
              </TrSeparator>
              <Tr>
                <ThLeft><Ul><li>Meno prekladateľa</li></Ul></ThLeft>
                <Th>Ing. Pavel Polónyi</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Adresa prekladateľa</li></Ul></ThLeft>
                <Th>Ambroseho 10, 851 02 Bratislava 5</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Mobil</li></Ul></ThLeft>
                <Th>+421 908 72 82 74</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>E-mail</li></Ul></ThLeft>
                <Th><a href="mailto:pavel@superpreklady.sk">pavel@superpreklady.sk</a></Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Evidenčné číslo prekladateľa</li></Ul></ThLeft>
                <Th>
                  970952, vymenovaný Ministerstvom spravodlivosti SR; odbor: slovenský jazyk – anglický jazyk – nemecký jazyk
                </Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>IČ DPH</li></Ul></ThLeft>
                <Th>Nie som platcom DPH</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Banka</li></Ul></ThLeft>
                <Th>Tatrabanka, a. s., Hodžovo nám. 3, 811 06 Bratislava 1</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Číslo účtu</li></Ul></ThLeft>
                <Th>262 1700 981/1100</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Swift (BIC) kód</li></Ul></ThLeft>
                <Th>TATR SK BX</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>IBAN</li></Ul></ThLeft>
                <Th>SK81 1100 0000 0026 2170 0981</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator>s.r.o.</ThSeparator>
                <ThSeparator />
              </TrSeparator>
              <Tr>
                <ThLeft><Ul><li>Meno firmy</li></Ul></ThLeft>
                <Th>Superpreklady, s. r. o.</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Adresa firmy</li></Ul></ThLeft>
                <Th>Ambroseho 10, 851 02 Bratislava 5</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Mobil</li></Ul></ThLeft>
                <Th>+421 908 72 82 74</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>E-mail</li></Ul></ThLeft>
                <Th><a href="mailto:pavel@superpreklady.sk">pavel@superpreklady.sk</a></Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>IČO</li></Ul></ThLeft>
                <Th>36 660 809</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>DIČ</li></Ul></ThLeft>
                <Th>2022223808</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>IČ DPH</li></Ul></ThLeft>
                <Th>SK2022223808</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Obch. register</li></Ul></ThLeft>
                <Th>
                  Spoločnosť je zapísaná v Obchodnom registri Okresného súdu Bratislava I, oddiel: Sro, vložka č.: 41768/B
                </Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Banka</li></Ul></ThLeft>
                <Th>Tatrabanka, a. s., Hodžovo nám. 3, 811 06 Bratislava 1</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Číslo účtu</li></Ul></ThLeft>
                <Th>262 4120 237/1100</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Swift (BIC) kód</li></Ul></ThLeft>
                <Th>TATR SK BX</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li></li></Ul>IBAN</ThLeft>
                <Th>SK66 1100 0000 0026 2412 0237</Th>
              </Tr>
              <TrSeparator>
                <ThSeparator>Živnosť</ThSeparator>
                <ThSeparator />
              </TrSeparator>
              <Tr>
                <ThLeft><Ul><li>Meno firmy</li></Ul></ThLeft>
                <Th>Ing. Pavel Polóny</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Adresa firmy</li></Ul></ThLeft>
                <Th>Ambroseho 10, 851 02 Bratislava 5</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Mobil</li></Ul></ThLeft>
                <Th>+421 908 72 82 74</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>E-mail</li></Ul></ThLeft>
                <Th><a href="mailto:pavel@superpreklady.sk">pavel@superpreklady.sk</a></Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>IČO</li></Ul></ThLeft>
                <Th>40 221 491</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>DIČ</li></Ul></ThLeft>
                <Th>1025741255</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>IČ DPH</li></Ul></ThLeft>
                <Th>Nie som platcom DPH.</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Živnost. oprávnenie</li></Ul></ThLeft>
                <Th>Sp. č. ŽO −- 2002/02701/00002, reg. č. 1130/2002</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Banka</li></Ul></ThLeft>
                <Th>Tatrabanka, a. s., Hodžovo nám. 3, 811 06 Bratislava 1</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Číslo účtu</li></Ul></ThLeft>
                <Th>262 1700 981/1100</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>Swift (BIC) kód</li></Ul></ThLeft>
                <Th>TATR SK BX</Th>
              </Tr>
              <Tr>
                <ThLeft><Ul><li>IBAN</li></Ul></ThLeft>
                <Th>SK81 1100 0000 0026 2170 0981</Th>
              </Tr>
            </Tbody>
          </Table>
        </ContentContainer>
      </TheCompanyInnerContainer>
    </TheCompanyContainer>
  );
};

export default TheCompanyInfo;
