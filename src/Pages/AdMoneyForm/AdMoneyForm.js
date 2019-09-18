import React, { Component } from "react";
import styled from "styled-components";

class AdMoneyForm extends Component {
  render() {
    return (
      <MoneyBox>
        <MoneyLetter ad_price>광고 금액</MoneyLetter>
        <MoneyInput></MoneyInput>
        <CreditBalance>충전금 잔액: 10000원</CreditBalance>
        <MoneyLetter>1 view당 보상 금액</MoneyLetter>
        <RewardInput></RewardInput>
      </MoneyBox>
    );
  }
}

export default AdMoneyForm;

const MoneyBox = styled.div`
  margin-top: 20px;
`;

const MoneyLetter = styled.p`
  margin-top: 20px;
`;

const MoneyInput = styled.input.attrs({
  placeholder: "광고 금액을 입력해주세요"
})`
  width: 350px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

const CreditBalance = styled.p`
  color: #233e6a;
  font-size: 15px;
  margin-top: 5px;
`;

const RewardInput = styled.input`
  width: 350px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #f4f4f4;
`;
