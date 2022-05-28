import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  //> label {
  //  display: flex;
  //  align-items: center;
  //
  //  > span {
  //    margin-right: 16px;
  //    white-space: nowrap;
  //  }
  //
  //  > input {
  //    display: block;
  //    height: 72px;
  //    width: 100%;
  //    border: none;
  //    background: none;
  //  }
  //}
`;
//受控组件的写法
//
// const NoteSection:React.FC = () =>{
//  const [note,setNote]= useState("")
//   return <Wrapper>
//     <label>
//       <span>备注</span>
//       <input type="text" value={note} placeholder="在这里添加备注" onChange={(e)=>setNote(e.target.value)}/>
//     </label>
//   </Wrapper>
// }

//非受控组件
type Props = {
  value:string,
  onChange:(note:string)=>void,
}

const NoteSection: React.FC<Props> = (props) => {
  const note =props.value;
  //const [note,setNote] = useState("");
  //const refInput =useRef<HTMLInputElement>(null);
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    //if(refInput.current!==null){
      props.onChange(e.target.value)
      //setNote(refInput.current.value);
  }
  return <Wrapper>
    <Input label="备注" type="text" defaultValue={note} placeholder="在这里添加备注" onChange={onChange}/>
    {/*<label>*/}
    {/*  <span>备注</span>*/}
    {/*  <input type="text" defaultValue={note}  ref={refInput} placeholder="在这里添加备注" onBlur={onBlur} />*/}
    {/*</label>*/}
  </Wrapper>;
};
export {NoteSection};