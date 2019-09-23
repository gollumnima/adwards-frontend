import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

// const Header = props => {
//   const AdwarsToken = localStorage.getItem("");
// };

// const getToken = () => {
//   if (AdwarsToken) {
//     setToken(!token);
//   }
// };

// const logout = () => {
//   localStorage.clear();
//   setToken(!token);
//   setMessage(!message);
//   setText("로그아웃 되었습니다!");
// };

// const goToHome = () => {
//   props.history.push("/");
// };

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false
    };
    this.token = localStorage.getItem("adwards_token");
  }

  getToken = () => {
    if (this.token) {
      this.setState({
        token: !this.state.token
      });
    }
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      token: !this.state.token
    });
  };
  render() {
    return (
      <BarWrapper>
        <BarLeft>
          <IconWrapper>
            <>
              <Link href="" passHref>
                <AdwardsLogo></AdwardsLogo>
              </Link>
            </>
          </IconWrapper>
        </BarLeft>
        <BarRight>
          <LoginIconWrapper>
            {!this.state.token ? (
              <>
                <Link href="/login" passHref>
                  <UserLogin>
                    <UserIcon></UserIcon>
                    <UserLoginWord>로그인</UserLoginWord>
                  </UserLogin>
                </Link>
              </>
            ) : (
              <>
                <UserIcon onclick={this.logout}>로그아웃</UserIcon>
              </>
            )}
            {/* {message && (
              <LoginMessageWrap>
                <LoginMessageBox>
                  <LoginMessageBody>{messageText}</LoginMessageBody>
                  <ButtonWrap
                    onclick={() => {
                      setMessage(!message);
                    }}
                  >
                    확인
                  </ButtonWrap>
                </LoginMessageBox>
              </LoginMessageWrap>
            )} */}
          </LoginIconWrapper>
        </BarRight>
      </BarWrapper>
    );
  }
}

const BarWrapper = styled.div`
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #bdbdbd;
`;
const BarLeft = styled.div`
  width: 100%;
`;
const BarRight = styled.div`
  width: 100%;
  text-align: right;
`;

const IconWrapper = styled.div`
  margin-top: 10px;
`;

const AdwardsLogo = styled.img.attrs({
  src: require("img/adwardlogo.png")
})`
  vertical-align: middle;
  width: 100px;
`;

const UserLogin = styled.span`
  margin-top: 15px;
  border: 1px solid #233e6a;
  padding: 8px 9px;
`;

const UserIcon = styled.img.attrs({
  src: require("img/user.png")
})`
  height: 100%;
  vertical-align: middle;
  width: 24px;
  height: 24px;
`;

const UserLoginWord = styled.span`
  font-size: 15px;
  margin-left: 8px;
`;
const LoginIconWrapper = styled.div`
  width: 100%;
`;

export default withRouter(TopBar);
