import React, { Component } from "react";
import styled from "styled-components";
import TopTen from "./TopTen";

class MainAd extends Component {
  render() {
    return (
      <AdWrapper>
        <BigAdWrapper>
          <BigMainBox>
            <BigAd></BigAd>
          </BigMainBox>
          <SmallBox>
            <SmallAd></SmallAd>
            <BiggerAd></BiggerAd>
          </SmallBox>
        </BigAdWrapper>
        <TopTen></TopTen>
      </AdWrapper>
    );
  }
}

export default MainAd;

const AdWrapper = styled.div`
  margin-top: 50px;
  margin-left: 55px;
  text-align: center;
  @media (max-width: 375px) {
    margin-left: 18px;
  }
`;

const BigAdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 375px) {
    margin-left: 15px;
  }
`;

const BigMainBox = styled.div`
  margin: 5px;
`;

const BigAd = styled.img.attrs({
  src:
    "https://i.ytimg.com/vi/x40W1njnc4Y/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCF1AsInvXatJmZLbz6JlZ6ed9cvA"
})`
  width: 100%;
`;

const SmallBox = styled.div`
  width: 210px;
  margin: 5px;
  @media (max-width: 375px) {
    display: none;
  }
`;

const SmallAd = styled.img.attrs({
  src: require("../img/wecode.png")
})`
  width: 100%;
  margin-bottom: 20px;
`;

const BiggerAd = styled.img.attrs({
  src: require("../img/kakao.png")
})`
  width: 100%;
`;
