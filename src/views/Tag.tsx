import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';

type Params = {
  id:string
}
const Tag: React.FC = (props) => {
  const {id} = useParams<Params>();
  const {findTag} = useTags();
  const tag = findTag(id);
  return (
    <div>{tag.name}</div>
  );
};

export {Tag};