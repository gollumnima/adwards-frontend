import React, { Component } from "react";
import styled from "styled-components";

class AdQuizForm extends Component {
  render() {
    return (
      <QuizBox>
        <QuizLetters>퀴즈 입력</QuizLetters>
        <QuizInput></QuizInput>
        <QuizLetters>선택지 입력</QuizLetters>
        <AnswerInput></AnswerInput>
        <AnswerInput></AnswerInput>
        <AnswerInput></AnswerInput>
        <AnswerInput></AnswerInput>
        <QuizLetters>정답</QuizLetters>
        <RightAnswer></RightAnswer>
      </QuizBox>
    );
  }
}

const QuizBox = styled.div`
  margin-top: 30px;
`;

const QuizLetters = styled.p``;

const QuizInput = styled.input.attrs({
  placeholder: "퀴즈 제목을 입력해주세요"
})`
  margin-top: 20px;
  width: 350px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const AnswerInput = styled.input.attrs({
  placeholder: "퀴즈 선택지를 입력해주세요"
})`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 350px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const RightAnswer = styled.input.attrs({
  placeholder: "숫자로 입력해주세요"
})`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 140px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export default AdQuizForm;
