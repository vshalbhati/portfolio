import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {

  return (
    <div className='about' id='time'>
      <h1>About Me</h1>
      <p><h2>Hey There! </h2><br/> I'm an undergraduate student at National Institute of Technology, Kurukshetra. I'm an aspiring and an efficient software engineer. I'm passionate for developing and designing products. </p>  
    </div>
  );
};

export default Timeline;
