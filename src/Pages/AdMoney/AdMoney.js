import React, { Component } from "react";
import styled from "styled-components";

class AdMoney extends Component {
  render() {
    return (
      <ModalBackground>
        <ModalWrapper>
          <TitleWrapper>
            <TitleLetters>Adwards</TitleLetters>
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
                <VideoLetters ad_price>광고 금액</VideoLetters>
                <VideoInput></VideoInput>
                <CreditBalance>충전금 잔액: 10,000원</CreditBalance>
                <VideoLetters>1 view당 보상 금액</VideoLetters>
                <RewardInput></RewardInput>
              </VideoLinkBox>
              <CheckBtn>저장</CheckBtn>
            </AdRight>
            <CloseOK>
              <CloseLetter cancel>취소</CloseLetter>
              <CloseLetter>확인</CloseLetter>
            </CloseOK>
          </AdVideoWrapper>
        </ModalWrapper>
      </ModalBackground>
    );
  }
}

export default AdMoney;

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
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  height: 52px;
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
  placeholder: "광고 금액을 입력해주세요"
})`
  margin-top: 20px;
  width: 350px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const CreditBalance = styled.p`
  color: #233e6a;
  font-size: 15px;
  margin-top: 5px;
`;

const RewardInput = styled.input`
  margin-top: 20px;
  width: 350px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #f4f4f4;
`;
const CheckBtn = styled.button`
  width: 100px;
  margin-top: 40px;
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
