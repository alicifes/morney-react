import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  flex-grow: 1;
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #d9d9d9;
      padding: 3px 18px;
      display: inline-block;
      border-radius: 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    border-bottom: 1px solid #666666;
    padding: 0 4px;
    margin-top: 8px;
  }
`;
const TagSection: React.FC = (props) => {
  const [tags,setTags] = React.useState<string[]>(['衣', '食', '住', '行']);
  const onAddTag = () => {
    const tagName = window.prompt("请输入您想添加的标签")
    if(tagName !== null){
     setTags([...tags,tagName])
    }
  };
  return <Wrapper>
    <ol>
      {tags.map(tag =>
        <li key={tag}>{tag}</li>
      )}
    </ol>
    <button onClick={onAddTag}>添加标签</button>
  </Wrapper>;
};

export {TagSection};