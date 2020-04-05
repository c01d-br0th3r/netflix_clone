import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";
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

const Poster = styled.img`
  width: 150px;
  height: 230px;
  padding: 10px;
`;

const PopularMoviesContainer = () => {
  const popularMovies = useSelector((state) => state.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.popularMoviesActions.fetchPopularMovies());
  }, []);

  console.log(popularMovies);
  const { loading, movies } = popularMovies;
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
          <Title>지금 인기있는 영화</Title>
          <Slider {...settings}>
            {movies.map((m) => (
              <PosterContainer key={m.id}>
                <Poster
                  src={`https://image.tmdb.org/t/p/w400/${m.poster_path}`}
                  alt={m.title}
                />
              </PosterContainer>
            ))}
          </Slider>
        </div>
      )}
    </Container>
  );
};

export default PopularMoviesContainer;
