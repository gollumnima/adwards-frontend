import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      user_name: "",
      nickname: "",
      email: "",
      password: "",
      age: "",
      state_id: "",
      gender_id: "",
      cellphone: "",
      bank_id: "",
      account_owner: "",
      account_number: "",
      message: false
    };
  }

  clickSignupBtn = async () => {
    const {
      user_name,
      nickname,
      email,
      password,
      age,
      state_id,
      gender_id,
      cellphone,
      account_owner,
      account_number
    } = this.state;

    if (user_name.length === 0) {
      alert("Plz write your name");
      return;
    }

    if (nickname.length === 0) {
      alert("Plz write your nickname");
      return;
    }

    if (email.length === 0) {
      alert("Plz write your email address");
      return;
    }

    if (password.length === 0) {
      alert("Plz write your password");
      return;
    }

    if (age.length === 0) {
      alert("Plz write your password");
      return;
    }
    if (state_id.length === 0) {
      alert("Plz write your password");
      return;
    }
    if (gender_id.length === 0) {
      alert("Plz write your password");
      return;
    }
    if (cellphone.length === 0) {
      alert("Plz write your cellphone number");
      return;
    }
    if (account_owner.length === 0) {
      alert("Plz write bank account owner");
      return;
    }
    if (account_number.length === 0) {
      alert("Plz write bank account number");
      return;
    }

    fetch("", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        user_name: this.state.user_name,
        nickname: this.state.nickname,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        state_id: this.state.state_id,
        gender_id: this.state.gender_id,
        cellphone: this.state.cellphone,
        bank_id: this.state.bank_id,
        account_owner: this.state.account_owner,
        account_number: this.state.account_number
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === "SUCCESS") {
          this.props.history.push("/login");
        } else {
          alert(response.message);
        }
      });
  };

  componentDidMount() {}

  setUserName = e => {
    this.setState({ user_name: e.target.value });
  };

  setNickName = e => {
    this.setState({ nickname: e.target.value });
  };

  setEmail = e => {
    this.setState({ email: e.target.value });
  };

  setPassword = e => {
    this.setState({ password: e.target.value });
  };

  setAge = e => {
    this.setState({ age: e.target.value });
  };

  setState_id = e => {
    this.setState({ state_id: e.target.value });
  };

  setCellphone = e => {
    this.setState({ cellphone: e.target.value });
  };

  setBank_id = e => {
    this.setState({ bank_id: e.target.value });
  };

  setAccount_owner = e => {
    this.setState({ account_owner: e.target.value });
  };

  setAccount_number = e => {
    this.setState({ account_number: e.target.value });
  };

  render() {
    return (
      <SignupPageWrapper>
        <GlobalStyle />
        <InputUserInfoWrapper>
          <SignupTitleBox>
            <SignupTitleh1>회원가입</SignupTitleh1>
          </SignupTitleBox>
          <SignupUserNickname>별명</SignupUserNickname>
          <SignupInputNicknameType
            type="text"
            value={this.state.Nickname}
            maxLength="20"
            onChange={this.setNickname}
          />
          <SignupUserEmail>이메일</SignupUserEmail>
          <SignupInputEmailType
            type="Email"
            value={this.state.Email}
            maxLength="20"
            onChange={this.setEmail}
          />
          <SignupUserPassword>패스워드</SignupUserPassword>
          <SignupInputPasswordType
            type="Password"
            value={this.state.Password}
            maxLength="20"
            onChange={this.setPassword}
          />
          <SignupUserName>이름</SignupUserName>
          <SignupInputNameType
            type="text"
            value={this.state.Name}
            maxLength="20"
            onChange={this.setName}
          />
          <SignupUserAge>나이</SignupUserAge>
          <SignupInputAgeType
            type="age"
            value={this.state.Age}
            maxLength="10"
            onChange={this.setAge}
          />
          <SignupUserCellphone>휴대번호</SignupUserCellphone>
          <SignupInputCellphoneType
            type="cellphone"
            value={this.state.cellphone}
            maxLength="20"
            onChange={this.setCellphone}
          />
          <SignupUserBankAccountOwner>계좌주</SignupUserBankAccountOwner>
          <SignupInputBankAccountOwnerType
            type="text"
            value={this.state.AccountOwner}
            maxLength="20"
            onChange={this.setAccountOwner}
          />
          <SignupUserBankAccount>계좌 번호</SignupUserBankAccount>
          <SignupInputBankAccountType
            type="text"
            value={this.state.AccountNumber}
            maxLength="20"
            onChange={this.setAccountNumber}
          />
          <Select>
            <option value="1">국민은행</option>
            <option value="2">신한은행</option>
            <option value="3">하나은행</option>
            <option value="4">우리은행</option>
            <option value="5">은행</option>
            <option value="bankname" selected>
              은행명
            </option>
          </Select>

          <Select>
            <option value="1">경기도</option>
            <option value="2">서울특별시</option>
            <option value="3">인천광역시</option>
            <option value="4">부산광역시</option>
            <option value="5">경상북도</option>
            <option value="6">경상남도</option>
            <option value="7">제주도</option>
            <option value="8">충청북도</option>
            <option value="9">충청남도</option>
            <option value="10">전라북도</option>
            <option value="11">전라남도</option>
            <option value="place" selected>
              지역
            </option>
          </Select>

          <Select>
            <option value="1">남</option>
            <option value="2">여</option>
            <option value="gender" selected>
              성별
            </option>
          </Select>

          <CreateAccount>
            <NewAccountButton
              type="button"
              value="Register"
              onClick={this.clickSignupBtn}
            >
              확인
            </NewAccountButton>
          </CreateAccount>
        </InputUserInfoWrapper>
      </SignupPageWrapper>
    );
  }
}

const Select = styled.select`
  width: 40%;
  height: 50px;
  margin-top: 10px;
`;

const SignupPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GlobalStyle = createGlobalStyle`
  ${reset};
body {
    margin: 0;
    padding: 0;
    width: 100%;
}`;
const InputUserInfoWrapper = styled.div`
  display: flex;
  max-width: 690px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;
const SignupTitleBox = styled.div``;
const SignupTitleh1 = styled.h1`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
`;
const SignupUserNickname = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const SignupInputNicknameType = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const SignupUserEmail = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const SignupInputEmailType = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const SignupUserPassword = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const SignupInputPasswordType = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const SignupUserName = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const SignupInputNameType = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const SignupUserAge = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const SignupInputAgeType = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const SignupUserCellphone = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const SignupInputCellphoneType = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const SignupUserBankAccount = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const SignupInputBankAccountType = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const SignupUserBankAccountOwner = styled.div`
  font-size: 17px;
  width: 40%;
  margin-bottom: 3px;
`;
const SignupInputBankAccountOwnerType = styled.input`
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
`;
const CreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60px;
`;
const NewAccountButton = styled.button`
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

export default withRouter(Signup);
