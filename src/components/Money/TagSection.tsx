import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';
import {createId} from '../../lib/createId';

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
  value: number[],
  onChange: (selected: number[]) => void;
}

const TagSection: React.FC<Props> = (props) => {
  //这里可以使用自定义hooks
  const {tags,addTag} = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    if (selectedTagIds.indexOf(tagId) >= 0) {
      props.onChange(selectedTagIds.filter(item => item !== tagId));
      //setSelectedTags(selectedTags.filter(item => item !== tag));
    } else {
      props.onChange([...selectedTagIds, tagId]);
      ///setSelectedTags();
    }
  };
  return <Wrapper>
    <ol>
      {
        tags.map(tag =>
        <li key={tag.id} onClick={() => onToggleTag(tag.id)}
            className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>{tag.name}</li>
      )}
    </ol>
    <button onClick={addTag}>添加标签</button>
  </Wrapper>;
};

export {TagSection};