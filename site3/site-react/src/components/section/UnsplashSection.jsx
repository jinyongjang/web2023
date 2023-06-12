import React from 'react';

const unsplashTitle = {
  title: 'Unsplash',
  desc: (
    <p>
      Unsplash에서 다양한 이미지를
      <br />
      무료로 사용할 수 있습니다.
    </p>
  ),
};

const unsplashItem = [
  {
    img: '../../assets/images/unsplash/unsplashImg.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/unsplash/unsplashImg02.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/unsplash/unsplashImg03.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: '../../assets/images/unsplash/unsplashImg04.png',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
];

function UnsplashDesc({ img, title, num }) {
  return (
    <div className="unsplashItem__inner">
      <img src={img} alt={title} />
    </div>
  );
}

function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text ">
          <h3>{unsplashTitle.title}</h3>
          <p>{unsplashTitle.desc}</p>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          {unsplashItem.map((text, index) => (
            <UnsplashDesc key={index} img={text.img} title={text.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UnsplashSection;
