import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block;
    height: 44px;
    width: 100%;
    border: none;
    background: none;
  }`;

type Props = {
  label: string,
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  const {label,children,...rest} = props;
  return (
    <Label>
      <span>{label}</span>
      {/*<input type="text" defaultValue={note} ref={refInput} placeholder="在这里添加备注" onBlur={onBlur}/>*/}
      <input {...rest}/>
    </Label>
  );
};


export {Input};