import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  padding: 60px;
  width: 100vw;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(
      to top,
      rgba(18, 18, 18, 1),
      rgba(18, 18, 18, 0) 95%
    ),
    url("https://image.tmdb.org/t/p/original/kkm4UQdZveEqkDEubmWxa16z8lX.jpg");
  background-size: cover;
`;
const Original = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 3px;
  letter-spacing: 3px;
  opacity: 0.8;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 65px;
  opacity: 0.8;
`;
const Span = styled.span`
  color: #70a1ff;
`;
const Summary = styled.div`
  width: 340px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 10px;
  margin-bottom: 10px;
  padding: 0 0 10px 3px;
  border-bottom: 2px solid #c2c2c2;
  display: flex;
  justify-content: center;
`;

const MainPoster = () => {
  return (
    <Backdrop>
      <Original>
        いつかこの恋を思い出してきっと<Span>泣いて</Span>しまう
      </Original>
      <Title>
        언젠가 이 사랑을 떠올리면
        <br />
        분명 <Span>울어버릴 것</Span> 같아.
      </Title>
      <Summary>사랑, 이별, 그리고 청춘.</Summary>
    </Backdrop>
  );
};

export default MainPoster;
