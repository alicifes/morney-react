import styled from 'styled-components';
import React, {useState} from 'react';

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

      &.selected {
        background: red;
      }
    }
  }

  > button {
    border: none;
    background: none;
    border-bottom: 1px solid #666666;
    padding: 0 4px;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[],
  onChange: (selected: string[]) => void;
}

const TagSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const selectedTags = props.value
  const onAddTag = () => {
    const tagName = window.prompt('请输入您想添加的标签');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      props.onChange(selectedTags.filter(item => item!==tag));
     //setSelectedTags(selectedTags.filter(item => item !== tag));
    } else {
      props.onChange([...selectedTags, tag])
      ///setSelectedTags();
    }
  };
  return <Wrapper>
    <ol>
      {tags.map(tag =>
        <li key={tag} onClick={() => onToggleTag(tag)}
            className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}>{tag}</li>
      )}
    </ol>
    <button onClick={onAddTag}>添加标签</button>
  </Wrapper>;
};

export {TagSection};