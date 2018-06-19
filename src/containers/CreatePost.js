import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import { smallMargin, largeMargin } from '../util/constants';
import CreatePostMutation from '../server/mutations/createPost';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;

  margin: ${largeMargin}px;
  text-align: center;
`;

const Input = styled.input`
  margin: ${smallMargin}px;
  min-height: 20px;

  outline: 0;
`;

const Textarea = styled.textarea`
  margin: ${smallMargin}px;
  min-height: 500px;

  outline: 0;
`;

class CreatePost extends Component {
  state = {
    title: '',
    content: '',
  };

  onInput = el => {
    el.preventDefault();
    const { target } = el;
    this.setState({ [target.type === 'text' ? 'title' : 'content']: target.value });
  }

  render() {
    const { title, content } = this.state;
    const { history } = this.props;

    return (
      <Container>
        <Mutation mutation={CreatePostMutation}>
          {createPost => (
            <Form onSubmit={e => {
              e.preventDefault();
              createPost({ variables: { title, content } });
              this.setState({ title: '', content: '' });
              history.push('/til');
            }}>
              <Input placeholder="Title" value={title} onInput={this.onInput} />
              <Textarea placeholder="Content" value={content} onInput={this.onInput} />
              <button>Submit</button>
            </Form>
          )}
        </Mutation>
      </Container>
    );
  }
};

export default CreatePost;
