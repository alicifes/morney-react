import React, {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type newRecordItem = {
  tagIds: number[],
  note: string,
  category: '+' | '-',
  amount: number,
}

export type RecordItem = newRecordItem & {
  createdAt: string
}

//这里的写法是忽略ReactedItem里面的createdAt属性
//type newRecordItem = Omit<RecordItem, createdAt>


const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  //当record二次更新之后，就会存入（第一次是从und=>[],第二次是从[]=>[sdasd]
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (newRecord.tagIds.length <= 0) {
      alert('请选择标签');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };
  return {records, addRecord};
};

export {useRecords};