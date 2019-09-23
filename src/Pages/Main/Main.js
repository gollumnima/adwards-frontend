import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import VideoPreview from "Components/VideoPreview";
import { recommends, tops } from './data';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
      margin: 0;
      padding: 0;
      width: 100%;
  }

  a {
    color: inherit;
  }
`;

class Main extends Component {
  render() {
    return (
      <HomeWrapper>
        <GlobalStyle />

        <SectionTitle>맞춤 동영상</SectionTitle>
        <VideoList>
            {recommends.map(el => {
              return <VideoPreview key={el.id} info={el} />;
            })}
        </VideoList>

        <SectionTitle>인기 동영상</SectionTitle>
        <VideoList>
          {tops.map(el => {
            return <VideoPreview key={el.id} info={el} />;
          })}
        </VideoList>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  max-width: 690px;
  margin: 0 auto 100px;
  padding: 30px 0 30px 20px;
`;

const SectionTitle = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #444;
`;

const VideoList = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  overflow-x: scroll;
`;

export default Main;
