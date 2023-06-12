import React from 'react';
import Main from '../layout/Main';

import SliderSection from '../section/SliderSection';
import IntroSection from '../section/IntroSection';
import MemberSection from '../section/MemberSection';
import PortSection from '../section/PortSection';
import YoutubeSection from '../section/YoutubeSection';
import UnsplashSection from '../section/UnsplashSection';
import MovieSection from '../section/MovieSection';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap nexon7 section'} />
        <IntroSection attr={'intro__wrap gmarket5 section'} />
        <MemberSection attr={'member__wrap gmarket5 section center bg-blue'} />
        <PortSection attr={'port__wrap gmarket5 section center'} />
        <YoutubeSection attr={'youtube__wrap gmarket5 section bg-blue'} />
        <UnsplashSection attr={'unsplash__wrap gmarket5 section'} />
        <MovieSection attr={'movie__wrap gmarket5 section bg-blue'} />
      </Main>
    </>
  );
}

export default Home;
