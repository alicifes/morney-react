import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagSection} from '../components/Money/TagSection';
import {CategorySection} from '../components/Money/CategorySection';
import {NoteSection} from '../components/Money/NoteSection';
import {NumberPadSection} from '../components/Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Money= ()=> {
  return (
    <MyLayout>
      <TagSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
}

export default Money