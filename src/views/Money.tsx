import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  flex-grow: 1;
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
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
  >.output{
    background: #ffffff;
    font-size: 32px;
    line-height: 72px;
    padding:0 16px ;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25)
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  >.pad{
    >button {
      float: left;
      font-size: 18px;
      border: none;
      height: 64px;
      width: 25%;

      &.ok {
        float: right;
        height: 128px;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #E0E0E0;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #D3D3D3;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #C1C1C1;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #B8B8B8;
      }

      &:nth-child(12) {
        background: #9A9A9A;
      }

      &:nth-child(14) {
        background: #A9A9A9;
     }
    }
  }
`

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`



const Money= ()=> {
  return (
    <MyLayout>
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
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
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
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money