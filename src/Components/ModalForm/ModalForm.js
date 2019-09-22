import React, { Component } from "react";
import AdVideoForm from "Pages/AdVideoForm";
import AdQuizForm from "Pages/AdQuizForm";
import AdMoneyForm from "Pages/AdMoneyForm";
// import QuizPlus from "Components/QuizPlus";
import styled from "styled-components";

class ModalForm extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "videoTab"
    };
  }

  switchMenu = activeTab => {
    this.setState({ activeTab: activeTab });
  };

  render() {
    let subView = [
      { videoTab: <AdVideoForm key="0" /> },
      { quizTab: <AdQuizForm key="1" /> },
      { priceTab: <AdMoneyForm key="2" /> }
    ];

    console.log(this.props.activeTab, "액티브");
    return (
      <ModalBackground>
        <ModalWrapper>
          <TitleWrapper>
            <TitleLetters>Adwards</TitleLetters>
          </TitleWrapper>
          <AdVideoWrapper>
            <AdLeft>
              <AdSideUL>
                <AdSideLI
                  active={this.state.activeTab === "videoTab"}
                  onClick={() => this.switchMenu("videoTab")}
                >
                  <Span>광고 영상 업로드</Span>
                </AdSideLI>
                <AdSideLI
                  active={this.state.activeTab === "quizTab"}
                  onClick={() => this.switchMenu("quizTab")}
                >
                  <Span>퀴즈 업로드</Span>
                </AdSideLI>
                <AdSideLI
                  active={this.state.activeTab === "priceTab"}
                  onClick={() => this.switchMenu("priceTab")}
                >
                  <Span>금액 설정</Span>
                </AdSideLI>
              </AdSideUL>
            </AdLeft>
            <AdRight>
              {subView.map((el, key) => {
                el.key = key;
                return el[this.state.activeTab];
              })}
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
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AdSideUL = styled.ul``;
const AdSideLI = styled.li`
  display: flex;
  padding-right: 24px;
  font-size: 15px;
  margin: 30px 0;
  background-color: ${props => (props.active ? `#E2E2E2` : null)};
`;
const Span = styled.span`
  font-size: 18px;
  font-weight: 400;
  height: 30px;
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
  font-weight: ${props => (props.cancel ? "400" : "normal")};
`;

export default ModalForm;
