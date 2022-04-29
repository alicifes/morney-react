import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  >ul{
    margin: 0 -12px;
    >li{
      background:#d9d9d9 ;
      padding: 3px 18px;
      display: inline-block;
      border-radius: 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  >button{
    background:none;
    border: none;
    border-bottom: 1px solid #666666;
    padding:0 4px;
    margin-top: 8px;
  }
`
const NoteSection = styled.section`
`

const CategorySection = styled.section`

`
const NumberPadSection=styled.section`
  
`
const Money= ()=> {
  return (
    <Layout>
      <TagSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>添加标签</button>
      </TagSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ol>
          <li>支出</li>
          <li>收入</li>
        </ol>
      </CategorySection>
      <NumberPadSection>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
      </NumberPadSection>
    </Layout>
  );
}

export default Money