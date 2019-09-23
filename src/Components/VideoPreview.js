import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const VideoPreview = ({ info }) => {
  return (
    <Link to={`/watch/${info.id}`}>
      <VideoWrap>
        <img src={info.img} />
        <TextWrap>
          <VideoTitle>{info.title}</VideoTitle>
          <Channel>{info.author} · 조회수 {info.count}</Channel>
          <AwardText>보상금 <AwardAmount>{info.award}</AwardAmount></AwardText>
        </TextWrap>
      </VideoWrap>
    </Link>
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
  width: 250px;
  margin-top: 10px;
`;

const VideoTitle = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`;

const Channel = styled.p`
  font-size: 13px;
  color: #606060;
`;

const AwardText = styled.p`
  font-size: 13px;
  color: #119e88;
  margin-top: 5px;
`;

const AwardAmount = styled.span`
  padding: 3px 7px;
  font-size: 11px;
  background-color: #119e88;
  color: white;
  font-weight: bold;
  height: 20px;
  line-height: 20px;
  border-radius: 3px;
`;

export default VideoPreview;
