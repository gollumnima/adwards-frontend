import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainAd from "Components/MainAd";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset};
body {
    margin: 0;
    padding: 0;
    width: 100%;
}`;

class Main extends Component {
  render() {
    return (
      <HomeWrapper>
        <GlobalStyle />
        <MainAd></MainAd>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0;
  max-width: 690px;
  margin: 0 auto;
  background: transparent;
  /* background-color: #fafafa; */
`;

export default Main;
