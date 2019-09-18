import React, { Component } from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
// library.add(faEnvelope, faKey);

class AdSidebar extends Component {
  render() {
    return (
      <SidbarWrapper>
        <SideIconWrapper>
          <SideList>
            <SideIcon className="fab fa-youtube" />
          </SideList>
          <SideList>
            <SideIcon className="far fa-laugh-squint" />
          </SideList>
          <SideList>
            <SideIcon className="fas fa-won-sign" />
          </SideList>
        </SideIconWrapper>
      </SidbarWrapper>
    );
  }
}

export default AdSidebar;

const SidbarWrapper = styled.div`
  width: 55px;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #bdbdbd;
  position: fixed;
  z-index: 1;
`;

const SideIconWrapper = styled.ul`
  width: 100%;
  margin-left: 15px;
`;

const SideList = styled.li``;

const SideIcon = styled.i`
  color: #2d3436;
`;
