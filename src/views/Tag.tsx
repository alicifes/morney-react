import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';


const Topbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px 0;
  background: white;
`;


type Params = {
  id: string
}
const Tag: React.FC = (props) => {
  const {id} = useParams<Params>();
  const {findTag} = useTags();
  const tag = findTag(id);
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编缉标签</span>
        <Icon name=""/>
      </Topbar>
      <label>
        <span>备注</span>
        <input type="text" placeholder="标签名"/>
      </label>
      <div>{tag.name}</div>
      <Button>删除标签</Button>
    </Layout>
  );
};

export {Tag};