import React from 'react';

const introTitle = {
  sub: 'Web Publisher',
  title: (
    <h3>
      프론트앤드
      <br />
      커리큘럼
      <br /> 과정 소개
    </h3>
  ),
  desc: (
    <p>
      웹퍼블리셔 전문과정 프론트엔드
      <br />
      개발자로 취업하기 위한 전문 과정입니다.
    </p>
  ),
};

const introText = [
  {
    iconClass: 'icon-bg1',
    title: '웹 디자인',
    desc: '웹디자인은 웹사이트를 만들기 위해 시각적인 요소와 사용자 경험을 디자인하는 과정을 말합니다. 웹디자인은 웹사이트의 레이아웃, 색상, 그래픽, 폰트, 이미지 등을 결정하는 작업을 포함합니다. 이를 통해 사용자가 웹사이트를 방문했을 때 시각적으로 매력적이고 사용하기 쉽도록 만들어줍니다.',
  },
  {
    iconClass: 'icon-bg2',
    title: '웹 퍼블리셔',
    desc: '웹 퍼블리셔는 디자이너나 개발자가 제공한 디자인 파일이나 프로토타입을 기반으로 웹페이지를 만들고 공개하는 역할을 수행합니다. 웹 퍼블리셔는 HTML, CSS, JavaScript 등의 웹 기술을 사용하여 디자인을 웹사이트로 구현하고, 브라우저에서 올바르게 작동하도록 합니다.',
  },
  {
    iconClass: 'icon-bg3',
    title: 'React.js',
    desc: 'React.js는 사용자 인터페이스(UI)를 구축하기 위한 JavaScript 라이브러리입니다. 페이스북에서 개발하였으며, 단일 페이지 애플리케이션(SPAs) 및 대규모 애플리케이션 개발에 주로 사용됩니다.',
  },
  {
    iconClass: 'icon-bg4',
    title: 'Vue.js',
    desc: 'Vue.js는 사용자 인터페이스(UI)를 구축하기 위한 프로그레시브 프레임워크입니다. Vue.js는 사용자 인터페이스를개발하기 위한 JavaScript 프레임워크로, 가볍고 유연한 구조를 가지고 있으며, 단일 페이지 애플리케이션(SPAs) 및 웹 애플리케이션의 개발에 주로 사용됩니다.',
  },
];

function IntroDesc({ iconClass, title, desc }) {
  return (
    <div>
      <h4 className={iconClass}>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function IntroSection(props) {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">프론트앤드 커리큘럼 과정 소개</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>{introTitle.sub}</span>
          <>{introTitle.title}</>
          <>{introTitle.desc}</>
        </div>
        <div className="intro__desc">
          {introText.map((text, index) => (
            <IntroDesc
              key={index}
              iconClass={text.iconClass}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
