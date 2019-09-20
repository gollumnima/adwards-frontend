import React, { Component } from "react";
import styled from "styled-components";

class AdGraph extends Component {
  render() {
    return (
      <StatsWrapper>
        <GraphPageWrapper>
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
      </StatsWrapper>
    );
  }
}

const StatsWrapper = styled.div`
  width: 100%;
  background-color: #e2e2e2;
`;

const GraphPageWrapper = styled.div`
  width: 100%;
`;

const GraphTop = styled.div``;

const GraphDown = styled.div``;

const GraphCateUL = styled.ul``;

const GraphCateLI = styled.li``;

const GraphBox = styled.div``;

export default AdGraph;
