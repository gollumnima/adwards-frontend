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

// const VideoOne = styled.img.attrs({
// src:
//     "https://i.ytimg.com/vi/5HEoiIVjX74/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAXFfcgKWW6nRCZStElMeYhRe1hQQ"
// })`
//   margin: 2px;
//   width: 100%;
// `;

// const VideoTwo = styled.img.attrs({
//   src:
//     "https://i.ytimg.com/vi/3aTPapvWpKs/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDenS1b7MPaYyGGOkekOepkLL2uTQ"
// })`
//   margin: 2px;
//   width: 100%;
// `;
// const VideoThree = styled.img.attrs({
//   src:
//     "https://i.ytimg.com/vi/3hxT4cSm03s/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLC3qI8X0A7WZJE9bEoPBQGbY80x3Q"
// })`
//   margin: 2px;
//   width: 100%;
// `;
// const VideoFour = styled.img.attrs({
//   src:
//     "https://i.ytimg.com/vi/8y5tckl-F_Y/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCzW19-Mw7m8RrVQKPE0PzAx4ntng"
// })`
//   margin: 2px;
//   width: 100%;
// `;
// const VideoFive = styled.img.attrs({
//   src:
//     "https://i.ytimg.com/vi/x60mB0zXZ38/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDXpdqa17qxQDBUQcn7vn615e0G_A"
// })`
//   margin: 2px;
//   width: 100%;
// `;

export default TopTen;
