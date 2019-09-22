import React, { Component } from "react";
import styled from "styled-components";
import VideoContent from "Components/VideoContent";

class TopTen extends Component {
  render() {
    return (
      <TopTenWrapper>
        <TopTenTitle>맞춤 동영상</TopTenTitle>
        <TopTenList>
          {/* {this.state.result.map((el, i) => {
            return <VideoContent result={el} key={i} />
          })} */}
          <VideoContent />
          <VideoContent />
          <VideoContent />
        </TopTenList>
        <TopTenTitle>인기 동영상</TopTenTitle>
        <TopTenList>
          <VideoContent />
          <VideoContent />
          <VideoContent />
        </TopTenList>
        <TopTenTitle>추천 동영상</TopTenTitle>
        <TopTenList>
          <VideoContent />
          <VideoContent />
          <VideoContent />
        </TopTenList>
        <TopTenTitle>동영상</TopTenTitle>
        <TopTenList>
          <VideoContent />
          <VideoContent />
          <VideoContent />
        </TopTenList>
      </TopTenWrapper>
    );
  }
}

const TopTenWrapper = styled.div`
  width: 100%;
  margin-top: 22px;
`;

const TopTenTitle = styled.h1`
  width: 100%;
  text-align: left;
  margin-top: 15px;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 500;
`;

const TopTenList = styled.div`
  margin-top: 29px;
  text-align: left;
  min-height: 117.5px;
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default TopTen;
