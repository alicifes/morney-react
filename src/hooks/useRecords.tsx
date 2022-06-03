import React, {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds: number[],
  note: string,
  category: '+' | '-',
  amount: number
}

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
  },[])

  //当record二次更新之后，就会存入（第一次是从und=>[],第二次是从[]=>[sdasd]
  useUpdate(()=>{
   window.localStorage.setItem('records',JSON.stringify(records))
  },[records])

  const addRecord = (selected: RecordItem) => {
    setRecords([...records, selected]);
  };
  return {records,addRecord};
};

export {useRecords};