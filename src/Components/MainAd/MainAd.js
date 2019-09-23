import React, { Component } from "react";
import styled from "styled-components";
import TopTen from "./TopTen";

class MainAd extends Component {
  render() {
    return (
      <AdWrapper>
        <BigAdWrapper></BigAdWrapper>
        <TopTen></TopTen>
      </AdWrapper>
    );
  }
}

const AdWrapper = styled.div`
  margin-top: 30px;
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

export default MainAd;
