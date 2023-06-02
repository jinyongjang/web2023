function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>멤버 소개</h3>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
      <div className="member__inner container">
        <article className="member">
          <figure className="member__header">
            <img src="../../asset/images/member/member1.png" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>웹디자이너</h4>
            <a href="/" className="btn">
              <p className="desc">김고은(31)</p>
            </a>
          </div>
        </article>
        <article className="member">
          <figure className="member__header">
            <img src="../../asset/images/member/member2.png" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>웹 퍼블리셔</h4>
            <a href="/" className="btn">
              <p className="desc">공유(42)</p>
            </a>
          </div>
        </article>
        <article className="member">
          <figure className="member__header">
            <img src="../../asset/images/member/member3.png" alt="멤버" />
          </figure>
          <div className="member__body">
            <h4>프론트엔드</h4>
            <a href="/" className="btn">
              <p className="desc">이동욱(38)</p>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default MemberSection;
