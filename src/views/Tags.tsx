import Layout from 'components/Layout';
import {useTags} from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import React from 'react';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

const TagList = styled.ol`
  background: white;
  font-size: 16px;

  > li {
    padding: 12px 16px 12px 0;
    line-height: 20px;
    margin-left: 16px;
    border-bottom: 1px solid #bcbbc1;

    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Tags: React.FC = () => {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={`/tags/${tag.id}`}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Space/>
      <Space/>
      <Space/>
      <Center>
        <Button onClick={addTag}>新建标签</Button>
      </Center>
    </Layout>
  );
};

export {Tags};