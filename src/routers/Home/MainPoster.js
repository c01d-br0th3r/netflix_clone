import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  padding: 60px;
  width: 100vw;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(18, 18, 18, 1),
      rgba(18, 18, 18, 0) 95%
    ),
    url("https://i.redd.it/jlahbk0nv4f41.png");
  background-size: cover;
  background-position: 40%;
  position: relative;
`;
const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 5%;
  bottom: 28%;
`;
const Original = styled.div`
  width: 460px;
  font-size: 36px;
  font-weight: 500;
  padding: 10px 5px 7px 5px;
  margin-bottom: 35px;
  letter-spacing: 4px;
  opacity: 0.8;
  text-align: right;
`;
const Title = styled.div`
  font-size: 110px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 35px;
  text-align: right;
  font-family: "Noto Serif KR", serif;
`;
const Span = styled.span`
  font-size: 22px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.3)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Bar = styled.div`
  width: 460px;
  height: 3px;
  background: linear-gradient(
    to right,
    rgba(23, 192, 235, 1),
    rgba(23, 192, 235, 0.1)
  );
  position: absolute;
  top: 55px;
`;
const Summary = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
const Button = styled.button`
  margin-left: 20px;
  margin-right: 5px;
  &:nth-child(2) {
    margin-right: 10px;
  }
  &:hover {
    background-color: #f2f2f2;
    color: #020202;
  }
  width: 100px;
  height: 40px;
  border: 3px solid #f2f2f2;
  font-size: 18px;
  font-weight: 500;
  background: none;
  color: #f2f2f2;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 4px;
`;
const ButtonContainer = styled.div`
  display: flex;
`;

const MainPoster = () => {
  return (
    <Backdrop>
      <Container>
        <Original>
          황혼 , <Span>"세상의 윤곽이 흐려지는 시간."</Span>
        </Original>
        <Bar />
        <Title>너의 이름은.</Title>
        <ButtonContainer>
          <Button>
            <i class="fas fa-play" style={{ "margin-right": "7px" }}></i>재생
          </Button>
          <Button>
            <i class="fas fa-cart-plus" style={{ "margin-right": "5px" }}></i>
            찜하기
          </Button>
        </ButtonContainer>
      </Container>
    </Backdrop>
  );
};

export default MainPoster;
