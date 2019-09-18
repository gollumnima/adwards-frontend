import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WatchContent from "Components/WatchContent";

const GlobalStyle = createGlobalStyle`
  ${reset};
body {
    margin: 0;
    padding: 0;
    width: 100%;
}`;

class VideoLandingPage extends Component {
  render() {
    return (
      <VideoWrapper>
        <GlobalStyle />
      </VideoWrapper>
    );
  }
}

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0;
  max-width: 690px;
  margin: 0 auto;
  background: transparent;
`;
export default VideoLandingPage;
