import React, { Component } from "react";
import styled from "styled-components";

class WatchContent extends Component {
  render() {
    return (
      <WatchVideoWrap>
        <ContentVideoWrap>Video</ContentVideoWrap>
      </WatchVideoWrap>
    );
  }
}

const WatchVideoWrap = styled.div`
  max-width: 690px;
  width: 100%;
  border: 1px solid green;
`;

const ContentVideoWrap = styled.div`
  width: 80%;
  border: 1px solid green;
  width: 357px;
`;

export default WatchContent;
