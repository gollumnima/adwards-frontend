import React, { Component } from "react";
import styled from "styled-components";

class AdList extends Component {
  render() {
    return (
      <AdListWrapper>
        <ImgTopWrapper>
          <ImgContainer>
            <AdThumbnails src="https://cdn.pixabay.com/photo/2017/03/05/12/22/blue-2118528_960_720.jpg"></AdThumbnails>
          </ImgContainer>
          <ImgTitle>현대자동차 승차이벤트</ImgTitle>
        </ImgTopWrapper>
        <ImgTopWrapper>
          <ImgContainer>
            <AdThumbnails src="https://cdn.pixabay.com/photo/2017/08/06/13/21/laptop-2592458_960_720.jpg"></AdThumbnails>
          </ImgContainer>
          <ImgTitle>맥북 1+1 할인행사 영상</ImgTitle>
        </ImgTopWrapper>
        <ImgTopWrapper>
          <ImgContainer>
            <AdThumbnails src="https://cdn.pixabay.com/photo/2017/08/06/07/09/coffee-2589759_960_720.jpg"></AdThumbnails>
          </ImgContainer>
          <ImgTitle>카페베네 신메뉴 영상</ImgTitle>
        </ImgTopWrapper>
        <ImgTopWrapper>
          <ImgContainer>
            <AdThumbnails src="https://cdn.pixabay.com/photo/2018/05/16/05/50/ginseng-3404958_960_720.jpg"></AdThumbnails>
          </ImgContainer>
          <ImgTitle>정관장 추석 에디션 </ImgTitle>
        </ImgTopWrapper>
      </AdListWrapper>
    );
  }
}

export default AdList;

const AdListWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImgTopWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
  :hover {
    transform: scale(1.5);
  }
`;

const AdThumbnails = styled.img`
  width: 100%;
  color: white;

  :hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  cursor: pointer;
`;

const ImgTitle = styled.h1`
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50px;
  margin-left: 10px;
  border-left: 6px solid black;
  padding: 0 20px;
`;
