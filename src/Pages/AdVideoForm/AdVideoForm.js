import React, { Component } from "react";
import styled from "styled-components";

class AdVideoForm extends Component {
  render() {
    return (
      <VideoLinkBox>
        <VideoLetters>링크 입력</VideoLetters>
        <VideoInput></VideoInput>
        <VideoTextBox></VideoTextBox>
        <CheckBtn>확인</CheckBtn>
      </VideoLinkBox>
    );
  }
}

const VideoLinkBox = styled.div`
  margin-top: 30px;
`;

const VideoLetters = styled.p``;

const VideoInput = styled.input.attrs({
  placeholder: "영상 링크를 입력해주세요"
})`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 350px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const VideoTextBox = styled.textarea.attrs({
  placeholder: "영상 설명을 입력해주세요"
})`
  width: 350px;
  height: 150px;
  margin-bottom: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const CheckBtn = styled.button`
  width: 100px;
`;

export default AdVideoForm;
