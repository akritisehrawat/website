import React, { Component } from 'react';
import styled from 'styled-components';

import { smallMargin, largeMargin } from '../util/constants';

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
    text: '',
    textarea: '',
  };

  onSubmit = el => {
    el.preventDefault();
    const { text, textarea } = this.state;

    // mutation called here.
  }

  onInput = el => {
    el.preventDefault();
    const { target } = el;
    this.setState({ [target.type]: target.value });
  }

  render() {
    const { text, textarea } = this.state;

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Input placeholder="Title" value={text} onInput={this.onInput} />
          <Textarea placeholder="Content" value={textarea} onInput={this.onInput} />
          <button>Submit</button>
        </Form>
      </Container>
    );
  }
};

export default CreatePost;
