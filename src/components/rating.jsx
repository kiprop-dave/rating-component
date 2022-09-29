import React from 'react';
import Rate from './rate';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    height: 90%;
`
const Icon = styled.div`
    background-color: #43484e;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Header = styled.h2`
    color: white;
    margin-top: 1rem;
`
const Paragraph = styled.p`
    color: hsl(217, 12%, 63%);
    margin-top: 0.7rem;
    line-height: 25px;
`
const RatingsContainer = styled.div`
    margin-top: 1rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const SubmitButton = styled.button`
    width: 100%;
    background-color: hsl(25, 97%, 53%);
    height: 3rem;
    margin-top: 2rem;
    color: white;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 1.5px;
    border: none;
    border-radius: 22px;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: hsl(216, 12%, 54%);
    }
`

function Rating({ rateData, submit, select }) {

    const rateElements = rateData.map((score, index) => {
        return (
            <Rate key={index} ratingObj={score} select={select} />
        )
    })

    return (
        <>
            <Container>
                <Icon>
                    <img src="/icon-star.svg" alt="star" />
                </Icon>
                <Header>
                    How did we do?
                </Header>
                <Paragraph>
                    Please let us know how we did with your support request. All feedback
                    is appreciated to help us improve our offering!
                </Paragraph>
                <RatingsContainer>
                    {rateElements}
                </RatingsContainer>
                <SubmitButton onClick={() => submit()}>
                    SUBMIT
                </SubmitButton>
            </Container>
        </>
    )
}

export default Rating