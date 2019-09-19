import React, { Component } from "react";
import styled from "styled-components";

class AdVideoForm extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
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

  openCategory = () => {
    this.state.isOpen === true
      ? this.setState({ isOpen: false })
      : this.setState({ isOpen: true });
  };

  onClickSave = e => {
    const videoTitle = this.state.videoTitle.trim();
    const videoLink = this.state.videoLink.trim();
    const videoThumbnail = this.state.videoThumbnail.trim();
    const videoCate = this.state.videoCate.trim();
    const videoDesc = this.state.videoDesc.trim();

    videoTitle.trim();
    if (
      videoTitle === "" ||
      videoLink === "" ||
      videoThumbnail === "" ||
      videoCate === "" ||
      videoDesc === ""
    ) {
      alert("모든 칸을 채워주세요");
    } else {
      fetch("localhost:8000/advertisement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: videoTitle,
          video_link: videoLink,
          thumbnailk_link: videoThumbnail,
          ad_category_id: videoCate,
          description: videoThumbnail
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
          <VideoLetters category>카테고리 선택 </VideoLetters>
          <VideoCategory>
            <VideoCategoryTop onClick={this.openCategory}>
              <VideoCategoryBtn>카테고리 선택 ▾</VideoCategoryBtn>
            </VideoCategoryTop>
            <VideoCategoryDown>
              <VideoCategoryUL>
                <VideoCategoryLI>
                  <CategoryA>게임</CategoryA>
                </VideoCategoryLI>
                <VideoCategoryLI>
                  <CategoryA>동물</CategoryA>
                </VideoCategoryLI>
                <VideoCategoryLI>
                  <CategoryA>스포츠</CategoryA>
                </VideoCategoryLI>
                <VideoCategoryLI>
                  <CategoryA>음식</CategoryA>
                </VideoCategoryLI>
              </VideoCategoryUL>
            </VideoCategoryDown>
          </VideoCategory>
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

const VideoCategory = styled.div`
  border: none;
  font-size: 14px;
`;

const VideoCategoryTop = styled.div`
  display: inline-flex;
  vertical-align: top;
  position: relative;
  border: 1px solid #dbdbdb;
`;

const VideoCategoryBtn = styled.button`
  border-style: none;
  background-color: #fff;
  border-color: #dbdbdb;
  color: #363636;
  font-size: 16px;
  justify-content: center;
`;

const VideoCategoryDown = styled.div`
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
`;

const VideoCategoryUL = styled.ul`
  list-style: none;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 4px;
  margin: 0;
  padding: 0;
`;

const VideoCategoryLI = styled.li`
  z-index: 22;
  width: 100%;
  margin-left: 30px;
`;

const CategoryA = styled.a``;

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
