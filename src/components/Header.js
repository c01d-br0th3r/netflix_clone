import React from "react";
import styled from "styled-components";

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

const Header = () => {
  return (
    <Container>
      <Logo>ChanFlix</Logo>
      <Menu>Movies</Menu>
      <Menu>TV Shows</Menu>
      <Menu>Search</Menu>
    </Container>
  );
};

export default Header;
