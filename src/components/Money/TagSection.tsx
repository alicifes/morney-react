import styled from 'styled-components';
import React from 'react';

const _TagSection = styled.section`
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
const TagSection:React.FC = () =>{
 return <_TagSection>
   <ol>
     <li>衣</li>
     <li>食</li>
     <li>住</li>
     <li>行</li>
   </ol>
   <button>添加标签</button>
 </_TagSection>
}

export {TagSection}