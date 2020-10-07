import React from "react";
import ExtraPriceListOfficial from "../../priceList/extraPriceList/ExtraPriceListOfficial";

import {
  InfoMainContainer,
  InfoInnerContainer,
  HeadingContainer,
  Heading,
  Separator,
  SubHeading,
  TableContainer,
  Table,
  Tbody,
  Th,
  Tr,
} from "./ExtraInfo.styled";

const ExtraInfoOfficial = () => {
  return (
    <InfoMainContainer>
      <section
          title="sectionUradnePreklady"
          id="sectionUradnePreklady"
      />
      <InfoInnerContainer>
        <HeadingContainer>
          <Heading>
            <h1>ÚRADNÉ OVERENÉ PREKLADY</h1>
          </Heading>
          <Separator />
          <SubHeading>
            <h3>
              Preklad v maximálnej miere obsahovo aj graficky zodpovedá originálu.
              <br /> Dodržiavam všetky podmieky vyplivajúce zo zákona.
            </h3>
          </SubHeading>
        </HeadingContainer>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr>
                <Th>Kombinácia jazykov</Th>
                <Th>angličtina, nemčina, slovenčina</Th>
              </Tr>
              <Tr>
                <Th>Odbory</Th>
                <Th>technika, právo, slovenčina</Th>
              </Tr>
              <Tr>
                <Th>Ponuka</Th>
                <Th>
                  Vysvedčenie, potvrdenia, certifikáty, zmluvy, lekárske správy,
                  finančné výkazy, technické správy, znalecké posudky, patenty
                </Th>
              </Tr>
              <Tr>
                <Th>
                  Preberanie podkladov a odovzdavanie hotových úradne overených
                  prekladov
                </Th>
                <Th>
                  u vulputate risus egestas vitae. Nam mauris eros, tincidunt et
                  velit in, condimentum sagittis neque. Donec eget eleifend
                  lacus. Suspendisse in consectetur orci, id dictum turpis.
                  Aenean quis lacus nec sem consectetur ultrices ut eget ante.
                  Integer mollis cursus lacus, ac vehicula est finibus ac. Orci
                  vari
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </InfoInnerContainer>
      <div>
        <ExtraPriceListOfficial />
      </div>
    </InfoMainContainer>
  );
};

export default ExtraInfoOfficial;
