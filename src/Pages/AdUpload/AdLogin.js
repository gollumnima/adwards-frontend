import React, { Component } from "react";
import styled from "styled-components";

class AdLogin extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginForm></LoginForm>
      </LoginWrapper>
    );
  }
}

export default AdLogin;

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(
    to right top,
    #233e6a,
    #44417c,
    #6c3f86,
    #953785,
    #bb2979
  );
`;

const LoginForm = styled.div`
  width: 100%;
`;
