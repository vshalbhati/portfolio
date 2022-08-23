import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! it's me <br/>
        Vishal Bhati
      </SectionTitle>
      <SectionText>
        An enthusiastic product developer. I've been a computer nerd since i was 13. 
      </SectionText>
      <SectionText>
        Scroll to know more
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;