import React from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import SliderSection from './components/section/SliderSection';
import IntroSection from './components/section/IntroSection';
import MemberSection from './components/section/MemberSection';
import PortSection from './components/section/PortSection';
import YoutubeSection from './components/section/YoutubeSection';
import UnsplashSection from './components/section/UnsplashSection';
import MovieSection from './components/section/MovieSection';

function App() {
  return (
    <>
      <Header attr={['header__wrap', 'gmarket5', 'bg-blue']} />
      <Main>
        <SliderSection attr={'slider__wrap nexon7 section'} />
        <IntroSection attr={'intro__wrap gmarket5 section'} />
        <MemberSection attr={'member__wrap gmarket5 section center bg-blue'} />
        <PortSection attr={'port__wrap gmarket5 section center'} />
        <YoutubeSection attr={'youtube__wrap gmarket5 section bg-blue'} />
        <UnsplashSection attr={'unsplash__wrap gmarket5 section'} />
        <MovieSection attr={'movie__wrap gmarket5 section bg-blue'} />
      </Main>
      <Footer attr={'footer__wrap gmarket5 section'} />
    </>
  );
}
export default App;
