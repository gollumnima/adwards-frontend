import React, { Component } from "react";
import styled from "styled-components";

class VideoContent extends Component {
  render() {
    return (
      <VideoWrap>
        <ContentWrap>video</ContentWrap>
        <TextWrap>
          <VideoTitle>All creation</VideoTitle>
          <Channel>Second</Channel>
          <CountVideo>조회수 10만</CountVideo>
        </TextWrap>
      </VideoWrap>
    );
  }
}

const VideoWrap = styled.div`
  width: 200px;
  height: 186px;
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`;

const ContentWrap = styled.div`
  border: 1px solid green;
  width: 200px;
  height: 110px;
  background-color: pink;
`;

const TextWrap = styled.div`
  border: 1px solid green;
  margin-top: 5px;
  width: 200px;
  height: 68px;
`;

const VideoTitle = styled.div`
  border: 1px solid green;
  font-weight: 600;
  width: 176px;
  height: 18px;
  margin: 2px;
  font-size: 14px;
`;

const Channel = styled.div`
  border: 1px solid green;
  width: 82.56px;
  height: 18px;
  font-size: 13px;
  margin: 2px;
  color: #606060;
`;

const CountVideo = styled.div`
  border: 1px solid green;
  width: 97.31px;
  height: 18px;
  font-size: 13px;
  margin: 2px;
  color: #606060;
`;

export default VideoContent;
