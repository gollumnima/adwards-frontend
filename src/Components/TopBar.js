import React, { Component } from "react";
import styled from "styled-components";

class TopBar extends Component {
  render() {
    return (
      <BarWrapper>
        <BarLeft>
          <IconWrapper>
            <MenuIcon></MenuIcon>
            <AdwardLogo></AdwardLogo>
          </IconWrapper>
        </BarLeft>
        <BarRight>
          <IconWrapper>
            <BellIcon></BellIcon>
            <UserIcon></UserIcon>
          </IconWrapper>
        </BarRight>
      </BarWrapper>
    );
  }
}

export default TopBar;

const BarWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #bdbdbd;
`;
const BarLeft = styled.div`
  width: 100%;
  height: 56px;
`;
const BarRight = styled.div`
  width: 100%;
  height: 56px;
  text-align: right;
`;

const MenuIcon = styled.img.attrs({
  src: require("../img/menu.png")
})`
  height: 100%;
  vertical-align: middle;
  margin: 0 16px 0 0;
  width: 20px;
`;

const AdwardLogo = styled.img.attrs({
  src: require("../img/adwardlogo.png")
})`
  vertical-align: middle;
  width: 100px;
`;

const BellIcon = styled.img.attrs({
  src: require("../img/bell.png")
})`
  height: 100%;
  vertical-align: middle;
  width: 30px;
`;

const UserIcon = styled.img.attrs({
  src: require("../img/user.png")
})`
  height: 100%;
  vertical-align: middle;
  margin: 0 16px 0 0;
  width: 30px;
  padding: 0 20px;
`;

const IconWrapper = styled.div`
  width: 100%;
  margin: 12px 0px;
`;
