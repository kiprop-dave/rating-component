import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`
    background-color: ${({ selected }) => selected ? 'hsl(216, 12%, 54%)' : '#43484e'};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ selected }) => selected ? 'white' : 'hsl(217, 12%, 63%)'};
    cursor: pointer;

    &:hover{
        background-color: orange;
        color: white;
    }
`
function Rate({ ratingObj, select }) {
    const { rating, id, isSelected } = ratingObj;
    return (
        <>
            <Rating selected={isSelected} onClick={() => select(id)}>
                {rating}
            </Rating>
        </>
    )
}

export default Rate