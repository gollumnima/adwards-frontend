import React, { Component } from "react";
import styled from "styled-components";
import AdVideoForm from "Pages/AdVideoForm";

class AdUpload extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }
  openModal = () => {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  };

  render() {
    return (
      <UploadPageWrapper>
        {this.state.isOpen === true ? <AdVideoForm /> : null}
        <StudioWrapper>
          <PicWrapper>
            <StudioPic></StudioPic>
          </PicWrapper>
          <StudioLetter>동영상을 업로드할 준비가 되셨나요?</StudioLetter>
          <UploadBtn onClick={this.openModal}>동영상 업로드</UploadBtn>
        </StudioWrapper>
        <FooterWrapper>
          <Foots>사용 약관</Foots>
          <Foots>개인정보처리방침</Foots>
          <Foots>정책 및 안전</Foots>
        </FooterWrapper>
      </UploadPageWrapper>
    );
  }
}

const UploadPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  position: absolute;
`;

const StudioWrapper = styled.div`
  width: 100%;
`;

const PicWrapper = styled.div`
  margin: 80px 24px 0;
`;

const StudioPic = styled.img.attrs({
  src: "https://www.gstatic.com/youtube/img/creator/no_content_illustration.svg"
})``;

const StudioLetter = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-size: 15px;
  font-weight: normal;
  padding: 11px 0 9px;
`;

const UploadBtn = styled.button`
  color: white;
  font-size: 14px;
  background-color: #233e6a;

  height: 36px;
  text-align: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  width: 120px;
  border-style: none;
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
`;

const Foots = styled.p`
  color: rgba(0, 0, 0, 0.55);
  font-size: 13px;
  font-weight: 400;
  margin: 14px 0;
`;

export default AdUpload;
