import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

const options = {
  title: {
    text: "Test chart"
  },
  series: [
    {
      data: [1, 2, 3]
    }
  ]
};

class AdChart extends Component {
  render() {
    return (
      <Wrapper>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  position: absolute;
`;

export default AdChart;
