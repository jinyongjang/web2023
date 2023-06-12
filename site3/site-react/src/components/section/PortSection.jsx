import React from 'react';

const portTitle = {
  title: '쉬어가기 꽃 소개',
  desc: '꽃은 아름다움과 향기로운 특징을 지니며, 심신 안정과 안락함을 전해주는 자연의 아름다운 선물입니다.',
};

const portText = [
  {
    portImg: '../../assets/images/port/portImg01.svg',
    iconImg: '../../assets/images/port/memberIcon01.png',
    title: '국화',
    desc: '우아하고 아름다운 꽃으로, 전통적인 아시아 문화에서 미를 상징',
  },
  {
    portImg: '../../assets/images/port/portImg02.svg',
    iconImg: '../../assets/images/port/memberIcon01.png',
    title: '데이지',
    desc: '신선하고 밝은 느낌을 주는 꽃으로,순수함과 희망을 상징',
  },
  {
    portImg: '../../assets/images/port/portImg03.svg',
    iconImg: '../../assets/images/port/memberIcon01.png',
    title: '장미',
    desc: '사랑과 열정을 상징하는 아름다운 꽃으로,그 향기와 우아함으로 인기있는 꽃',
  },
  {
    portImg: '../../assets/images/port/portImg04.svg',
    iconImg: '../../assets/images/port/memberIcon01.png',
    title: '제비꽃',
    desc: '자유로움과 희망을 상징하는 아름다운 꽃',
  },
  {
    portImg: '../../assets/images/port/portImg05.svg',
    iconImg: '../../assets/images/port/memberIcon01.png',
    title: '아이리스',
    desc: '꽃잎과 섬세한 모양으로 유명한 꽃으로,우아함과 지혜를 상징하는 꽃',
  },
  {
    portImg: '../../assets/images/port/portImg06.svg',
    iconImg: '../../assets/images/port/memberIcon01.png',
    title: '벚꽃',
    desc: '아름다운 분홍빛 꽃을 피우며,잠시동안만 지속되는 아름다운 순간을 상징하는 꽃',
  },
];

function PortDesc({ portImg, iconImg, title, desc }) {
  return (
    <div className="port">
      <figure className="port__header">
        <img src={portImg} alt="포트폴리오 이미지" />
      </figure>
      <div className="port__body">
        <div className="pic">
          <img src={iconImg} alt="멤버 이미지" />
        </div>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>{portTitle.title}</h3>
      <p>{portTitle.desc}</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li>
              <a href="/">봄</a>
            </li>
            <li>
              <a href="/">여름</a>
            </li>
            <li>
              <a href="/">가을</a>
            </li>
            <li>
              <a href="/">겨울</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          {portText.map((text, index) => (
            <PortDesc
              key={index}
              portImg={text.portImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortSection;
