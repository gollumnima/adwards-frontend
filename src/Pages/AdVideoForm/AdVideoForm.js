import React, { Component } from "react";
import styled from "styled-components";

class AdVideoForm extends Component {
  render() {
    return (
      <ModalBackground>
        <ModalWrapper>
          <TitleWrapper>
            <TitleLetters>Adwards</TitleLetters>
            {/* <XWrapper>
              <Xbox>X</Xbox>
            </XWrapper> */}
          </TitleWrapper>

          <AdVideoWrapper>
            <AdLeft>
              <AdSideUL>
                <AdSideLI>
                  <Span>광고 영상 업로드</Span>
                </AdSideLI>
                <AdSideLI>
                  <Span>퀴즈 업로드</Span>
                </AdSideLI>
                <AdSideLI>
                  <Span>금액 설정</Span>
                </AdSideLI>
              </AdSideUL>
            </AdLeft>
            <AdRight>
              <VideoLinkBox>
                <VideoLetters>링크 입력</VideoLetters>
                <VideoInput></VideoInput>
                <VideoTextBox></VideoTextBox>
                <CheckBtn>확인</CheckBtn>
              </VideoLinkBox>
            </AdRight>
          </AdVideoWrapper>
          <CloseOK>
            <CloseLetter cancel>취소</CloseLetter>
            <CloseLetter>확인</CloseLetter>
          </CloseOK>
        </ModalWrapper>
      </ModalBackground>
    );
  }
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 50;
`;
const ModalWrapper = styled.div`
  background-color: white;
  min-width: 640px;
  max-width: 640px;
  position: fixed;
  top: 102.5px;
  left: 65px;
  z-index: 1000;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 10px;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  height: 52px;
  place-content: space-between;
`;

const TitleLetters = styled.h1`
  font-size: 22px;
  font-weight: 400;
  margin-left: 15px;
  margin-top: 10px;
`;

// const XWrapper = styled.div`
//   border: 1px solid #bdbdbd;
//   width: 100%;
//   height: 100%;
// `;

// const Xbox = styled.h1`
//   width: 30px;
//   height: 30px;
// `;

const AdVideoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
`;

const AdLeft = styled.div`
  background-color: #f4f4f4;
  width: 216px;
  height: 600px;
`;

const AdRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const VideoLinkBox = styled.div`
  justify-content: center;
`;
const AdSideUL = styled.ul``;
const AdSideLI = styled.li`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 15px;
  margin: 30px 0;
`;
const Span = styled.span`
  font-size: 18px;
  font-weight: 400;
  height: 30px;
`;

const VideoLetters = styled.h2`
  margin-top: 20px;
`;

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

const CloseOK = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

const CloseLetter = styled.h2`
  margin-bottom: 20px;
  margin-right: 20px;
  color: ${props => (props.cancel ? "#233e6a" : "#545352")};
  font-weight: ${props => (props.cancel ? "bold" : "normal")};
`;
export default AdVideoForm;
