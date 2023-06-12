import React from 'react';

const youtubeTitle = {
  title: '코딩 유튜버 추천',
  desc: (
    <p>
      노마드 코더, 애플 코딩 등 많은 유튜버들이 있습니다.
      <br />
      함께 공부 합시다.
    </p>
  ),
};

const youtubeItem = [
  {
    img: '../../assets/images/youtube/youtubeImg.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/youtube/youtubeImg02.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/youtube/youtubeImg03.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/youtube/youtubeImg04.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
];

function YoutubeDesc({ img, title, num }) {
  return (
    <div className="youtubeItem__inner">
      <img src={img} alt={title} />
    </div>
  );
}

function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>{youtubeTitle.title}</h3>
          <p>{youtubeTitle.desc}</p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          {youtubeItem.map((text, index) => (
            <YoutubeDesc key={index} img={text.img} title={text.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default YoutubeSection;
