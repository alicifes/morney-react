import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  >ol{
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
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      height: 72px;
      width: 100%;
      border:none;
      background: none;
    }
  }
`

const CategorySection = styled.section`
  >ol{
    display: flex;
    font-size: 24px;
    background: #C4C4C4;
    >li{
      text-align: center;
      width: 50%;
      padding:21px 0;
      position: relative;
      &.selected::after{
        content: "";
        position: absolute;
        height: 3px;
        background:#2d2d2d;
        width: 100%;
        display: block;
        bottom: 0;
        left: 0;
      }
    }
  }
`
const NumberPadSection=styled.section`
  
`
const Money= ()=> {
  return (
    <Layout>
      <TagSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>添加标签</button>
      </TagSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ol>
          <li className="selected">支出</li>
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