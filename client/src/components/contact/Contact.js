import React from "react";
import {ContactContainer,
    ContactInnerContainer,
    HeadingContactContainer,
    ContactFormContainer,
    FormLeftSide,
    CardHeading,
    CardText,
    CardSeparator,
    Heading,
    ContactCardContainer,
    FormRightSide,
    FormConactFormular,
    RowOne,
    RowTwo,
    RowThree,
    Input


} from "./Contact.styled"

const Contact = () => {
    return (
        <ContactContainer>
            <ContactInnerContainer>
                <HeadingContactContainer>
                    <h3>KONTAKT</h3>
                    <h1>SPOJTE SA SO MNOU</h1>
                </HeadingContactContainer>
                <ContactFormContainer>
                    <FormLeftSide>
                        <Heading>
                            <h1>Kontaktne Udajte</h1>
                        </Heading>
                        <ContactCardContainer>
                            <CardHeading>
                                <h3>Adresa</h3>
                            </CardHeading>
                            <CardText>
                                <p>Ambroso 10 , 851 02 Bratislava 5</p>
                            </CardText>
                            <CardSeparator>

                            </CardSeparator>
                        </ContactCardContainer>
                        <ContactCardContainer>
                            <CardHeading>
                                <h3>Adresa</h3>
                            </CardHeading>
                            <CardText>
                                <p>Ambroso 10 , 851 02 Bratislava 5</p>
                            </CardText>
                            <CardSeparator>

                            </CardSeparator>
                        </ContactCardContainer>
                        <ContactCardContainer>
                            <CardHeading>
                                <h3>Adresa</h3>
                            </CardHeading>
                            <CardText>
                                <p>Ambroso 10 , 851 02 Bratislava 5</p>
                            </CardText>
                            <CardSeparator>

                            </CardSeparator>
                        </ContactCardContainer>
                    </FormLeftSide>
                    <FormRightSide>
                        <Heading>
                            <h1>Poslite mi spravu</h1>
                        </Heading>
                        <FormConactFormular>
                            <RowOne>
                                <Input></Input>
                                <Input></Input>
                            </RowOne>
                            <RowTwo>
                                <Input></Input>
                            </RowTwo>
                            <RowThree>
                                <button>Odoslat</button>
                            </RowThree>
                        </FormConactFormular>

                    </FormRightSide>
                </ContactFormContainer>

            </ContactInnerContainer>
        </ContactContainer>

    )
}

export default Contact