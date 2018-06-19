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

const Post = ({ title, content }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Content>
      {content}
    </Content>
  </Container>
);

export default Post;
