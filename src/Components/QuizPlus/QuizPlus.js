import React, { Component } from "react";
import styled from "styled-components";

class QuizPlus extends Component {
  render() {
    return (
      <PlusWrapper>
        <PlusDiv>
          <PlusIcon></PlusIcon>
        </PlusDiv>
      </PlusWrapper>
    );
  }
}

export default QuizPlus;

const PlusWrapper = styled.div`
  width: 100%;
`;

const PlusDiv = styled.div`
  width: 100%;
  display: inline-block;
`;

const PlusIcon = styled.a`
  background-image: url("https://image.flaticon.com/icons/svg/148/148790.svg");
`;
