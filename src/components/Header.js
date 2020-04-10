import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vh;
  height: 70px;
  display: flex;
  padding: 10px;
  * {
    margin: 15px;
  }
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-right: 40px;
  color: #e74c3c;
`;
const Menu = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-right: 30px;
`;

const SLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <SLink to="/home">ChanFlix</SLink>
      </Logo>
      <Menu>Movies</Menu>
      <Menu>TV Shows</Menu>
      <Menu>
        <SLink to="/search">Search</SLink>
      </Menu>
    </Container>
  );
};

export default Header;
