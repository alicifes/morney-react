import {useState} from 'react';
import {createId} from 'lib/createId';


//封装一个自定义Hook
const useTags = () =>{
  const [tags, setTags] = useState<{id:number,name:string}[]>(
    [
      {id:createId(),name:'衣'},
      {id:createId(),name:'食'},
      {id:createId(),name:'住'},
      {id:createId(),name:'行'}]
  )
  return {
    tags,
    setTags
  }
}

export {useTags}