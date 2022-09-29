import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const Icon = styled.div`
    width: 50%;
`
const Rating = styled.div`
    background-color: #43484e;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 15px 3px 15px;
    color: orange;
    border-radius: 15px;
`
const ThankYouText = styled.h3`
    color: white;
    margin-top: 2rem;
`
const Paragraph = styled.div`
    color: hsl(217, 12%, 63%);
    margin-top: 1.5rem;
    line-height: 25px;
`

function ThankYou({ userRating }) {
    const { rating } = userRating;

    return (
        <>
            <Container>
                <Icon>
                    <img src="/illustration-thank-you.svg" alt="thanks for submitting" />
                </Icon>
                <Rating>
                    <p>You selected {rating} out of 5</p>
                </Rating>
                <ThankYouText>Thank you!</ThankYouText>
                <Paragraph>
                    <p>We appreciate you taking the time to give a rating.</p>
                    <p>If you ever need more support, don't
                        hesitate to </p>
                    <p>get in touch!</p>
                </Paragraph>
            </Container>
        </>
    )
}

export default ThankYou