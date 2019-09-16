import React, { Component } from "react";
import styled from "styled-components";

class AdUpload extends Component {
  render() {
    return (
      <UploadPageWrapper>
        <StudioWrapper>
          <StudioPic></StudioPic>
        </StudioWrapper>
      </UploadPageWrapper>
    );
  }
}

export default AdUpload;

const UploadPageWrapper = styled.div``;

const StudioWrapper = styled.div``;

const StudioPic = styled.div``;
