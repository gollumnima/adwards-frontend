import React from "react";
import styled from "styled-components";

const VideoPreview = ({ info }) => {
  console.log(info)
  return (
    <VideoWrap>
      <img src={info.img} />
      <TextWrap>
        <VideoTitle>{info.title}</VideoTitle>
        <Channel>{info.author}</Channel>
        <CountVideo>조회수 {info.count}</CountVideo>
      </TextWrap>
    </VideoWrap>
  );
}

const VideoWrap = styled.div`
  display: inline-block;
  width: 250px;
  margin-right: 20px;
  
  img {
    width: 100%;
  }
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
  margin-top: 10px;
`;

const VideoTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

const Channel = styled.div`
  width: 82.56px;
  height: 18px;
  font-size: 13px;
  margin: 2px;
  color: #606060;
`;

const CountVideo = styled.div`
  width: 97.31px;
  height: 18px;
  font-size: 13px;
  margin: 2px;
  color: #606060;
`;

export default VideoPreview;
