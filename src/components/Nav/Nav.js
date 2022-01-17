import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Header>
      <Inner>test Nav 입니다</Inner>
    </Header>
  );
};

export default Nav;

const Header = styled.div`
  background-color: white;
  border-bottom: solid 2px #e8e8e8;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
