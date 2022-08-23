import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've pretty good experience with
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End and Back-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React.js, Node.js and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>Data Structures and Algorithms</ListTitle>
        <ListParagraph>
          Experience with <br/>
          C,  C++,  Python
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem"/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br/>
          tools like Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
