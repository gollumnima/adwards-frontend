import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Player from '@vimeo/player';



class VideoContent extends Component {

  componentDidMount() {
    const videoElement = ReactDOM.findDOMNode(this.video);

    const player = new Player(videoElement, {
      id: 55360273,
      // width: 640
    });

    player.on('play', function() {
      console.log('played the video!');
    });

    player.on('ended', function() {
      console.log('ended the video!');
    });
  }

  render() {
    return (
      <VideoWrap>
        <ContentWrap ref={node => this.video = node} />
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
  position: relative;
  width: 200px;
  height: 110px;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
