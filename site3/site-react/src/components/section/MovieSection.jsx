import React from 'react';

const movieTitle = {
  title: '코딩 추천 영화',
  desc: (
    <p>
      Netflix와 Youtube등 다양한 경로에서
      <br />
      코딩 관련 영화를 시청할 수 있습니다.
    </p>
  ),
};

const movieItem = [
  {
    img: './assets/images/movie/movieImg.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movieImg02.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movieImg03.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movieImg04.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
];

function MovieDesc({ img, title, num }) {
  return (
    <div className="movieItem__inner">
      <img src={img} alt={title} />
    </div>
  );
}

function MovieSection(props) {
  return (
    <section id="moviesSection" className={props.attr}>
      <div className="movie__inner">
        <div className="movie__inner container">
          <div className="movie__text">
            <h3>{movieTitle.title}</h3>
            <p>{movieTitle.desc}</p>
            <a href="/" className="button-green">
              자세히 보기
            </a>
          </div>
          <div className="movie__item">
            {movieItem.map((text, index) => (
              <MovieDesc key={index} img={text.img} title={text.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieSection;
