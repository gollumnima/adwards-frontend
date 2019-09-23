import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Player from "@vimeo/player";

class WatchContent extends Component {
  componentDidMount() {
    const videoElement = ReactDOM.findDOMNode(this.video);

    const player = new Player(videoElement, {
      id: 55360273
    });

    player.on("play", function() {
      console.log("played the video!");
    });

    player.on("ended", function() {
      console.log("ended the video!");
    });
  }

  render() {
    return (
      <>
        <WatchVideoWrap>
          <ContentVideoWrap ref={node => (this.video = node)}>
            Video
          </ContentVideoWrap>
          <TextWrap>
            <VideoTitle>You are my sunshine </VideoTitle>
            <Channel>Mattew</Channel>
            <CountVideo>조회수 20만</CountVideo>
          </TextWrap>
        </WatchVideoWrap>
        <QuizWrap>
          <Question>인천의 8미의 지역이 아닌 곳은?</Question>
          <QuizAnswer>
            <Quizdiv>
              <QuizContent>A</QuizContent>
              <QuizAnswerResult>신포시장</QuizAnswerResult>
            </Quizdiv>
            <Quizdiv>
              <QuizContent>B</QuizContent>
              <QuizAnswerResult>차이나타운</QuizAnswerResult>
            </Quizdiv>
            <Quizdiv>
              <QuizContent>C</QuizContent>
              <QuizAnswerResult>송도국제도시</QuizAnswerResult>
            </Quizdiv>
            <Quizdiv>
              <QuizContent>D</QuizContent>
              <QuizAnswerResult>경인아래뱃길</QuizAnswerResult>
            </Quizdiv>
          </QuizAnswer>
        </QuizWrap>
      </>
    );
  }
}

const WatchVideoWrap = styled.div`
  margin-top: 20px;
  max-width: 690px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentVideoWrap = styled.div`
  width: 80%;
  height: 90%;
  border: 1px solid green;
  position: relative;
  margin: 2px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const TextWrap = styled.div`
  margin-top: 5px;
  max-width: 530px;
  width: 100%;
  height: 93px;
`;

const VideoTitle = styled.div`
  font-weight: 600;
  width: 90%;
  height: 21px;
  margin: 2px;
  font-size: 18px;
`;

const Channel = styled.div`
  width: 82.56px;
  height: 18px;
  font-size: 14px;
  margin: 2px;
  color: #606060;
`;

const CountVideo = styled.div`
  height: 18px;
  font-size: 14px;
  margin: 2px;
  color: #606060;
`;

const QuizWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  max-width: 690px;
  height: 500px;
`;

const Question = styled.div`
  height: 60px;
  width: 100%;
  margin: 2px;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  padding-top: 50px;
`;

const QuizAnswer = styled.div`
  width: 80%;
  color: #3697e9;
  cursor: pointer;
  min-height: 62px;
  height: 62px;
`;

const Quizdiv = styled.div`
  background-color: #ebebeb;
  margin-bottom: 10px;
  padding: 10px 5px;
`;
const QuizContent = styled.span`
  background-color: #fff;
  color: #3697e9;
  font-size: 17px;
  font-weight: 700;
  height: 24px;
  margin: 10px;
  width: 30px;
  padding: 0 3px;
`;

const QuizAnswerResult = styled.span`
  padding: 10px 35px 10px 8px;
  text-align: left;
  vertical-align: middle;
  width: 100%;
`;

export default WatchContent;
