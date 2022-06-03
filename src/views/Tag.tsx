import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {useTags} from 'hooks/useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';


const Topbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px 0;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
  id: string
}
const Tag: React.FC = (props) => {
  const {id: idString} = useParams<Params>();
  const {findTag, updateTag, deleteTag} = useTags();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number, name: string }) => {
    return (
      <div>
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
                 onChange={(e) => {
                   updateTag(tag.id, {name: e.target.value});
                 }}/>
        </InputWrapper>
        <Space/>
        <Space/>
        <Space/>
        <Center>
          <Button onClick={() => {deleteTag(tag.id);}}>删除标签</Button>
        </Center>
      </div>
    );
  };

  const history = useHistory();
  const onClickBack = ()=>{
    //使用react自带的api
    history.goBack();
    //window.history.back();
  }
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编缉标签</span>
        <Icon name=""/>
      </Topbar>
      {tag ? tagContent(tag) : <div><Center>这里没有内容了</Center></div>}
    </Layout>
  );
};

export {Tag};