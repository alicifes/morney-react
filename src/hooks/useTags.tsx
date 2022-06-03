import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './useUpdate';

//封装一个自定义Hook
const useTags = () => {
  //这里tags一开始是undefined，在setState之后会变为[],这里有一次多余的操作，使用useRef来进行解决
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  //after mount
  //组件挂载时执行
  useEffect(()=>{
    let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]');
    if(localTags.length===0){
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ];
    }
    setTags(localTags)
  },[])
  //这里通过封装排除了第一次更新
 useUpdate(()=>{window.localStorage.setItem('tags', JSON.stringify(tags))},[tags])
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const addTag = () => {
    const tagName = window.prompt('请输入您想添加的标签');
    if (tagName !== null&&tagName!=='') {
      setTags([...tags, {id:createId(),name:tagName}]);
    }
  }
  const updateTag = (id: number, obj: { name: string }) => {
    // const tagClone = JSON.parse(JSON.stringify(tags));
    // const index = findTagIndex(id);
    // tagClone.splice(index, 1, {id, name: obj.name});
    // setTags(tagClone);
    setTags(tags.map(tag=> tag.id===id?{id,name:obj.name}:tag))
  };
  const deleteTag = (id: number) => {
    // const tagClone = JSON.parse(JSON.stringify(tags));
    // const index = findTagIndex(id);
    // tagClone.splice(index, 1);
    // setTags(tagClone)
    setTags(tags.filter(tag => tag.id !== id));
  };

  return {
    tags,
    addTag,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag
  };
};

export {useTags};