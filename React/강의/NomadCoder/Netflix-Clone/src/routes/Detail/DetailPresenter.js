import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const IMDBLink = styled.a`
  margin-left: 10px;
  background-color: #e2b615;
  font-weight: 900;
  border: none;
  border-radius: 2px;
  color: black;
  padding: 1px;
`;

const Homepage = styled.a`
  margin-left: 10px;
  background-color: tomato;
  color: black;
  font-weight: 700;
  border-radius: 2px;
  padding: 1px;
`;

const YoutubeVideo = styled.iframe`
  width: 50%;
  height: 50%;
  margin-top: 100px;
`;

const ProductCompany = styled.img`
  margin-left: 10px;
  width: 50px;
  height: 14px;
  background-color: white;
  border-radius: 2px;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>로딩 - 넷플릭스</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#e74c3c" text={error} />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} - 넷플릭스</title>
      </Helmet>
      <BackDrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} 분
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            {result.imdb_id && (
              <IMDBLink
                href={`https://www.imdb.com/title/${result.imdb_id}`}
                target="_blank"
              >
                IMDb
              </IMDBLink>
            )}
            {result.homepage && (
              <Homepage href={result.homepage} target="_blank">
                공식 홈페이지
              </Homepage>
            )}
            {result.production_companies[0].logo_path ? (
              <ProductCompany
                src={`https://image.tmdb.org/t/p/w300${result.production_companies[0].logo_path}`}
              />
            ) : (
              <p></p>
            )}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {result.videos.results[0] ? (
            <YoutubeVideo
              type="text/html"
              src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <p></p>
          )}
        </Data>
      </Content>
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
