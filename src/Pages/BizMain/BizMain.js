import React, { Component } from "react";
import AdList from "./AdList";
import { Link } from "react-router-dom";
import styled from "styled-components";

class BizMain extends Component {
  render() {
    return (
      <BizMainWrapper>
        <PriceWrapper>
          <div>
            <div>
              <CardImg></CardImg>
            </div>
            <BizLetter light>둘둘님의 충전금 잔액</BizLetter>
            <BizMoney>300,000원</BizMoney>
          </div>
        </PriceWrapper>
        <div>
          <IngAdWrapper>
            <BizLetter>진행중인 광고</BizLetter>
            <AdBox ing>
              <AdList></AdList>
            </AdBox>
          </IngAdWrapper>
          <ExpiredAdWrapper>
            <BizLetter>종료된 광고</BizLetter>
            <AdBox expired>
              <AdList></AdList>
            </AdBox>
          </ExpiredAdWrapper>
        </div>
        <Link to="/ad_upload">
          <BtnWrapper>
            <FloatingBtn>+</FloatingBtn>
          </BtnWrapper>
        </Link>
      </BizMainWrapper>
    );
  }
}

const BizMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  position: absolute;
  box-sizing: border-box;
`;

const PriceWrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 666px;
  margin-left: auto;
  margin-top: 35px;
  margin-right: auto;
  height: 348px;
  text-align: center;
  border-radius: 14px;
  @media (max-width: 375px) {
    margin-top: 0;
    border-radius: 0px;
  }
`;

const CardImg = styled.img.attrs({
  src:
    "https://cdn.pixabay.com/photo/2012/04/01/12/42/credit-card-23250_960_720.png"
})`
  width: 179px;
  margin-top: 35px;
`;
const BizLetter = styled.h2`
  color: #233e6a;
  margin-left: ${props => (props.light ? `null` : `20px`)};
  font-size: ${props => (props.light ? `17px` : `24px`)};
  font-weight: ${props => (props.light ? `normal` : `600`)};
`;

const BizMoney = styled.h2`
  display: contents;
  color: #233e6a;
  font-size: 50px;
  font-weight: 400;
`;
const IngAdWrapper = styled.div`
  max-width: 666px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const AdBox = styled.div`
  opacity: ${props => (props.ing ? `0.8` : `0.4`)};
  margin-left: 15px;
  margin-right: 15px;
`;

const ExpiredAdWrapper = styled.div`
  max-width: 666px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const BtnWrapper = styled.div`
  position: fixed;
  bottom: 22px;
  right: 35px;
`;
const FloatingBtn = styled.button`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  width: 55.5px;
  height: 55.5px;
  display: inline-block;
  outline: 0;
  border: none;
  text-decoration: none;
  background: #bb2979;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;
export default BizMain;
