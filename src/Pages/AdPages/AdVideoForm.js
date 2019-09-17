import React, { Component } from "react";
import styled from "styled-components";

class AdVideoForm extends Component {
  render() {
    return (
      <AdVideoWrapper>
        <VideoLetters></VideoLetters>
        <VideoInput></VideoInput>
        <VideoTextBox></VideoTextBox>
      </AdVideoWrapper>
    );
  }
}

export default AdVideoForm;

const AdVideoWrapper = styled.div``;

const VideoLetters = styled.h2``;

const VideoInput = styled.input``;

const VideoTextBox = styled.textarea``;
