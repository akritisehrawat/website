import React from 'react';
import styled from 'styled-components';
import { cardWidth, largeMargin } from '../util/constants';

const Container = styled.div`
  border: 0.5px solid lightgray;
  min-width: ${cardWidth}px;
  min-height: 300px;

  margin: ${largeMargin}px;

  :hover {
    cursor: pointer;
    border-color: gray;
  }
`;

const Card = () => (
  <Container>
    
  </Container>
);

export default Card;
