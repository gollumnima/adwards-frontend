import React, { Component } from "react";
import styled from "styled-components";

class AdVideoForm extends Component {
  constructor() {
    super();
    this.state = {
      videoTitle: "",
      videoLink: "",
      videoThumbnail: "",
      videoCate: "",
      videoDesc: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClickSave = e => {
    const {
      videoTitle,
      videoLink,
      videoThumbnail,
      videoCate,
      videoDesc
    } = this.state;
    const title = videoTitle.trim();
    const link = videoLink.trim();
    const thumbnail = videoThumbnail.trim();
    const cate = videoCate.trim();
    const desc = videoDesc.trim();

    videoTitle.trim();
    if (
      title === "" ||
      link === "" ||
      thumbnail === "" ||
      cate === "" ||
      desc === ""
    ) {
      alert("모든 칸을 채워주세요");
    } else {
      fetch("localhost:8000/advertisement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          video_link: link,
          thumbnailk_link: thumbnail,
          ad_category_id: cate,
          description: desc
        })
      }).then(response => {
        if (response.status !== 200) {
          return response.json();
        } else {
          alert("영상 정보가 저장되었습니다.");
        }
      });
    }
  };
  render() {
    return (
      <VideoFormWrapper>
        <VideoNotice>
          ※입력을 완료하시고 아래의 저장버튼을 꼭 눌러주세요.
        </VideoNotice>
        <VideoLinkBox>
          <VideoLetters>업로드할 영상 제목</VideoLetters>
          <VideoInput
            name="videoTitle"
            onChange={e => this.handleChange(e)}
          ></VideoInput>
          <VideoLetters>영상 링크 </VideoLetters>
          <VideoInput
            name="videoLink"
            onChange={e => this.handleChange(e)}
            placeholder="동영상 링크를 입력해주세요"
          ></VideoInput>
          <VideoLetters>썸네일 링크 </VideoLetters>
          <VideoInput
            name="videoThumbnail"
            onChange={e => this.handleChange(e)}
            placeholder="대표이미지 링크를 입력해주세요"
          ></VideoInput>
          <VideoLetters category>영상 카테고리 선택 </VideoLetters>
          <div>
            <Select>
              <Options>카테고리 선택 </Options>
              <Options>드라마</Options>
              <Options>코믹</Options>
              <Options>음악</Options>
              <Options>동물</Options>
              <Options>연예인</Options>
              <Options>가족</Options>
              <Options>해외</Options>
              <Options>패러디</Options>
              <Options>정보</Options>
              <Options>영화</Options>
            </Select>
          </div>
          <VideoLetters>영상 설명</VideoLetters>
          <VideoTextBox
            name="videoDesc"
            onChange={e => this.handleChange(e)}
            placeholder="광고영상에 대한 설명을 입력해주세요"
          ></VideoTextBox>
          <CheckBtn onClick={this.onClickSave}>저장</CheckBtn>
        </VideoLinkBox>
      </VideoFormWrapper>
    );
  }
}

const VideoFormWrapper = styled.div`
  width: 100%;
`;

const VideoNotice = styled.p`
  font-weight: 20px;
  color: #233e6a;
`;

const VideoLinkBox = styled.div`
  margin-top: 30px;
`;

const VideoLetters = styled.p``;

const VideoInput = styled.input.attrs({
  placeholder: "영상 링크를 입력해주세요"
})`
  margin-bottom: 20px;
  width: 350px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const Select = styled.select`
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
`;
const Options = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

const VideoTextBox = styled.textarea`
  width: 350px;
  height: 150px;
  margin-bottom: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const CheckBtn = styled.button`
  width: 100px;
  border: none;
  background-color: #233e6a;
  color: white;
  font-size: 20px;
`;

export default AdVideoForm;
