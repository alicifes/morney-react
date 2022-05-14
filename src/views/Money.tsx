import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagSection} from '../components/Money/TagSection';
import {CategorySection} from '../components/Money/CategorySection';
import {NoteSection} from '../components/Money/NoteSection';
import {NumberPadSection} from '../components/Money/NumberPadSection';
import tags from './Tags';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '+'|'-'
const Money= ()=> {
  const [selected,setSelected] = useState({
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount:0
  })

  return (
    <MyLayout>
      <TagSection value={selected.tags} onChange={(tags)=>setSelected(
        {...selected,tags: tags}
      )}/>
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
}

export default Money