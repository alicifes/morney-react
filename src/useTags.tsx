import {useState} from 'react';
import {createId} from 'lib/createId';

const defaultTags = [
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'}]
//封装一个自定义Hook
const useTags = () =>{
  const [tags, setTags] = useState<{id:number,name:string}[]>(defaultTags)
  const findTag = (id:number) => tags.filter(tag=>tag.id===id)[0]
  const findTagIndex = (id:number)=>{
    let result = -1;
    for(let i = 0;i<tags.length;i++){
      if(tags[i].id===id){
        result=i;
        break
      }
    }
    return result
  }
  const tagClone =JSON.parse(JSON.stringify(tags));
  const updateTag =(id:number,obj:{name:string})=>{
   const index = findTagIndex(id);
   tagClone.splice(index,1,{id,name:obj.name})
   setTags(tagClone)
  }
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
  }
}

export {useTags}