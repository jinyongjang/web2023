gsap.registerPlugin(ScrollTrigger);

// 특정 스크롤 값에 대한 임계값을 설정합니다.
var scrollThreshold = 500;

// skillRight 요소에 대한 gsap 애니메이션을 정의합니다.
gsap.from('.skillRight', {
  x: '100%',
  opacity: 0,
  scrollTrigger: {
    trigger: '.skillRight',
    start: 'top center', // 스크롤 시작 지점
    end: `+=${scrollThreshold}`, // 스크롤 임계값
    scrub: true // 스크롤에 따라 애니메이션을 부드럽게 조정
  }
});