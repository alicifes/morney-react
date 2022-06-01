//这里一定要是不可变数据,tag change
import {useEffect, useRef} from 'react';

const useUpdate = (fn:()=>void,deps:any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
     if (count.current > 1) {
       fn()
       //window.localStorage.setItem('tags', JSON.stringify(tags));
     }
  }, deps);
};
export {useUpdate}
