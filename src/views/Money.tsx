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
    amount: 0
  });

  //可以使用type of获取值的类型
  //Partial 表示值的部分类型
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  return (
    <MyLayout>
      <TagSection value={selected.tags} onChange={tags => onChange({tags})}/>
      <NoteSection value={selected.note} onChange={note => onChange({note})}/>
      <CategorySection value={selected.category} onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})} onOk={() => {}}/>
    </MyLayout>
  );
};

export default Money;