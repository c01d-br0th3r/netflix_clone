import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  padding: 50px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const PosterContainer = styled.div``;

const Poster = styled.div`
  width: 150px;
  height: 230px;
  background-image: url(${(props) => props.poster});
  background-size: cover;
`;

const Presenter = ({ loading, movies, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
  };
  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Title>{title}</Title>
          <Slider {...settings}>
            {movies.map((m) => (
              <PosterContainer key={m.id}>
                <Poster
                  poster={`https://image.tmdb.org/t/p/w400/${m.poster_path}`}
                />
              </PosterContainer>
            ))}
          </Slider>
        </div>
      )}
    </Container>
  );
};

export default Presenter;
