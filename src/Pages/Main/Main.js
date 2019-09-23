import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import VideoPreview from "Components/VideoPreview";
import { recommends } from './data';

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

        <SectionTitle>맞춤 동영상</SectionTitle>
        <VideoList>
          <VideoListWrap>
            {recommends.map(el => {
              return <VideoPreview key={el.id} info={el} />;
            })}
          </VideoListWrap>
        </VideoList>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  max-width: 690px;
  margin: 0 auto;
  padding: 30px 0 30px 20px;
`;

const SectionTitle = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #444;
`;

const VideoList = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

const VideoListWrap = styled.div`

`;

export default Main;
