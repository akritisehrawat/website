import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import Post from '../components/Post';
import GetAllPostsQuery from '../server/queries/getAllPosts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

class TIL extends Component {
  render() {
    return (
      <Container>
        <Query query={GetAllPostsQuery}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading</div>;
            return data.allPosts.map((datum, index) => 
              <Post
                key={`post-${index}`}
                title={datum.title}
                content={datum.content}
              />
            );
          }}
        </Query>
      </Container>
    );
  }
}

export default TIL;
