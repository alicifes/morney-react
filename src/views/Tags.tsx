import Layout from '../components/Layout';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';


const TagList = styled.ol`
  background: white;
  font-size: 16px;

  > li {
    padding: 12px 16px 16px 0;
    margin-left: 16px;
    border-bottom: 1px solid #bcbbc1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Button = styled.button`
  font-size: 18px;
  line-height: 22px;
  padding: 9px 16px;
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

const Tags = () => {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <div>
              <Icon name="right"/>
            </div>
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

export default Tags;