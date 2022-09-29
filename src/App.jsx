import React, { useState } from 'react';
import styled from 'styled-components';
import ratings from './utils/ratings';
import Rating from './components/rating';
import ThankYou from './components/thankYou';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(216, 12%, 8%);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  width: 30%;
  height: 60%;
  background-color: hsl(213, 19%, 18%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px){
    width: 90%;
  }
`

function App() {
  const [hasRated, setHasRated] = useState(false);
  const [rateData, setRateData] = useState(ratings);

  const hasNotRated = rateData.every(item => !item.isSelected); // check if the user has rated

  function select(id) {
    const _ratings = rateData.map(rate => {
      return (
        rate.id === id ?
          {
            ...rate,
            isSelected: true
          } :
          {
            ...rate,
            isSelected: false
          }
      )
    })

    setRateData(_ratings);
  }

  const userRating = rateData.filter(rate => rate.isSelected)[0];


  function submitRating() {
    if (!hasNotRated) {
      setHasRated(true);
    }
  }

  return (
    <Page>
      <Container>
        {
          hasRated ?
            <ThankYou userRating={userRating} /> :
            <Rating rateData={rateData} submit={submitRating} select={select} />
        }
      </Container>
    </Page>
  )
}

export default App