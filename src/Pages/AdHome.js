import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainAd from "../Components/MainAd";

const GlobalStyle = createGlobalStyle`
  ${reset};
body {
    margin: 0;
    padding: 0;
    width: 100%;
}`;

class AdHome extends Component {
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

export default AdHome;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 690px;
  margin-left: auto;
  margin-right: auto;
  /* background-color: #fafafa; */
`;

const SideBar = styled.div``;
