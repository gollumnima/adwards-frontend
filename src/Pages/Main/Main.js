import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainAd from "Components/MainAd";

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
        <SideBar></SideBar>
        <MainAd></MainAd>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 690px;
  margin: 0 auto;
  /* background-color: #fafafa; */
`;

const SideBar = styled.div``;

export default Main;
