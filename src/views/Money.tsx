import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagSection} from '../components/Money/TagSection';
import {CategorySection} from '../components/Money/CategorySection';
import {NoteSection} from '../components/Money/NoteSection';
import {NumberPadSection} from '../components/Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '+' | '-'
const Money = () => {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount:'0'
  });

  return (
    <MyLayout>
      <TagSection value={selected.tags} onChange={(tags) => setSelected(
        {...selected, tags: tags}
      )}/>
      <NoteSection value={selected.note} onChange={(note) => setSelected(
        {...selected, note: note})}/>
      <CategorySection value={selected.category} onChange={(category:('+'|'-')) => setSelected(
        {...selected, category: category}
      )}/>
      <NumberPadSection value={selected.amount} onChange={(amount:string)=>setSelected(
        {...selected,amount:amount}
      )}/>
    </MyLayout>
  );
};

export default Money;