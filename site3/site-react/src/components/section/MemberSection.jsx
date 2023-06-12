import React from 'react';

const memberTitle = {
  title: '멤버 소개',
  desc: '웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.',
};
const memberText = [
  {
    img: '../../assets/images/member/member1.png',
    title: '웹디자이너',
    link: '김고은(31)',
  },
  {
    img: '../../assets/images/member/member2.png',
    title: '웹 퍼블리셔',
    link: '공유(42)',
  },
  {
    img: '../../assets/images/member/member3.png',
    title: '프론트엔드',
    link: '이동욱(38)',
  },
];

function MemberDesc({ img, title, link }) {
  return (
    <article className="member">
      <figure className="member__header">
        <img src={img} alt="멤버" />
      </figure>
      <div className="member__body">
        <h4>{title}</h4>
        <a href="/" className="btn">
          <p className="desc">{link}</p>
        </a>
      </div>
    </article>
  );
}

function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>{memberTitle.title}</h3>
      <p>{memberTitle.desc}</p>
      <div className="member__inner container">
        {memberText.map((text, index) => (
          <MemberDesc
            key={index}
            img={text.img}
            title={text.title}
            link={text.link}
          />
        ))}
      </div>
    </section>
  );
}

export default MemberSection;
