import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
`;

const Practice = () => (
  <Container>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Container>
);

export default Practice;
