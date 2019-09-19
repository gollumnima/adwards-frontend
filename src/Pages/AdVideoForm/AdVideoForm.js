import React, { Component } from "react";
import Data from "./Data";
import styled from "styled-components";

class AdVideoForm extends Component {
  constructor() {
    super();
    this.state = {
      tags: ["핵꿀잼", "리워드대박"],
      videoTitle: "",
      videoLink: "",
      videoThumbnail: "",
      videoCate: "",
      videoDesc: ""
    };
  }

  removeTags = i => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  };

  inputKeyDown = e => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (
        this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())
      ) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val] });
      this.tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  };

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
          thumbnail_link: thumbnail,
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
    const { tags } = this.state;

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
          <VideoLetters>영상 설명</VideoLetters>
          <VideoTextBox
            name="videoDesc"
            onChange={e => this.handleChange(e)}
            placeholder="광고영상에 대한 설명을 입력해주세요"
          ></VideoTextBox>

          <VideoLetters category>영상 카테고리 선택 </VideoLetters>
          <div>
            <Select>
              <Options>카테고리 선택 </Options>
              {Data[1].ad_categories.map((el, idx) => (
                <Options key={idx}>{el}</Options>
              ))}
            </Select>
          </div>
          <VideoLetters category>영상 타겟 카테고리 설정</VideoLetters>
          <GridLine>
            {Data[0].interests_types.map((el, idx) => (
              <InputGroup>
                <InputCheck></InputCheck>
                <LabelLetter key={idx}>{el}</LabelLetter>
              </InputGroup>
            ))}
          </GridLine>
          <VideoLetters category>영상 태그 설정</VideoLetters>
          <TagWrapper>
            <TagUL>
              {tags.map((tag, i) => (
                <TagLI key={tag}>
                  {tag}
                  <TagBtn
                    onClick={() => {
                      this.removeTags(i);
                    }}
                  >
                    +
                  </TagBtn>
                </TagLI>
              ))}
              <TagSpace>
                <TagInput
                  onKeyDown={this.inputKeyDown}
                  ref={c => {
                    this.tagInput = c;
                  }}
                />
              </TagSpace>
            </TagUL>
          </TagWrapper>
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
  background-color: white;
  color: gray;
  font-size: 14px;
  border: 1px solid #bdbdbd;
`;

const Options = styled.option`
  color: black;
  background-color: white;
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

const GridLine = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const InputGroup = styled.div`
  background-color: #fff;
  display: block;
  margin: 7px 0;
  position: relative;
  width: 72px;
`;

const InputCheck = styled.input.attrs({
  type: "checkbox"
})`
  :checked ~ label {
    color: #fff;

    &:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
    }
  }
  width: 20px;
  height: 20px;
  z-index: 50;
  position: absolute;
  right: -43px;
  top: 15px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const LabelLetter = styled.label`
  font-size: 11px;
  font-weight: 600;
  padding: 9px 20px;
  width: 100%;
  display: block;
  text-align: left;
  color: #3c454c;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  &::before {
    width: 10px;
    height: 10px;
    content: "";
    background-color: #233e6a;
    position: absolute;
    left: 50%;
    opacity: 0;
    z-index: -1;
  }
`;

const TagWrapper = styled.div`
  width: 363px;
  background: white;
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 0;
`;

const TagUL = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TagLI = styled.li`
  align-items: center;
  background: linear-gradient(
    to right top,
    #233e6a,
    #44417c,
    #6c3f86,
    #953785,
    #bb2979
  );
  border-radius: 2px;
  color: white;
  display: flex;
  font-weight: 300;
  list-style: none;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 10px;
`;

const TagBtn = styled.button`
  align-items: center;
  appearance: none;
  background: #333333;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  height: 15px;
  justify-content: center;
  line-height: 0;
  margin-left: 8px;
  transform: rotate(45deg);
  width: 15px;
`;

const TagSpace = styled.li`
  background: none;
  flex-grow: 1;
  padding: 0;
`;

const TagInput = styled.input.attrs({
  type: "text",
  placeholder: "원하는 태그를 최대 5개까지 입력해주세요"
})`
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  width: 100%;
  height: 43px;
`;
const CheckBtn = styled.button`
  width: 100px;
  border: none;
  background-color: #233e6a;
  color: white;
  font-size: 20px;
  margin-top: 20px;
`;

export default AdVideoForm;
