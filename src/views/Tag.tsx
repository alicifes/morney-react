import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';

type Params = {
  id:string
}
const Tag: React.FC = (props) => {
  const {id} = useParams<Params>();
  const {tags} = useTags()
  const tag = tags.filter(tag => tag.id === parseInt(id))[0]
  return (
    <div>{tag.name}</div>
  );
};

export {Tag};