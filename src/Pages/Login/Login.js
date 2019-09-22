import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
body {
  margin: 0;
  padding: 0;
  width: 100%;
}`;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      EmailValue: "",
      PwValue: "",
      textbox: false,
      message: ""
    };
  }

  changeEmailValue = e => {
    this.setState({
      EmailValue: e.target.value
    });
  };

  changePwValue = e => {
    this.setState({
      PwValue: e.target.value
    });
  };

  clickLogInButton = () => {
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.EmailValue,
        password: this.state.PwValue
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.TOKEN) {
          localStorage.setItem("adwards_token", response.TOKEN);
          this.props.history.push("/");
        } else if (response.message === "INVALID_EMAIL_ADDRESS") {
          this.setState({
            textbox: true,
            message: "아이디 혹은 비밀번호를 확인해주세요."
          });
        }
      });
  };

  render() {
    return (
      <LoginWrap>
        <GlobalStyle />
        <LoginPage>
          <LoginWording>
            <LoginTitleh3>로그인</LoginTitleh3>
          </LoginWording>
          <EmailWrap>이메일</EmailWrap>
          <InputUserEmail onChange={this.changeEmailValue} type="email" />
          <PasswordWrap>패스워드</PasswordWrap>
          <InputUserPassword onChange={this.changePwValue} type="password" />
          <LoginConfirmBtn>
            <LoginButtonClick onClick={this.clickLogInButton}>
              {" "}
              확인{" "}
            </LoginButtonClick>
          </LoginConfirmBtn>
          {this.state.textbox && (
            <LoginMessageWrap>
              <LoginMessageBox>
                <LoginMessageBody>{this.state.message}</LoginMessageBody>
                <LoginTextWrap>
                  <LoginTextbox
                    onClick={() => {
                      this.setState({ textbox: !this.state.textbox });
                    }}
                  >
                    확인
                  </LoginTextbox>
                </LoginTextWrap>
              </LoginMessageBox>
            </LoginMessageWrap>
          )}
        </LoginPage>
      </LoginWrap>
    );
  }
}
const LoginWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
`;

const LoginPage = styled.div`
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  max-width: 690px;
  width: 100%;
  display: flex;
`;

const LoginWording = styled.div``;

const LoginTitleh3 = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const EmailWrap = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const InputUserEmail = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const PasswordWrap = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const InputUserPassword = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;

const LoginConfirmBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60px;
`;
const LoginButtonClick = styled.button`
  width: 35%;
  height: 50px;
  background-color: #233e6a;
  display: inline-block;
  font-size: 1em;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 3px;
  padding: auto;
  color: white;
  border-bottom: 2px solid #233e6a;
  margin-top: 20px;

  :hover {
    background-color: #688ecc;
    border-bottom: 2px solid #688ecc;
    transition: 0.4s background-color;
    cursor: pointer;
  }
`;
const LoginMessageWrap = styled.div``;
const LoginMessageBox = styled.div``;
const LoginMessageBody = styled.p``;
const LoginTextWrap = styled.div``;

const LoginTextbox = styled.button``;

export default withRouter(Login);
