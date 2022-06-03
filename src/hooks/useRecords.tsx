import React, {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type newRecordItem = {
  tagIds: number[],
  note: string,
  category: '+' | '-',
  amount: number,
}

type RecordItem =newRecordItem & {
  createdAt:string
}

//这里的写法是忽略ReactedItem里面的createdAt属性
//type newRecordItem = Omit<RecordItem, createdAt>


const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
  },[])

  //当record二次更新之后，就会存入（第一次是从und=>[],第二次是从[]=>[sdasd]
  useUpdate(()=>{
   window.localStorage.setItem('records',JSON.stringify(records))
  },[records])

  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord,createdAt:(new Date()).toISOString()}
    setRecords([...records, record]);
  };
  return {records,addRecord};
};

export {useRecords};