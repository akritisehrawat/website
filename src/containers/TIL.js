import React from 'react';
import styled from 'styled-components';

import Post from '../components/Post';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TIL = () => (
  <Container>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </Container>
);

export default TIL;
