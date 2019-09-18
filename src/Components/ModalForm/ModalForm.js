import React, { Component } from "react";
import AdVideoForm from "Pages/AdVideoForm";
import AdMoneyForm from "Pages/AdMoneyForm";
import AdQuizForm from "Pages/AdQuizForm";
// import QuizPlus from "Components/QuizPlus";
import styled from "styled-components";

class ModalForm extends Component {
  constructor() {
    super();
    this.state = {
      rightbox: 0
    };
  }

  Switching = e => {
    /*
    if (e.target.key === 0) {
      this.setState({ rightbox: 0 });
    } else if (e.target.key === 1) {
      this.setState({ rightbox: 1 });
    } else {
      this.setState({ rightbox: 2 });
    }
    */
    this.setState({ rightbox: e.currentTarget.id });
  };

  render() {
    let subView = [<AdVideoForm />, <AdQuizForm />, <AdMoneyForm />];
    // 이걸 왜 랜더 전에 선언하면 안되는 걸까요?
    return (
      <ModalBackground>
        <ModalWrapper>
          <TitleWrapper>
            <TitleLetters>Adwards</TitleLetters>
          </TitleWrapper>
          <AdVideoWrapper>
            <AdLeft>
              <AdSideUL>
                <AdSideLI id="0" onClick={this.Switching}>
                  <Span>광고 영상 업로드</Span>
                </AdSideLI>
                <AdSideLI id="1" onClick={this.Switching}>
                  <Span>퀴즈 업로드</Span>
                </AdSideLI>
                <AdSideLI id="2" onClick={this.Switching}>
                  <Span>금액 설정</Span>
                </AdSideLI>
              </AdSideUL>
            </AdLeft>
            <AdRight>
              {/* {this.state.rightbox === 0 ? (
                <AdVideoForm />
              ) : this.state.rightbox === 1 ? (
                <AdQuizForm />
              ) : (
                <AdMoney />
              )} */}
              {subView[this.state.rightbox]}
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
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const AdSideUL = styled.ul``;
const AdSideLI = styled.li`
  display: flex;
  padding-right: 24px;
  font-size: 15px;
  margin: 30px 0;
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
