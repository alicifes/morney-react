import styled from 'styled-components';

const NoteSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      height: 72px;
      width: 100%;
      border:none;
      background: none;
    }
  }
`

export {NoteSection}