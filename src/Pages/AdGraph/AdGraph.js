import React, { Component } from "react";
import styled from "styled-components";

class AdGraph extends Component {
  render() {
    return (
      <AdGraphWrapper>
        <GraphPageWrapper>
          <H1Wrapper>
            <GraphH1>Adward Report</GraphH1>
          </H1Wrapper>
          <GraphTop>
            <GraphCateUL>
              <GraphCateLI>도시별</GraphCateLI>
              <GraphCateLI>성별</GraphCateLI>
              <GraphCateLI>연령대별</GraphCateLI>
              <GraphCateLI>광고타입별</GraphCateLI>
            </GraphCateUL>
          </GraphTop>
          <GraphDown>
            <GraphBox></GraphBox>
          </GraphDown>
        </GraphPageWrapper>
      </AdGraphWrapper>
    );
  }
}

const AdGraphWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0;
  max-width: 690px;
  margin: 0 auto;
  background-color: #f4f4f4;
  display: flex;
`;

const GraphPageWrapper = styled.div`
  width: 100%;
`;

const H1Wrapper = styled.div`
  background-color: white;
  height: 60px;
  text-align: center;
`;

const GraphH1 = styled.h1`
  font-weight: 400;
  margin-top: 20px;
`;

const GraphTop = styled.div`
  display: flex;
  flex-direction: row;
`;

const GraphDown = styled.div``;

const GraphCateUL = styled.ul``;

const GraphCateLI = styled.li``;

const GraphBox = styled.div``;

export default AdGraph;
