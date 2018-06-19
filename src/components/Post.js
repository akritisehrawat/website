import React from 'react';
import styled from 'styled-components';
import { baseMargin, largeMargin } from '../util/constants';

const Container = styled.div`
  width: 50%;
  min-height: 20%;

  border: 0.5px solid lightgray;
  margin: ${largeMargin}px;
  text-align: center;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  margin: ${baseMargin}px;
`;

const Content = styled.div`
  margin: ${baseMargin}px;
`;

const Post = () => (
  <Container>
    <Title>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
    </Title>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Content>
  </Container>
);

export default Post;
