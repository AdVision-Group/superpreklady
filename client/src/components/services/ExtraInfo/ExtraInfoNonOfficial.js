import React from "react";
import {
  Heading,
  HeadingContainer,
  InfoInnerContainer,
  InfoMainContainer,
  Separator,
  SubHeading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Tr,
} from "./ExtraInfo.styled";
import ExtraPriceListNonOfficial from "../../priceList/extraPriceList/ExtraPriceListNonOfficial";

const ExtraInfoNonOfficial = () => {
  return (
    <InfoMainContainer>
      <section
          title="sectionNeuradnePreklady"
          id="sectionNeuradnePreklady"
      />
      <InfoInnerContainer>
        <HeadingContainer>
          <Heading>
            <h1>NEÚRADNÉ PREKLADY</h1>
          </Heading>
          <Separator />
          <SubHeading>
            <h3>
              Preklad v maximalnej miere obsahovo aj graficky zodpoveda navrhu.
              <br /> Dodrziavame vsetky podmieky vyplivajuce zo zakona
            </h3>
          </SubHeading>
        </HeadingContainer>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr>
                <Th>Kombinacia Jazykov</Th>
                <Th>Anglictina, nemcina, slovencina</Th>
              </Tr>
              <Tr>
                <Th>Odbory</Th>
                <Th>Technika, pravo, slovencina</Th>
              </Tr>
              <Tr>
                <Th>Ponuka</Th>
                <Th>
                  Vysvedcenie, potvrdenia, certifikaty, zmluvy, lekarske spravy,
                  financne vykazy, technicke spravy, znalecne posudky, patenty
                </Th>
              </Tr>
              <Tr>
                <Th>
                  Preberanie podkladov a odovzdavanie hotovych uradne overenych
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
        <ExtraPriceListNonOfficial />
      </div>
    </InfoMainContainer>
  );
};

export default ExtraInfoNonOfficial;
