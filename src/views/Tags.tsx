import Layout from '../components/Layout';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import React from 'react';


const TagList = styled.ol`
  background: white;
  font-size: 16px;

  > li {
    padding: 12px 16px 12px 0;
    line-height: 20px;
    margin-left: 16px;
    border-bottom: 1px solid #bcbbc1;
    >a{
      display: flex;
      justify-content: space-between;
      align-items: center;  
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  line-height: 22px;
  padding: 8px 12px;
  border:none;
  color: white;
  background: #767676;
  border-radius: 4px 
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Space = styled.div`
  height: 16px;
`

const Tags:React.FC = () => {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <Link to={`/tags/${tag}`}>
              <span className="oneLine">{tag}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Space />
      <Space />
      <Space />
      <Center>
        <Button>新建标签</Button>
      </Center>
    </Layout>
  );
};

export {Tags};